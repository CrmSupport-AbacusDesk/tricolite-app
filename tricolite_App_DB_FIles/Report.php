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

                  if($inputData['contactName'] == 'Other') {

                      $inputData['contactName'] = $inputData['otherContactName']; 

                      $projectContactData = array(

                          'date_created' => $this->dateData['dateCreated'],
                          'created_by' => $inputData['loginId'],
                          'created_by_name' => $inputData['loginName'],
                          'created_by_type' => $inputData['loginType'],
                          'customer_id' => $taskData['customer_id'],
                          'project_id' => $taskData['project_id'],
                          'name' => $inputData['contactName'],
                          'email' => $inputData['email'],
                          'mobile' => $inputData['mobile']
                      );

                      $this->db->insert('trc_customer_project_contact',$projectContactData);

                  }

                  $imageName = uniqid(). '.png';

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
                         'suggestion' => $inputData['suggestion'],
                         'failure_cause' => $inputData['causeFailure'],
                         'status' => $inputData['workStatus'],
                         'next_followup_date' => $nextFollowUpDate,
                         'reason_not_closer' => $inputData['reasonNotCloser'],
                         'travel_expense' => $inputData['travelExpense'],
                         'expense_description' => $inputData['expenseDetail'],
                         'other_expense' => $inputData['otherExpense'],
                         'action_planned' => $inputData['actionPlanned'],
                         'contact_name' => $inputData['contactName'],
                         'mobile' => $inputData['mobile'],
                         'email' => $inputData['email'],
                         'customer_remark' => $inputData['remark'],
                         'customer_rating' => $inputData['rating'],
                         'customer_signature' => $imageName
     	       	    );

             	    if($this->db->insert('trc_customer_task_work_report', $updatedData)) {

                          $uploadPath = $_SERVER["DOCUMENT_ROOT"] . '/api/uploads/Task_Doc/'. $imageName;

                        //   file_put_contents($uploadPath, base64_decode($inputData['signatureData']));
                         

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

                          $status = 'success';
                          $statusMessage = '';
                          if($inputData['workStatus']=='Pending' || $inputData['workStatus']=='Close'){
                            $this->sendSmsForWorkStatus($inputData);
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


	  public function onSaveTaskCheckList() {

          $inputData = json_decode(file_get_contents('php://input'), true);

        //   print_r($inputData); 

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

                $imageName = uniqid(). '.png';

          	    foreach ($inputData['fgWisecheckList'] as $fgKey => $fgRow) {

                   foreach ($fgRow['newCheckListCategory'] as $categorykey => $categoryRow) {

                        foreach ($categoryRow['checkListData'] as $key => $row){

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
                                
                                    'checklist_checked' => $isChecked
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
          	    }


                $contactName = $inputData['contactName'] == 'Other' ? $inputData['otherContactName'] : $inputData['contactName'];

                $contactMobile = $inputData['contactMobile'];

                $imageUpdatedData = array(

                    'signature_contact_name' => $contactName,
                    'signature_contact_mobile' => $contactMobile,
                    'signature_image' => $imageName
                );

                $this->db->where('id', $taskId);
                $this->db->update('trc_customer_task', $imageUpdatedData);

                $uploadPath = $_SERVER["DOCUMENT_ROOT"] . '/api/uploads/Task_Doc/'. $imageName;

                file_put_contents($uploadPath, base64_decode($inputData['signatureData']));


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

            // $taskId = $this->my_simple_crypt($inputData['taskId'],"d");
            $taskId = $inputData['taskId'];

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
			$this->db->where('trc_customer_task_work_report.task_id', $taskId);
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

            $resultData = array(

				'taskData' => $taskData,
				'taskProjectData' => $taskProjectData,
                'taskCustomerData' => $taskCustomerData,
                'customerContactData' => $customerContactData,
                'taskFGData' => $taskFGData,
                'taskAssignedPartData' => $taskAssignedPartData,
                'taskAssignData' => $taskAssignData,
                'taskProjectFGData' => $taskProjectFGData,
				'taskWorkReport' => $taskWorkReport,
				'taskInstalledPartData' => $taskInstalledPartData,
				'projectContactData' => $projectContactData,
				'taskAssignedCommissioningData' => $taskAssignedCommissioningData,
				'taskRemarkData' => $taskRemarkData,
				'taskEngineerStatus' => $taskEngineerStatus,

				
            );

            
        }

            echo json_encode($resultData);

         

    

	}
	
}

?>




