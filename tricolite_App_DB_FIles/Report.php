<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

class Report extends MY_Controller
{
  public function __construct() {
    
    parent:: __construct();
    $this->load->helper("url");
    $this->load->library("pagination");
    $this->load->database();
    // $this->load->library('m_pdf');
  }
  
  public function onSaveDailyReportData() {
    
    $inputData = json_decode(file_get_contents('php://input'), true);
    
    if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {
      
      $taskId = $inputData['taskId'];
      
      $this->db->select('trc_customer_task.*');
      $this->db->from('trc_customer_task');
      $this->db->where('trc_customer_task.id', $taskId);
      $this->db->where('trc_customer_task.del','0');
      $taskData = $this->db->get()->row_array();
      
      if($taskData['status'] == 'Open') {
        
        $updatedData = array(
          'status' => 'Running',
          'status_update_on' => $this->dateData['dateCreated'],
          'status_updated_by' => $inputData['loginId'],
          'status_updated_by_name' => $inputData['loginName'],
          'status_updated_by_type' => $inputData['loginType'],
          'status_reason' => ''
        );
        
        $this->db->where('id', $taskId);
        $this->db->update('trc_customer_task', $updatedData);
      }
      
      $nextFollowUpDate = '0000-00-00 00:00:00';
      
      if($inputData['nextFollowUpDate']) {
        
        $nextFollowUpDate = $inputData['nextFollowUpDate'].' '.$inputData['nextFollowUpTime'];
      } 
      
      if(isset($inputData['contactName']) && $inputData['contactName'] == 'Other') {
        
          $inputData['contactName'] = $inputData['otherContactName']; 
          
          $projectContactData = array(
            
            'date_created' => $this->dateData['dateCreated'],
            'created_by' => $inputData['loginId'],
            'created_by_name' => $inputData['loginName'],
            'created_by_type' => $inputData['loginType'],
            'customer_id' => $taskData['customer_id'],
            'project_id' => $taskData['project_id'],
            'name' => isset($inputData['contactName']) && $inputData['contactName'] ? $inputData['contactName'] : '',
            'email' => isset($inputData['email']) && $inputData['email'] ? $inputData['email'] : NULL,
            'mobile' => isset($inputData['mobile']) && $inputData['mobile'] ? $inputData['mobile'] : NULL
          );
          
          $this->db->insert('trc_customer_project_contact',$projectContactData);

      }


      if(isset($inputData['signatureData']) && $inputData['signatureData']) {

          $imageName = uniqid(). '.png';

      } else {

           $imageName = '';
      }
      

      
      $updatedData = array(
        
        'date_created' => $this->dateData['dateCreated'],
        'created_by' => $inputData['loginId'],
        'created_by_name' => $inputData['loginName'],
        'created_by_type' => $inputData['loginType'],
        'customer_id' => $taskData['customer_id'],
        'customer_name' => $taskData['customer_name'],
        'customer_code' => $taskData['customer_code'],
        'customer_mobile' => $taskData['customer_name'],
        'project_id' => $taskData['project_id'],
        'project_name' => $taskData['project_name'],
        'task_id' => $taskId,
        'task_no' => $taskData['task_no'],
        'work_detail' => $inputData['workDetail'],
        'suggestion' => isset($inputData['suggestion']) && $inputData['suggestion'] ? $inputData['suggestion'] : '',
        'failure_cause' => isset($inputData['causeFailure']) && $inputData['causeFailure'] ? $inputData['causeFailure'] : '',
        'status' => $inputData['workStatus'],
        'next_followup_date' => $nextFollowUpDate,
        'reason_not_closer' => isset($inputData['reasonNotCloser']) && $inputData['reasonNotCloser'] ? $inputData['reasonNotCloser'] : '',
        'travel_expense' => isset($inputData['travelExpense']) && $inputData['travelExpense'] ? $inputData['travelExpense'] : 0,
        'expense_description' => isset($inputData['expenseDetail']) && $inputData['expenseDetail'] ? $inputData['expenseDetail'] : '',
        'other_expense' => isset($inputData['otherExpense']) && $inputData['otherExpense'] ? $inputData['otherExpense'] : 0,
        'action_planned' => isset($inputData['actionPlanned']) && $inputData['actionPlanned'] ? $inputData['actionPlanned'] : '',
        'contact_name' => isset($inputData['contactName']) && $inputData['contactName'] ? $inputData['contactName'] : '',
        'mobile' => isset($inputData['mobile']) && $inputData['mobile'] ? $inputData['mobile'] : '',
        'email' => isset($inputData['email']) && $inputData['email'] ? $inputData['email'] : '',
        'customer_remark' => isset($inputData['remark']) && $inputData['remark'] ? $inputData['remark'] : '',
        'customer_rating' => isset($inputData['rating']) && $inputData['rating'] ? $inputData['rating'] : '',
        'customer_signature' => $imageName
      );
      
      if($this->db->insert('trc_customer_task_work_report', $updatedData)) {

            if($imageName) {

                  $uploadPath = $_SERVER["DOCUMENT_ROOT"] . '/api/uploads/Task_Doc/'. $imageName;
                  file_put_contents($uploadPath, base64_decode($inputData['signatureData']));
            }

            if(isset($inputData['reasonNotCloser']) && $inputData['reasonNotCloser']) {

                  $updatedData = array(
                    'status' => $inputData['workStatus'],
                    'status_update_on' => $this->dateData['dateCreated'],
                    'status_updated_by' => $inputData['loginId'],
                    'status_updated_by_name' => $inputData['loginName'],
                    'status_updated_by_type' => $inputData['loginType'],
                    'status_reason' => $inputData['reasonNotCloser']
                  );
                  
                  $this->db->where('id', $taskId);
                  $this->db->update('trc_customer_task', $updatedData);
            }
        
        
            $status = 'success';
            $statusMessage = '';
            if($inputData['workStatus']=='Pending' || $inputData['workStatus']=='Close'){
              $this->sendSmsForWorkStatus($inputData);
              $this->sendMailForWorkStatus($inputData);
            }

            if($inputData['rating']<3){
              $this->sendMailForSuggestion($inputData);
            }
        
      } else {
        
        $status = 'error';
        $statusMessage = $this->db->error();
      }
      
      
      $result = array(
        'status' => $status,
        'statusMessage' => $statusMessage
      );
      
      echo json_encode($result);
      
    } else {
      
      $this->onReturnErrorMessage();
    }  
  }
  
  public function sendSmsForWorkStatus($inputData){
    
    if($inputData['workStatus']=='Pending'){
      $msg ='Pending';
    }
    if($inputData['workStatus']=='Close'){
      $msg='Close';
    }
    
    $msg =urlencode( $msg );
    
    $ch = curl_init();
    
    
    curl_setopt($ch,CURLOPT_URL, 'https://www.smsjust.com/blank/sms/user/urlsms.php?username=tricolite12&pass=w5!7XB@r&senderid=CUSAIX&dest_mobileno='.$inputData['mobile'].'&msgtype=UNI&message='.$msg.'&response=Y');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    
    $send_otp = curl_exec($ch);
    
    curl_close($ch);
  }


  public function sendMailForWorkStatus($inputData){

    $config = Array(
    'protocol' => 'smtp',
      'smtp_host' => 'ssl://smtp.googlemail.com',
      'smtp_port' => 465,
      'smtp_user' => 'cw2861997@gmail.com',
      'smtp_pass' => '7015729653',
      'mailtype' => 'html',
      'charset' => 'iso-8859-1',
      'wordwrap' => TRUE); 

      
    $this->load->library('email', $config);
    $this->email->set_newline("\r\n");
    $this->email->from('cw2861997@gmail.com');
    
    
      // $contactData[$i]['email']
    $this->email->to($inputData['email']);
    $this->email->subject('Work Status');
    $this->email->message($inputData['workStatus']);
    $this->email->send();
  }


  public function sendMailForSuggestion($inputData){
    $config = Array(
      'protocol' => 'smtp',
      'smtp_host' => 'ssl://smtp.googlemail.com',
      'smtp_port' => 465,
      'smtp_user' => 'cw2861997@gmail.com',
      'smtp_pass' => '7015729653',
      'mailtype' => 'html',
      'charset' => 'iso-8859-1',
      'wordwrap' => TRUE); 

      
    $this->load->library('email', $config);
    $this->email->set_newline("\r\n");
    $this->email->from('cw2861997@gmail.com');
    
    
      // $contactData[$i]['email']
    $this->email->to($inputData['email']);
    $this->email->subject('Suggestion');
    $this->email->message('Please provide Suggestion');
    $this->email->send();

  }
  
  ////////////Yogesh////////
  
  public function onSaveTaskCheckList()
  {
    
    $inputData = json_decode(file_get_contents('php://input'), true);
    if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']){
      
      $taskId = $inputData['taskId'];
      
      $this->db->select('trc_customer_task.*');
      $this->db->from('trc_customer_task');
      $this->db->where('trc_customer_task.id', $taskId);
      $this->db->where('trc_customer_task.del','0');
      $taskData = $this->db->get()->row_array();
      
      if($taskData['status'] == 'Open')
      {
          $updatedData = array(
            'status' => 'Running',
            'status_update_on' => $this->dateData['dateCreated'],
            'status_updated_by' => $inputData['loginId'],
            'status_updated_by_name' => $inputData['loginName'],
            'status_updated_by_type' => $inputData['loginType'],
            'status_reason' => ''
          );
          
          $this->db->where('id', $taskId);
          $this->db->update('trc_customer_task', $updatedData);
      }
      
      
      foreach ($inputData['fgWisecheckList'] as $fgKey => $fgRow) {
        
            foreach ($fgRow['newCheckListCategory'] as $categorykey => $categoryRow) {
              
                foreach ($categoryRow['checkListData'] as $key => $row) {
                      
                      $this->db->select('trc_customer_task_commissioning_check_list.*');
                      $this->db->from('trc_customer_task_commissioning_check_list');
                      $this->db->where('trc_customer_task_commissioning_check_list.task_id', $taskId);
                      
                      $this->db->where('trc_customer_task_commissioning_check_list.fg_no', $fgRow['fg_no']);
                      
                      $this->db->where('trc_customer_task_commissioning_check_list.checklist_title', $row['check_list_point']);
                      
                      $this->db->where('trc_customer_task_commissioning_check_list.del','0');
                      $taskCheckExist = $this->db->get()->row_array();
                      
                      $isChecked = $row['checked'] ? 1 : 0;

                      if(isset($taskCheckExist['id']) && $taskCheckExist['id']) {
                        
                            $updatedData = array(
                               'checklist_checked' => $isChecked,
                               'checklist_remark' => isset($row['remark']) && $row['remark'] ? $row['remark'] : '',
                            );
                            
                            $this->db->where('trc_customer_task_commissioning_check_list.id', $taskCheckExist['id']);
                            
                            $this->db->update('trc_customer_task_commissioning_check_list', $updatedData);
                        
                      } else {

                            $updatedData = array(
                              
                              'date_created' => $this->dateData['dateCreated'],
                              'created_by' => $inputData['loginId'],
                              'created_by_name' => $inputData['loginName'],
                              'created_by_type' => $inputData['loginType'],
                              'customer_id' => $taskData['customer_id'],
                              'customer_name' => $taskData['customer_name'],
                              'project_id' => $taskData['project_id'],
                              'project_name' => $taskData['project_name'],
                              'task_id' => $taskId,
                              'task_no' => $taskData['task_no'],
                              'task_fg_id' => $fgRow['id'],
                              'fg_no' => $fgRow['fg_no'],
                              'category' => $categoryRow['category'],
                              'checklist_title' => $row['check_list_point'],
                              'checklist_remark' => isset($row['remark']) && $row['remark'] ? $row['remark'] : '',
                              'checklist_checked' => $isChecked
                            );
                            
                            $this->db->insert('trc_customer_task_commissioning_check_list', $updatedData);
                      }

                }
            }


            if($inputData['fgSelectedIndex'] == $fgKey) {

                  $contactName = $inputData['contactName'] == 'Other' ? $inputData['otherContactName'] : $inputData['contactName'];

                  if(isset($inputData['contactMobile']) && $inputData['contactMobile']) {

                      $contactMobile = $inputData['contactMobile'];
                      
                  } else {

                      $contactMobile = NULL;
                  }
                  
                  $imageName = uniqid(). '.png';

                  $imageUpdatedData = array(
                    
                      'signature_contact_name' => $contactName,
                      'signature_contact_mobile' => $contactMobile,
                      'signature_image' => $imageName,
                      'signature_type' => isset($inputData['contactName']) && $inputData['contactName'] == 'Other' ? 'Other' : ''
                  );
                  
                  $this->db->where('task_id', $taskId);
                  $this->db->where('fg_no', $fgRow['fg_no']);
                  $this->db->update('trc_customer_task_fg', $imageUpdatedData);

                  $uploadPath = $_SERVER["DOCUMENT_ROOT"] . '/api/uploads/Task_Doc/'. $imageName;
                  
                  file_put_contents($uploadPath, base64_decode($inputData['signatureData']));
            }
      }
      
      
      $result = array(
        
        'status' => 'success',
        'statusMessage' => ''
      );
      
      echo json_encode($result);
      
    } else {
      
      $this->onReturnErrorMessage();
    }
  }
  
  public function onReturnErrorMessage() {
    
    $resultData = array('status' => 'error', 'statusMessage' => 'You are not authorized to access this information!');
    
    echo json_encode($resultData);
  }

  public function viewMobileServiceReport(){

		$inputData = json_decode(file_get_contents('php://input'), true);

		if(isset($inputData['taskId']) && $inputData['taskId'])  {

            $taskId = $inputData['taskId'];
            $taskReportId = $inputData['taskReportId'];

            $this->db->select('trc_customer_task.*');
      			$this->db->from('trc_customer_task');
      			$this->db->where('trc_customer_task.id', $taskId);
                  $this->db->where('trc_customer_task.del','0');
            $taskData = $this->db->get()->row_array();

            if($taskData['status'] != 'Close') {

        				$dateCreatedFormat = date_create($taskData['date_created']);
        				$dateCreated = date_format($dateCreatedFormat, 'Y-m-d');

        				$diff = strtotime(date('Y-m-d')) - strtotime($dateCreated);  

                $taskData['days'] = abs(round($diff / 86400)) . ' Days';

                $taskData['taskCloseDate'] = '';
                

      			} else {

              				$taskClosingFormat = date_create($taskData['status_update_on']);
              				$taskClosingDate = date_format($taskClosingFormat, 'Y-m-d');

              				$diff = strtotime(date('Y-m-d')) - strtotime($taskClosingDate);  
                      $taskData['days'] = abs(round($diff / 86400)) . ' Days';
                      
                      $taskData['taskCloseDate'] = $taskData['status_update_on'];
            }
            

      			$dateCreated = date_create($taskData['date_created']);
      			$taskData['dateCreated'] = date_format($dateCreated, 'd M Y');

      			$taskData['timeCreated'] = date_format($dateCreated, 'H:i A');
                  
            $this->db->select('trc_customer_project.*');
      			$this->db->from('trc_customer_project');
      			$this->db->where('trc_customer_project.id', $taskData['project_id']);
      			$this->db->where('trc_customer_project.del','0');
      			$taskProjectData = $this->db->get()->row_array();

      			$this->db->select('trc_customer.*');
      			$this->db->from('trc_customer');
      			$this->db->where('trc_customer.id', $taskData['customer_id']);
      			$this->db->where('trc_customer.del','0');
            $taskCustomerData = $this->db->get()->row_array();
                  
            $this->db->select('trc_customer_contact.*');
      			$this->db->from('trc_customer_contact');
      			$this->db->where('trc_customer_contact.customer_id', $taskData['customer_id']);
      			$this->db->where('trc_customer_contact.del','0');
            $customerContactData = $this->db->get()->result_array();

            $this->db->select('trc_customer_task_fg.*');
      			$this->db->from('trc_customer_task_fg');
      			$this->db->where('trc_customer_task_fg.task_id', $taskId);
      			$this->db->where('trc_customer_task_fg.project_id', $taskData['project_id']);
      			$this->db->where('trc_customer_task_fg.customer_id', $taskData['customer_id']);
      			$this->db->where('trc_customer_task_fg.del','0');
      			$taskFGData = $this->db->get()->result_array();

      			foreach ($taskFGData as $key => $row) {

          				$validUpToDate = date_create($row['valid_upto']);
          				$taskFGData[$key]['validUpToDate'] = date_format($validUpToDate, 'd M Y');

          				$this->db->select('COUNT(trc_customer_task_fg.id) as serviceRequestCount');
          				$this->db->from('trc_customer_task_fg');
          				$this->db->where('trc_customer_task_fg.fg_no', $row['fg_no']);
          				$this->db->where('trc_customer_task_fg.del','0');
          				$this->db->group_by('trc_customer_task_fg.task_no');
          				$fgAllTaskData = $this->db->get()->row_array();

          				$taskFGData[$key]['serviceRequestCount'] = $fgAllTaskData['serviceRequestCount'];

          				$this->db->select('trc_customer_project_fg.model,trc_customer_project_fg.sub_model');
          				$this->db->from('trc_customer_project_fg');
          				$this->db->where('trc_customer_project_fg.fg_no',$row['fg_no']);
          				$this->db->where('trc_customer_project_fg.del','0');
          				$taskFgModel = $this->db->get()->row_array();

          				$taskFGData[$key]['model'] = $taskFgModel['model'];
          				$taskFGData[$key]['sub_model'] = $taskFgModel['sub_model'];
            }
            
            $this->db->select('trc_customer_task_spare_part_assign.*');
      			$this->db->from('trc_customer_task_spare_part_assign');
      			$this->db->where('trc_customer_task_spare_part_assign.task_id', $taskId);
      			$this->db->where('trc_customer_task_spare_part_assign.del','0');
            $taskAssignedPartData = $this->db->get()->result_array();
            
            $this->db->select('trc_customer_task_assign.*');
      			$this->db->from('trc_customer_task_assign');
      			$this->db->where('trc_customer_task_assign.task_id', $taskId);
      			$this->db->where('trc_customer_task_assign.del','0');
            $taskAssignData = $this->db->get()->result_array();
            
      			$this->db->select('trc_customer_project_fg.*');
      			$this->db->from('trc_customer_project_fg');
      			$this->db->where('trc_customer_project_fg.project_id', $taskData['project_id']);
      			$this->db->where('trc_customer_project_fg.customer_id', $taskData['customer_id']);

      			$this->db->where('trc_customer_project_fg.del','0');
      			$taskProjectFGData = $this->db->get()->result_array();

      			foreach ($taskProjectFGData as $key => $row) {

        				$validUpToDate = date_create($row['warranty_valid_upto']);
        				$taskProjectFGData[$key]['validUpToDate'] = date_format($validUpToDate, 'd M Y');

        				$this->db->select('COUNT(trc_customer_task_fg.id) as serviceRequestCount, trc_customer_task_fg.service_center');
        				$this->db->from('trc_customer_task_fg');
        				$this->db->where('trc_customer_task_fg.fg_no', $row['fg_no']);
        				$this->db->where('trc_customer_task_fg.del','0');
        				$this->db->group_by('trc_customer_task_fg.task_no');
        				$fgAllTaskData = $this->db->get()->row_array();

        				$taskProjectFGData[$key]['serviceRequestCount'] = $fgAllTaskData['serviceRequestCount'];
        				$taskProjectFGData[$key]['service_center'] = $fgAllTaskData['service_center'];
            }
                
            $this->db->select('trc_customer_task_work_report.*');
      			$this->db->from('trc_customer_task_work_report');
      			$this->db->where('trc_customer_task_work_report.id', $taskReportId);
      			$this->db->where('trc_customer_task_work_report.del','0');
      			$taskWorkReport = $this->db->get()->result_array();

      			$this->db->select('trc_customer_task_spare_part_installed.*');
      			$this->db->from('trc_customer_task_spare_part_installed');
      			$this->db->where('trc_customer_task_spare_part_installed.task_id', $taskId);
      			$this->db->where('trc_customer_task_spare_part_installed.del','0');
      			$taskInstalledPartData = $this->db->get()->result_array();


      			$this->db->select('trc_customer_project_contact.id as proContactId,trc_customer_project_contact.name as proContactName, trc_customer_project_contact.email as proContactEmail');
      			$this->db->from('trc_customer_project_contact');
      			$this->db->where('trc_customer_project_contact.project_id', $taskData['project_id']);
      			$this->db->where('trc_customer_project_contact.del','0');
      			$projectContactData = $this->db->get()->result_array();


      			$this->db->select('trc_customer_task_commissioning_check_list.*');
      			$this->db->from('trc_customer_task_commissioning_check_list');
      			$this->db->where('trc_customer_task_commissioning_check_list.task_id', $taskId);
      			$this->db->where('trc_customer_task_commissioning_check_list.del','0');
      			$taskAssignedCommissioningData = $this->db->get()->result_array();
      			

      			$this->db->select('trc_customer_task_remark.*');
      			$this->db->from('trc_customer_task_remark');
      			$this->db->where('trc_customer_task_remark.task_id', $taskId);
      			$this->db->order_by('trc_customer_task_remark.id','DESC');
      			$taskRemarkData = $this->db->get()->result_array();

      			foreach ($taskRemarkData as $key => $row) {

          				$dateCreated = date_create($row['date_created']);
          				$taskRemarkData[$key]['dateCreated'] = date_format($dateCreated, 'd M Y');
      			}

      			$this->db->select('trc_customer_task_status_history.*');
      			$this->db->from('trc_customer_task_status_history');
      			$this->db->where('trc_customer_task_status_history.task_id', $taskId);
      			$this->db->order_by('trc_customer_task_status_history.id','ASC');
            $taskEngineerStatus = $this->db->get()->result_array();

        }


            $customerConData='';
            foreach ($customerContactData as $customerContactkey => $customerContactValue) {

                $customerConData .='
                
                <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Contact Person :</strong>'.$customerContactValue['name'].'</p>
                <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Contact Mobile :</strong>'.$customerContactValue['mobile'].'</p>';
            }

            $projectData = '';
            $natureData = '';

            foreach ($taskFGData as $fgkey => $fgvalue) {

                $projectData .='

                <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>So. Number :</strong>'.$fgvalue['so_no'].'</p>
                <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Product Model :</strong>'.$fgvalue['model'].' - '.$fgvalue['sub_model'].'</p>
                <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Product(FG No.) :</strong>'.$fgvalue['fg_no'].'</p>';

                $natureData .='
                <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;"><strong>Nature of Complaint :</strong> '.$fgvalue['nature_problem'].'</p>
                <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;"><strong>Description :</strong> '.$fgvalue['description'].'</p>';
            }

          
            $assignedEngineer='';

            foreach ($taskAssignData as $assignkey => $assignvalue) {

                if($assignvalue['type'] == 'Primary'){

                    $assignedEngineer .='
                    
                        <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Service Engineer :</strong>'.$assignvalue['user_name'].'</p>';
                }
                if($assignvalue['type'] == 'Secondary'){
                    
                    $assignedEngineer .='
                   
                    <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Sub Engineer :</strong>'.$assignvalue['user_name'].'</p>';

                }

            }

            $engineerStatus='';

            foreach ($taskEngineerStatus as $engiStatusKey => $engiStatus) {

                $engineerStatus .='

                <td style="font-size: 12px; border: 1px solid #000000; text-align: left; padding: 3px;">'.$engiStatus['status'].'-'.$engiStatus['date_created'].'</td>';

            }

            $workDetail='';
            $workFailure='';
            $workSuggestion='';
            $customerRemark='';
            $customerFeedback='';

            foreach ($taskWorkReport as $workDetailkey => $workvalue) {

                $workDetail .='

                <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">'.$workvalue['work_detail'].'</p>';

                $workFailure .='
                <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">'.$workvalue['failure_cause'].'</p>';

                $workSuggestion .='
                <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">'.$workvalue['suggestion'].'</p>';

                $customerRemark .='
                <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">'.$workvalue['customer_remark'].'</p>
                ';

                if($workvalue['customer_rating'] == '1'){

                    $customerFeedback .='<p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">
                    <img src="http://tricolite.abacusdesk.com/api/uploads/Customer_Feedback/star_1.svg" alt="">
                 </p>';

                }

                if($workvalue['customer_rating'] == '2'){

                    $customerFeedback .='
                        <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">
                            <img src="http://tricolite.abacusdesk.com/api/uploads/Customer_Feedback/star_2.svg" alt="">
                        </p>';
                }
                if($workvalue['customer_rating'] == '3'){

                    $customerFeedback .='
                        <p  style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">
                        <img src="http://tricolite.abacusdesk.com/api/uploads/Customer_Feedback/star_3.svg" alt="">
                        </p>';

                }
                if($workvalue['customer_rating'] == '4'){

                    $customerFeedback .='<p *ngIf="pdfData.taskWorkReport[0].customer_rating==4" style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">
                         <img src="http://tricolite.abacusdesk.com/api/uploads/Customer_Feedback/star_4.svg" alt="">
                      </p>';

                }

                if($workvalue['customer_rating'] == '5'){

                    $customerFeedback .='<p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">
                       <img src="http://tricolite.abacusdesk.com/api/uploads/Customer_Feedback/star_5.svg" alt="">
                    </p>';
                }
            }

            $installedSparePart='';
            $installedSparePartQty='';

            foreach ($taskInstalledPartData as $installkey => $installvalue) {

                $installedSparePart .='

                <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">'.$installvalue['part_name'].'</p>
                
                ';

                $installedSparePartQty .='<p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;">'.$installvalue['installed_qty'].'</p>';
            }

            $customerSignatureData='';
            $customerSign='';
            $customerSignInfo='';

            foreach ($taskWorkReport as $custmerSignkey => $custmerSignvalue) {

                $customerSignatureData .='

                <p style="font-size: 12px; margin: 0px; line-height: 16px; font-weight: 600; text-align: right;">('.$custmerSignvalue['contact_name'].')</p>
                <p style="font-size: 12px; margin: 0px; line-height: 16x; font-weight: 600; text-align: right;">('.$custmerSignvalue['mobile'].')</p>
                <p style="font-size: 12px; margin: 0px; line-height: 16px; font-weight: 600; text-align: right;">('.$custmerSignvalue['email'].')</p>';

                $customerSign .='
                <p style="font-size: 12px; margin: 0px; line-height: 16px; font-weight: 600; text-align: right;">Sign Date :'.$custmerSignvalue['date_created'].'</p>
                ';

                $customerSignInfo .='
               <p style="text-align: right;">
               <img class="w82" src=http://tricolite.abacusdesk.com/api/uploads/Task_Doc/'.$custmerSignvalue['customer_signature'].' alt="" style="height: 50px;">
               </p>
                ';

            }

        

            $html = '

            <div>
    
            <table style="width: 1024px; border: 1px solid #000000; margin: 0 auto; font-family: Arial, Helvetica, sans-serif;  table-layout: fixed; box-sizing: border-box;">
                <tr>
                    <td style="width: 612px; vertical-align: top; text-align: center; padding-top: 10px;">
                        <img src="http://tricolite.abacusdesk.com/assets/img/logo-pdf.png" alt="" style="height: 15px;">
                        <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Unit 1</strong> : Plot No. 18/1A, Site IV , Industrial Area Sahibabad – 201010 ,UP, INDIA.</p>
                        <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Unit 2</strong>: Plot No. 5, Sector-VI, IMT Manesar,Gurgaon, Haryana - 122050, INDIA</p>
                        <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Ph</strong> : +91-120-4550400,  <strong>Email</strong>: customercare@tricolite.com</p>
                        <h6 style="font-size: 14px; margin: 0px; line-height: 24px; font-weight: 600;">CCC/QR/01/00</h6>
                    </td>
                    <td style="width: 412px; vertical-align: top;">
                        <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Report No :</strong>'.$taskData['id'].'</p>
                        <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Company Name :</strong>'.$taskCustomerData['company_name'].'</p>
                        '.$customerConData.'
                        <p style="font-size: 12px; margin: 0px; line-height: 20px;"><strong>Project :</strong>'.$taskProjectData['project_name'].'</p>
                        '.$projectData.'
                        
                    </td>
                </tr>
                
                <tr>
                    <td colspan="2">
                        <h2 style="font-size: 15px; font-weight: 600; margin: 0px; line-height: 20px; border-bottom: 1px solid #000000;">Service Detail</h2>
                    </td>
                </tr>
                
                <tr>
                    <td style="width: 512px;">
                        <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;"><strong>Request No. :</strong>'.$taskData['task_no'].'<strong>'.'('.$taskData['transaction_type'].')'.'</strong></p>
                        '.$natureData.'                       
                    </td>
                    <td style="width: 512px;">
                        <p style="font-size: 12px; margin: 0px; margin-bottom: 5px; line-height: 20px;"><strong>Request Date :</strong> '.$taskData['dateCreated'].'-'.$taskData['timeCreated'].'</p>
                        '.$assignedEngineer.'
                    </td>
                </tr>
                
                <tr>
                    <td colspan="2" style="padding-top: 15px;"> 
                        <table style="width: 100%; table-layout: fixed; box-sizing: border-box; border-collapse: collapse;">
                            <tr>
                                <th style="font-size: 12px; border: 1px solid #000000; text-align: left; padding: 3px; padding: 3px; font-weight: 600; background: #cccccc;" >
                                    Complaint Received Date & Time
                                </th>
                                <th style="font-size: 12px; border: 1px solid #000000; text-align: left; padding: 3px; padding: 3px; font-weight: 600; background: #cccccc;" >
                                    Engineer Accepted Date & Time
                                </th>
                                <th style="font-size: 12px; border: 1px solid #000000; text-align: left; padding: 3px; padding: 3px; font-weight: 600; background: #cccccc;" >
                                    Engineer Reached Date & Time
                                </th>
                                <th style="font-size: 12px; border: 1px solid #000000; text-align: left; padding: 3px; padding: 3px; font-weight: 600; background: #cccccc;" >
                                    Complaint Closed Date & Time
                                </th>
                            </tr>
                            <tr>
                                <td style="font-size: 12px; border: 1px solid #000000; text-align: left; padding: 3px;">'.$taskData['dateCreated'].'-'.$taskData['timeCreated'].'</td>
                              
                                '.$engineerStatus.'

                                <td style="font-size: 12px; border: 1px solid #000000; text-align: left; padding: 3px;">'.$taskData['taskCloseDate'].'
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                
                <tr>
                    <td colspan="2" style="padding-top: 15px;">
                        <h2 style="font-size: 15px; font-weight: 600; margin: 0px; line-height: 20px; border-bottom: 1px solid #000000;">Spare Part Information</h2>
                    </td>
                </tr>             
                
                <tr>
                    <td style="padding-top: 20px;" colspan="2" >
                        <table style="width: 100%;">
                            <tr>
                                <td style="width: 900px;">
                                    <strong style="font-size: 12px; margin: 0px;">Part Name</strong>
                                   
                                   '.$installedSparePart.'
                                </td>
                                <td style="width: 124px; text-align: center;">
                                    <strong style="font-size: 12px; margin: 0px;">QTY.</strong>
                                   '.$installedSparePartQty.'
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                    
                </tr>
                
                <tr>
                    <td colspan="2" style="padding-top: 15px;">
                        <h2 style="font-size: 15px; font-weight: 600; margin: 0px; line-height: 20px; border-bottom: 1px solid #000000;">Work Detail</h2>
                    </td>
                </tr>
                
                <tr>
                    <td style="padding-top: 20px;" colspan="2" >
                        <table style="width: 100%;">
                            <tr>
                                <td style="width: 100%;">
                                    <strong style="font-size: 12px; margin: 0px;">Work Detail</strong>
                                   '.$workDetail.'
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%;">
                                    <strong style="font-size: 12px; margin: 0px;">Cause of Failure</strong>
                                    '.$workFailure.'
                                </td>
                            </tr>
                            <tr>
                                <td style="width: 100%;">
                                    <strong style="font-size: 12px; margin: 0px;">Suggestion</strong>
                                   '.$workSuggestion.'
                                </td>
                            </tr>
                        </table>
                        
                    </td>
                    
                </tr>
                
                <tr>
                    <td colspan="2" >
                        <table style="width: 100%;">
                            <tr>
                                <td style="width: 800px">
                                    <strong style="font-size: 12px; margin: 0px;">Customer Remark</strong>
                                    '.$customerRemark.'
                                </td>
                                
                                <td style="width: 224px">
                                    <strong style="font-size: 12px; margin: 0px;">Customer Feedback</strong>
                                   '.$customerFeedback.'
                                </td>
                            </tr>
                            
                        </table>
                        
                    </td>
                    
                </tr>
                
                <tr>
                    <td colspan="2" style="padding-top: 15px;">
                        <h2 style="font-size: 15px; font-weight: 600; margin: 0px; line-height: 20px; border-bottom: 1px solid #000000;">Authorized Signature Detail</h2>
                    </td>
                </tr>
                
                <tr>
                    <td colspan="2" >
                        <table style="width: 100%;">
                            <tr>
                                <td style="width: 100%; text-align: right;">
                                    <p style="font-size: 12px; margin: 0px; line-height: 20px; font-weight: 600;">
                                        Customer Signature
                                    </p>
                                   '.$customerSignatureData.'
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    '.$customerSign.'
                                </td>
                              
                            </tr>
                            <tr>
                          
                            <td tyle="width: 100%; text-align: right;">
                    '.$customerSignInfo.'
                    </td>
                        </tr>
                        
                            
                        </table>
                        
                    </td>
                    
                </tr>

            </table>
            
        </div>
            ';

         

            echo json_encode($html);
    

	}
  
  
}

?>




