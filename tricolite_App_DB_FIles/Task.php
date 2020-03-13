<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

class Task extends MY_Controller
{
	public function __construct() {
		
		parent:: __construct();
		$this->load->helper("url");
		$this->load->library("pagination");
		$this->load->database();
	}

	public function getTaskList() {

		$inputData = json_decode(file_get_contents('php://input'), true);

		if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] &&  $inputData['loginId'])  {

		      $this->db->select('trc_customer_task.*');
			  $this->db->from('trc_customer_task');
			  $this->db->where('trc_customer_task.del','0');

			  if($inputData['loginType'] == 'Technician') {
			       $this->db->where('trc_customer_task.assign_to', $inputData['loginId']);
			  }

			  if(isset($inputData['type']) && $inputData['type']) {

			  	   $this->db->where('trc_customer_task.task_type', $inputData['type']);
			  }

			  if(isset($inputData['customerId']) && $inputData['customerId']) {
			  	    $this->db->where('trc_customer_task.customer_id', $inputData['customerId']);
			  }

			  if(isset($inputData['searchData']['dateFrom']) && $inputData['searchData']['dateTo']) {


			  	      $this->db->where('DATE(trc_customer_task.date_created) >= "'.$inputData['searchData']['dateFrom'].'"');

			  	      $this->db->where('DATE(trc_customer_task.date_created) <= "'.$inputData['searchData']['dateTo'].'"');

			  }


			  if(isset($inputData['searchData']['range']) && $inputData['searchData']['range']) {

                       $dateFrom = date('Y-m-d', strtotime('-'.$inputData['searchData']['range'].' day', strtotime(date('Y-m-d'))));

			  	      $this->db->where('DATE(trc_customer_task.date_created) > "'.$dateFrom.'"');
			  }

           
              if(isset($inputData['searchData']['priorityList']) && $inputData['searchData']['priorityList']) {

              	   $count = 0;

              	   foreach ($inputData['searchData']['priorityList'] as $key => $row) {

                            if(isset($row['checked']) && $row['checked']) {

                            	  if($count == 0) {
                            	  	   $this->db->group_start();
                            	  }

                            	  $this->db->or_where('trc_customer_task.priority', $row['name']);

                            	  $count++;
                            }
              	   }

              	   if($count > 0) {

                         $this->db->group_end();
              	   }
			  }


			  if(isset($inputData['searchData']['complaintTypeList']) && $inputData['searchData']['complaintTypeList']) {

              	   $count = 0;

              	   foreach ($inputData['searchData']['complaintTypeList'] as $key => $row) {

                            if(isset($row['checked']) && $row['checked']) {

                            	  if($count == 0) {
                            	  	   $this->db->group_start();
                            	  }

                            	  $this->db->or_where('trc_customer_task.compaint_title', $row['title']);

                            	  $count++;
                            }
              	   }

              	   if($count > 0) {

                         $this->db->group_end();
              	   }
			  }


			  if(isset($inputData['searchData']['statusList']) && $inputData['searchData']['statusList']) {

              	   $count = 0;

              	   foreach ($inputData['searchData']['statusList'] as $key => $row) {

                            if(isset($row['checked']) && $row['checked']) {

                            	  if($count == 0) {
                            	  	   $this->db->group_start();
                            	  }

                            	  $this->db->or_where('trc_customer_task.status', $row['name']);

                            	  $count++;
                            }
              	   }

              	   if($count > 0) {

                         $this->db->group_end();
              	   }
			  }


			  if(isset($inputData['inputSearch']) && $inputData['inputSearch']) {

			  	    $this->db->group_start();

                          $this->db->or_like('trc_customer_task.fg_search', $inputData['inputSearch']);

                          $this->db->or_like('trc_customer_task.service_type_search', $inputData['inputSearch']);

                          $this->db->or_like('trc_customer_task.task_no', $inputData['inputSearch']);

                          $this->db->or_like('trc_customer_task.priority', $inputData['inputSearch']);

                          $this->db->or_like('trc_customer_task.project_name', $inputData['inputSearch']);

                          if($inputData['loginType'] == 'Technician') {

                                  $this->db->or_like('trc_customer_task.customer_name', $inputData['inputSearch']);
                          }

			  	    $this->db->group_end();
			  }

			  $this->db->order_by('FIELD ( trc_customer_task.status, "Open",  "Running", "Pending", "Hold", "Cancel", "Close" )');

			  $newDB = clone $this->db;

			  $totalTaskCount = $newDB->get()->num_rows();

			  if(isset($inputData['pageLimit']) && $inputData['pageLimit']) {

			        $this->db->limit($inputData['pageLimit'], ($inputData['start'] - 1) * $inputData['pageLimit']);
			  }

			  $taskList = $this->db->get()->result_array();


			  foreach ($taskList as $key => $row) {

			  	     $taskDateFormat = date_create($row['date_created']);

					 $dateCreated = date_format($taskDateFormat, 'd M y');
			  	     $timeCreated = date_format($taskDateFormat, 'H:i A');

			  	     $taskList[$key]['dateCreated'] = $dateCreated;
			  	     $taskList[$key]['timeCreated'] = $timeCreated;

					 $taskDateFormat = date_create($row['date_created']);
					 $taskDate = date_format($taskDateFormat, 'Y-m-d');

					 if($row['status'] == 'Close') {

					 	$taskCloseDate  = date_create($row['status_update_on']);
					 	$taskCloseDateFormat = date_format($taskCloseDate, 'Y-m-d');

					    $diff = strtotime($taskCloseDateFormat) - strtotime($taskDate);  

					 } else {

					    $diff = strtotime(date('Y-m-d')) - strtotime($taskDate);  

					 }

				     $taskList[$key]['days'] = abs(round($diff / 86400));

				     $timestamp1 = strtotime($row['last_updated']); 
				     $currentDate = $this->dateData['dateCreated'];
					 $timestamp2 = strtotime($currentDate);

					 $hours =  round(abs($timestamp2 - $timestamp1)/(60*60));
					 $taskList[$key]['lastActivityInterval'] = $hours . ' Hours Ago';

					 $this->db->select('trc_customer_task_status_history.status');
					 $this->db->from('trc_customer_task_status_history');
					 $this->db->where('trc_customer_task_status_history.del','0');
					 $this->db->where('trc_customer_task_status_history.task_id', $row['id']);
					$this->db->order_by('trc_customer_task_status_history.id','DESC');

					 $taskStatusDta = $this->db->get()->row_array();
					 
                     $taskList[$key]['workStatus'] = $taskStatusDta['status'];

					 $this->db->select('trc_customer_contact.*');
					 $this->db->from('trc_customer_contact');
					 $this->db->where('trc_customer_contact.del','0');
					 $this->db->where('trc_customer_contact.customer_id', $row['customer_id']);
					 $customerContactData = $this->db->get()->row_array();

                     $taskList[$key]['customer_contact_name'] = $customerContactData['name'];
                     $taskList[$key]['customer_contact_mobile'] = $customerContactData['mobile'];

                     $this->db->select('trc_customer_task_assign.*');
					 $this->db->from('trc_customer_task_assign');
					 $this->db->where('trc_customer_task_assign.del','0');
					 $this->db->where('trc_customer_task_assign.type','Primary');
					 $this->db->where('trc_customer_task_assign.task_id', $row['id']);
					 $taskPrimaryAssignData = $this->db->get()->row_array();

					 if(isset($taskPrimaryAssignData['id']) && $taskPrimaryAssignData['id']) {

					     $taskList[$key]['assignUserName'] = $taskPrimaryAssignData['user_name'];

					     $this->db->select('trc_user.mobile');
						 $this->db->from('trc_user');
						 $this->db->where('trc_user.del','0');
						 $this->db->where('trc_user.id', $taskPrimaryAssignData['user_id']);
						 $primaryUserData = $this->db->get()->row_array();

					     $taskList[$key]['assignUserMobile'] = $primaryUserData['mobile'];

					 } else {

					 	$taskList[$key]['assignUserName'] = '';
					 	$taskList[$key]['assignUserMobile'] = '';
					 }


			  	     $this->db->select('trc_customer_task_fg.*');
					 $this->db->from('trc_customer_task_fg');
					 $this->db->where('trc_customer_task_fg.del','0');
					 $this->db->where('trc_customer_task_fg.task_id', $row['id']);
					 $fgData = $this->db->get()->result_array();

                      
                     $this->db->select('trc_customer_task_feedback.id');
					 $this->db->from('trc_customer_task_feedback');
					 $this->db->where('trc_customer_task_feedback.del','0');
					 $this->db->where('trc_customer_task_feedback.task_id', $row['id']);
					 $feedbackCount = $this->db->get()->num_rows();

					 $taskList[$key]['feedbackCount'] = $feedbackCount;


					 foreach ($fgData as $fgKey => $fgRow) {
					  	
						//  $fgData[$fgKey]['serviceType'] = ($fgRow['warranty_type'] == 'Under Warranty') ? 'Free Service' : 'Paid Service';
						$fgData[$fgKey]['serviceType'] = $fgRow['warranty_type'];
							 
						  
					 }

					 $taskList[$key]['feedbackCount'] = $feedbackCount;

					 $taskList[$key]['fgData'] = $fgData;


					 $this->db->select('trc_priority_master.color');
					 $this->db->from('trc_priority_master');
					 $this->db->where('trc_priority_master.del','0');
					 $this->db->where('trc_priority_master.name', $row['priority']);
					 $priorityRow = $this->db->get()->row_array();

					 if(isset($priorityRow['color']) && $priorityRow['color']) {

					    $taskList[$key]['priorityColor'] = $priorityRow['color'];

					 } else {

					     $taskList[$key]['priorityColor'] = '';
					 }
			  }

	          $result = array('taskList' => $taskList, 'totalTaskCount' => $totalTaskCount);

	          echo json_encode($result);

		} else {

             $this->onReturnErrorMessage();

		}
	}

	
	
	public function onTaskDetail() {

		$inputData = json_decode(file_get_contents('php://input'), true);

		if(isset($inputData['loginType']) && isset($inputData['loginId']) &&  $inputData['loginType'] &&  $inputData['loginId'])  {

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
                  }

				  $dateCreated = date_create($taskData['date_created']);
				  $taskData['dateCreated'] = date_format($dateCreated, 'd M Y');

				  $taskData['timeCreated'] = date_format($dateCreated, 'H:i A');

			  	  $this->db->select('trc_customer_task_status_history.status');
				  $this->db->from('trc_customer_task_status_history');
				  $this->db->where('trc_customer_task_status_history.del','0');
				  $this->db->where('trc_customer_task_status_history.task_id', $taskData['id']);
				$this->db->order_by('trc_customer_task_status_history.id','DESC');
				  $taskStatusDta = $this->db->get()->row_array();

				  $taskData['workStatus'] = $taskStatusDta['status'];
				  
                 $this->db->select('trc_customer_project_contact.*');
				 $this->db->from('trc_customer_project_contact');
				 $this->db->where('trc_customer_project_contact.project_id', $taskData['project_id']);
				 $this->db->where('trc_customer_project_contact.del','0');
		         $projectContactData = $this->db->get()->row_array();

		         $taskData['project_contact_name'] = $projectContactData['name'];
                 $taskData['project_contact_mobile'] = $projectContactData['mobile'];


                  $this->db->select('trc_user.*');
				  $this->db->from('trc_user');
				  $this->db->where('trc_user.id', $taskData['assign_to']);
				  $this->db->where('trc_user.del','0');
				  $userRow = $this->db->get()->row_array();

				  $taskData['designation'] = $userRow['designation'];
				  $taskData['mobile'] = $userRow['mobile'];
				  $taskData['assign_street'] = $userRow['street'];
				  $taskData['assign_state_name'] = $userRow['state_name'];
				  $taskData['assign_district_name'] = $userRow['district_name'];
				  $taskData['assign_city'] = $userRow['city'];
				  $taskData['assign_pincode'] = $userRow['pincode'];

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
			      $this->db->where('trc_customer_contact.del','0');
			      $this->db->where('trc_customer_contact.customer_id', $taskData['customer_id']);
			      $customerContactData = $this->db->get()->result_array();

			      $taskCustomerData['customerContactData'] = $customerContactData;


				  $this->db->select('trc_customer_task_contact.*');
				  $this->db->from('trc_customer_task_contact');
				  $this->db->where('trc_customer_task_contact.task_id', $taskId);
				  $this->db->where('trc_customer_task_contact.del','0');
				  $taskContactData = $this->db->get()->result_array();

				  $this->db->select('trc_customer_task_assign.*, trc_user.name, trc_user.designation, trc_user.email, trc_user.mobile');
				  $this->db->from('trc_customer_task_assign');
				  $this->db->join('trc_user', 'trc_user.id = trc_customer_task_assign.user_id');
				  $this->db->where('trc_customer_task_assign.task_id', $taskId);
				  $this->db->where('trc_customer_task_assign.del','0');
				  $taskAssignData = $this->db->get()->result_array();

				  $this->db->select('trc_customer_task_fg.*');
				  $this->db->from('trc_customer_task_fg');
				  $this->db->where('trc_customer_task_fg.task_id', $taskId);
				  $this->db->where('trc_customer_task_fg.del','0');
				  $taskFGData = $this->db->get()->result_array();

				  foreach ($taskFGData as $key => $row) {
				  	   
				  	    $validUpToDate = date_create($row['valid_upto']);
				        $taskFGData[$key]['validUpToDate'] = date_format($validUpToDate, 'd M Y');

				        $this->db->select('trc_customer_project_fg.*');
					    $this->db->from('trc_customer_project_fg');
					    $this->db->where('trc_customer_project_fg.fg_no', $row['fg_no']);
					    $this->db->where('trc_customer_project_fg.project_id', $row['project_id']);
					    $this->db->where('trc_customer_project_fg.del','0');
			            $projectFGData = $this->db->get()->row_array();

			            $taskFGData[$key]['brand'] = $projectFGData['brand'];
			            $taskFGData[$key]['model'] = $projectFGData['model'];
			            $taskFGData[$key]['sub_model'] = $projectFGData['sub_model'];
			            $taskFGData[$key]['so_no'] = $projectFGData['so_no'];
			            $taskFGData[$key]['si_no'] = $projectFGData['si_no'];


				        $this->db->select('COUNT(trc_customer_task_fg.id) as serviceRequestCount');
					    $this->db->from('trc_customer_task_fg');
					    $this->db->where('trc_customer_task_fg.fg_no', $row['fg_no']);
					    $this->db->where('trc_customer_task_fg.del','0');
					    $this->db->group_by('trc_customer_task_fg.task_no');
			            $fgAllTaskData = $this->db->get()->row_array();

			            $taskFGData[$key]['serviceRequestCount'] = $fgAllTaskData['serviceRequestCount'];
				  }


				  $this->db->select('trc_customer_project_fg.*');
				  $this->db->from('trc_customer_project_fg');
				  $this->db->where('trc_customer_project_fg.project_id', $taskData['project_id']);
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

			            $taskData['serviceType'] = ($row['warranty_type'] == 'Under Warranty' ? 'Free Service' : 'Paid Service');
				  }



				  $resultData = array(

				  	  'taskData' => $taskData,
				  	  'taskProjectData' => $taskProjectData,
				      'taskCustomerData' => $taskCustomerData,
				  	  'taskContactData' => $taskContactData,
				  	  'taskAssignData' => $taskAssignData,
				  	  'taskFGData' => $taskFGData,
				  	  'taskProjectFGData' => $taskProjectFGData
				  );

                  echo json_encode($resultData);

		} else {
 
             $this->onReturnErrorMessage();
		}

	}


	public function onSaveTaskPartData() {
  
		 $inputData = json_decode(file_get_contents('php://input'), true);
         
         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

         	    $taskId = $inputData['taskId'];

	            $this->db->select('trc_customer_task.*');
				$this->db->from('trc_customer_task');
				$this->db->where('trc_customer_task.id', $taskId);
				$this->db->where('trc_customer_task.del','0');
				$taskData = $this->db->get()->row_array();

	            foreach ($inputData['installedPartData'] as $key => $row) {

        	   	    $this->db->select('trc_customer_task_spare_part_assign.date_created, trc_customer_task_spare_part_assign.id, trc_customer_task_spare_part_assign.assign_qty');
				    $this->db->from('trc_customer_task_spare_part_assign');
				    $this->db->where('trc_customer_task_spare_part_assign.assign_to', $inputData['loginId']);
				    $this->db->where('trc_customer_task_spare_part_assign.part_id', $row['part_id']);
				    $this->db->where('trc_customer_task_spare_part_assign.del','0');
				    $partAssignData = $this->db->get()->row_array();

				    $currentQty = $partAssignData['assign_qty'];

	                if(isset($partAssignData['id']) && $partAssignData['id'] && $currentQty > $row['qty']) {

                        $partInstallData = array(

                               'assign_date' => $partAssignData['date_created'],
                               'date_created' => $this->dateData['dateCreated'],
                               'created_by' => $inputData['loginId'],
                               'created_by_name' => $inputData['loginName'],
                               'created_by_type' => $inputData['loginType'],
                               'task_id' => $taskId,
                               'task_no' => $taskData['task_no'],
                               'customer_id' => $taskData['customer_id'],
                               'customer_name' => $taskData['customer_name'],
                               'project_id' => $taskData['project_id'],
                               'project_name' => $taskData['project_name'],
                               'installed_qty' => $row['qty'],
                               'part_id' => $row['part_id'],
                               'part_name' => $row['part_name'],
                               'part_no' => $row['part_no']
            	   	    );

            	   	    $this->db->insert('trc_customer_task_spare_part_installed', $partInstallData);
                                 
                         $updatedQty = $currentQty - $row['qty'];

                         $updatedData = array(
                            'assign_qty' => $updatedQty 
                         );

                         $this->db->where('id', $partAssignData['id']);
                         $this->db->update('trc_customer_task_spare_part_assign', $updatedData);

					     $logData = array(

								'date_created' => $this->dateData['dateCreated'],
								'created_by' => $inputData['loginId'],
								'created_by_name' => $inputData['loginName'],
								'created_by_type' => $inputData['loginType'],
								'task_id' => $taskId,
								'description' => 'Part "'.$row['part_name'].'" ('.$row['qty'].') Qty Installed!'
		                 );
								
					     $this->db->insert('trc_customer_task_log', $logData);

					}
			    }


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

			    $status = 'success';
				$statusMessage = '';

			    $result = array('status' => $status, 'message' => $statusMessage);
			    echo json_encode($result);

         } else {

         	  $this->onReturnErrorMessage();
         }

	}


	public function getTaskImageData() {

	      $inputData = json_decode(file_get_contents('php://input'), true);

		  if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] &&  $inputData['loginId'])  {

		  	      $taskId = $inputData['taskId'];

				  $this->db->select('trc_customer_task_image.*');
				  $this->db->from('trc_customer_task_image');
				  $this->db->where('trc_customer_task_image.task_id', $taskId);
				  $this->db->where('trc_customer_task_image.del','0');
				  $taskImageData = $this->db->get()->result_array();

				  $resultData = array(

				  	  'taskImageData' => $taskImageData
				  );

				  echo json_encode($resultData);

	      } else {

	     	  $this->onReturnErrorMessage();
	      }
	}


	public function getTaskSparePartData() {

	      $inputData = json_decode(file_get_contents('php://input'), true);

		  if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] &&  $inputData['loginId'])  {

		  	      $taskId = $inputData['taskId'];

				  $this->db->select('trc_customer_task_spare_part_assign.*, trc_customer_task_spare_part_assign.assign_qty as totalQty');
				  $this->db->from('trc_customer_task_spare_part_assign');
				  $this->db->where('trc_customer_task_spare_part_assign.task_id', $taskId);
				  $this->db->where('trc_customer_task_spare_part_assign.assign_to', $inputData['loginId']);
				  $this->db->where('trc_customer_task_spare_part_assign.del','0');
				  $taskAssignedPartData = $this->db->get()->result_array();

				  foreach ($taskAssignedPartData as $key => $row) {
				  	
				  	    $dateUpdated = date_create($row['last_updated']);
				  	    $taskAssignedPartData[$key]['lastUpdated'] = date_format($dateUpdated, 'd M Y');

				  	    $taskAssignedPartData[$key]['partNameWithNo'] = $row['part_name'] . ' / '.$row['part_no']; 
				  }

				  $this->db->select('trc_customer_task_spare_part_installed.*');
				  $this->db->from('trc_customer_task_spare_part_installed');
				  $this->db->where('trc_customer_task_spare_part_installed.task_id', $taskId);
				  $this->db->where('trc_customer_task_spare_part_installed.del','0');
				  $taskInstalledPartData = $this->db->get()->result_array();

				  foreach ($taskInstalledPartData as $key => $row) {
				  	
				  	    $dateUpdated = date_create($row['last_updated']);
				  	    $taskInstalledPartData[$key]['lastUpdated'] = date_format($dateUpdated, 'd M Y');
				  }

				  $resultData = array(

				  	  'taskAssignedPartData' => $taskAssignedPartData,
				  	  'taskInstalledPartData' => $taskInstalledPartData
				  );

				  echo json_encode($resultData);

	      } else {

	     	  $this->onReturnErrorMessage();
	      }
	}


	public function getTaskRemarkData() {

            $inputData = json_decode(file_get_contents('php://input'), true);

		    if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] &&  $inputData['loginId'])  {

		  	      $taskId = $inputData['taskId'];

				  $this->db->select('trc_customer_task_remark.*');
				  $this->db->from('trc_customer_task_remark');
				  $this->db->where('trc_customer_task_remark.task_id', $taskId);
				  $this->db->order_by('trc_customer_task_remark.id', 'DESC');

				  $taskRemarkData = $this->db->get()->result_array();

				  foreach ($taskRemarkData as $key => $row) {
				  	 
				  	     $dateCreated = date_create($row['date_created']);
				  	     $taskRemarkData[$key]['dateCreated'] = date_format($dateCreated, 'd M Y');
				  }

				  $resultData = array(

				  	  'taskRemarkData' => $taskRemarkData
				  );

				  echo json_encode($resultData);


	        } else {

	        	 $this->onReturnErrorMessage();
	        }
	}


	public function getPartList() {

		 $inputData = json_decode(file_get_contents('php://input'), true);

         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

         	     $taskId = $inputData['taskId'];

				 $this->db->select('trc_customer_task_spare_part_assign.*');
				 $this->db->from('trc_customer_task_spare_part_assign');
				 $this->db->where('trc_customer_task_spare_part_assign.del','0');
				 $this->db->where('trc_customer_task_spare_part_assign.task_id', $taskId);
				 $this->db->where('trc_customer_task_spare_part_assign.assign_to', $inputData['loginId']);
				 $this->db->where('trc_customer_task_spare_part_assign.assign_qty > 0');
				 $this->db->order_by('trc_customer_task_spare_part_assign.part_name','ASC');
				 $partList = $this->db->get()->result_array();

				 $result = array('partList' => $partList);
				 echo json_encode($result);

         } else {

              $this->onReturnErrorMessage();
         }
	}

	public function onSaveTaskImagesData() {

		    $inputData = json_decode(file_get_contents('php://input'), true);

		    if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

		    	$taskId = $inputData['taskId'];

	            foreach ($inputData['uploadData'] as $key => $row) {

				     $imageName = uniqid(). '.jpg';

				     $uploadPath = $_SERVER["DOCUMENT_ROOT"] . 'api/uploads/Task_Doc/'. $imageName;

				     file_put_contents($uploadPath, base64_decode($row['binaryData']));

				     $this->db->select('trc_customer_task.*');
				     $this->db->from('trc_customer_task');
				     $this->db->where('trc_customer_task.del','0');
				     $this->db->where('trc_customer_task.id',$taskId);
				     $taskData = $this->db->get()->row_array();


				     $imageData = array(
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
	                                    'image_url' => $imageName
	       	       	     	    );

		           	 $this->db->insert('trc_customer_task_image', $imageData);
	            }


	            $this->db->select('trc_customer_task.status');
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

			    echo json_encode($uploadPath);
					 
		    } else {

		    	 $this->onReturnErrorMessage();
		    }     
	}


	public function onSaveTaskRemarkData() {

		 $inputData = json_decode(file_get_contents('php://input'), true);

         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

         	     $taskId = $inputData['taskId'];

         	     $updatedData = array(

         	     	'date_created' => $this->dateData['dateCreated'],
         	     	'created_by' => $inputData['loginId'],
         	     	'created_by_name' => $inputData['loginName'],
         	     	'created_by_type' => $inputData['loginType'],
         	     	'task_id' => $taskId,
         	     	'description' => $inputData['remark'],
         	     );

         	     if($this->db->insert('trc_customer_task_remark', $updatedData))  {

         	     	         $this->db->select('trc_customer_task.status');
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



                            $status = 'success';
                            $statusMessage = '';
         	     } else {

         	     	   $status = 'error';
         	     	   $statusMessage = 'Something Went Wrong, Try Later';
         	     }

         	     $result = array(
         	     	'status' => $status,
         	     	'statusMessage' => $statusMessage
         	     );

         	     echo json_encode($result);

         }  else {

               $this->onReturnErrorMessage();
         }

	}

    public function getTaskStatusData() {

            $inputData = json_decode(file_get_contents('php://input'), true);

		    if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] &&  $inputData['loginId'])  {

		  	      $taskId = $inputData['taskId'];

				  $this->db->select('trc_customer_task_status_history.*');
				  $this->db->from('trc_customer_task_status_history');
				  $this->db->where('trc_customer_task_status_history.task_id', $taskId);
				  $this->db->order_by('trc_customer_task_status_history.id', 'DESC');
				  $taskStatusData = $this->db->get()->result_array();

				  foreach ($taskStatusData as $key => $row) {
				  	 
				  	     $dateCreated = date_create($row['date_created']);
				  	     $taskStatusData[$key]['dateCreated'] = date_format($dateCreated, 'd M Y');
				  	     $taskStatusData[$key]['timeCreated'] = date_format($dateCreated, 'H:i A');
				  }

				  $resultData = array(

				  	  'taskStatusData' => $taskStatusData
				  );

				  echo json_encode($resultData);
				  

	        } else {

	        	 $this->onReturnErrorMessage();
	        }
	}


	public function onGetStatusOptionList() {

		  $inputData = json_decode(file_get_contents('php://input'), true);

          if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

          	     $this->db->select('trc_task_status_master.*');
				 $this->db->from('trc_task_status_master');
				 $this->db->where('trc_task_status_master.del','0');
				 $statusOptionList = $this->db->get()->result_array();

				 $result = array(

				 	 'statusOptionList' => $statusOptionList
				 );

				 echo json_encode($result);

          } else {

          	  $this->onReturnErrorMessage();
          }
	}


	public function onSaveTaskStatusData() {

		 $inputData = json_decode(file_get_contents('php://input'), true);

         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

         	     $taskId = $inputData['taskId'];

                 $this->db->select('trc_customer_task.*');
				 $this->db->from('trc_customer_task');
				 $this->db->where('trc_customer_task.id', $taskId);
				 $this->db->where('trc_customer_task.del','0');
				 $taskData = $this->db->get()->row_array();


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
	         	     	'status' => $inputData['status']
         	     );

         	     if($this->db->insert('trc_customer_task_status_history', $updatedData))  {


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


                            $status = 'success';
                            $statusMessage = '';
         	     } else {

         	     	   $status = 'error';
         	     	   $statusMessage = 'Something Went Wrong, Try Later';
         	     }

         	     $result = array(
         	     	'status' => $status,
         	     	'statusMessage' => $statusMessage
         	     );

         	     echo json_encode($result);

         }  else {

               $this->onReturnErrorMessage();
         }

	}


	public function onGetCheckList() {

		$inputData = json_decode(file_get_contents('php://input'), true);
		
		if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {
		
				$taskId = $inputData['taskId'];
		
		
			   $this->db->select('trc_customer_task_fg.*');
			   $this->db->from('trc_customer_task_fg');
			   $this->db->where('trc_customer_task_fg.del','0');
			   $this->db->where('trc_customer_task_fg.task_id', $taskId);
			   $taskFGList = $this->db->get()->result_array();
		
			   foreach ($taskFGList as $fgKey => $fgRow) {
		
				   $this->db->select('trc_customer_project_fg.model');
				   $this->db->from('trc_customer_project_fg');
				   $this->db->where('trc_customer_project_fg.del','0');
				   $this->db->where('trc_customer_project_fg.project_id', $fgRow['project_id']);
				   $this->db->where('trc_customer_project_fg.fg_no', $fgRow['fg_no']);
				   $modelData = $this->db->get()->row_array();
				   
				   $this->db->select('DISTINCT(trc_checklist_master.category)');
				   $this->db->from('trc_checklist_master');
				   $this->db->where('trc_checklist_master.del','0');
				   $this->db->where('trc_checklist_master.model', $modelData['model']);
				   $newCheckListCategory = $this->db->get()->result_array();
				   
				   foreach ($newCheckListCategory as $categoryKey => $categoryRow) {
		
						   $this->db->select('trc_checklist_master.*');
						   $this->db->from('trc_checklist_master');
						   $this->db->where('trc_checklist_master.del','0');
						   $this->db->where('trc_checklist_master.category', $categoryRow['category']);
						   $this->db->where('trc_checklist_master.model', $modelData['model']);
						   $categoryCheckListData = $this->db->get()->result_array();
		
						   foreach ($categoryCheckListData as $listDataKey => $listDataRow) {
		
								
							   $this->db->select('trc_customer_task_commissioning_check_list.*');
							   $this->db->from('trc_customer_task_commissioning_check_list');
		
							   $this->db->where('trc_customer_task_commissioning_check_list.task_id',$taskId);
		
							   $this->db->where('trc_customer_task_commissioning_check_list.fg_no', $fgRow['fg_no']);
		
							   $this->db->where('trc_customer_task_commissioning_check_list.checklist_title', $listDataRow['check_list_point']);
		
							   $this->db->where('trc_customer_task_commissioning_check_list.del','0');
		
							   $checkRow = $this->db->get()->row_array();
		
							   if(isset($checkRow['id']) && $checkRow['id'] && $checkRow['checklist_checked'] == 1) {
		
									  $categoryCheckListData[$listDataKey]['checked'] = true;
		
							   } else {
		
									$categoryCheckListData[$listDataKey]['checked'] = false;
							   }
						   }
		
						   $newCheckListCategory[$categoryKey]['checkListData'] = $categoryCheckListData;
				   }
		
				   $taskFGList[$fgKey]['newCheckListCategory'] = $newCheckListCategory;
		
			   }
		
			   $result = array(
		
					'taskFGCheckList' => $taskFGList
			   );
		
			   echo json_encode($result);
		
		} else {
		
			  $this->onReturnErrorMessage();
		}
		
		}

	public function onGetTaskProjectAllContactList() {

		 $inputData = json_decode(file_get_contents('php://input'), true);

         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

         	 if(isset($inputData['taskId']) && $inputData['taskId']) {

                  $taskId = $inputData['taskId'];

	         	  $this->db->select('trc_customer_task.project_id');
				  $this->db->from('trc_customer_task');
				  $this->db->where('trc_customer_task.del','0');
				  $this->db->where('trc_customer_task.id', $taskId);
				  $taskData = $this->db->get()->row_array();

                  $projectId = $taskData['project_id'];

         	 } 

         	 if(isset($inputData['projectId']) && $inputData['projectId']) {
         	 	   $projectId = $inputData['projectId'];
         	 }



			  $this->db->select('trc_customer_project_contact.*');
			  $this->db->from('trc_customer_project_contact');
			  $this->db->where('trc_customer_project_contact.project_id', $projectId);
			  $this->db->where('trc_customer_project_contact.del','0');
			  $projectContactData = $this->db->get()->result_array();


			  $result = array(

			  	 'contactList' => $projectContactData
			  );

			  echo json_encode($result);


         } else {

               $this->onReturnErrorMessage();
         }
	}

	public function getDocumentList() {

		  $inputData = json_decode(file_get_contents('php://input'), true);

         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {


         	if($inputData['loginType'] == 'Technician') {


     		     $this->db->select('trc_document_master.*, trc_document_master.title as subject');
			     $this->db->from('trc_document_master');
			     $this->db->where('trc_document_master.del','0');
			     $documentList = $this->db->get()->result_array();


			     foreach ($documentList as $key => $row) {


			    	    $this->db->select('trc_document_attachment_master.*');
					    $this->db->from('trc_document_attachment_master');
					    $this->db->where('trc_document_attachment_master.del','0');
					    $this->db->where('trc_document_attachment_master.document_id', $row['id']);
					    $attachmentList = $this->db->get()->row_array();

					    $documentList[$key]['document_url'] = $attachmentList['document_url'];
			     }
         	}
              

			if($inputData['loginType'] == 'Customer') {

				$this->db->select('trc_customer_document.*');
			    $this->db->from('trc_customer_document');
			    $this->db->where('trc_customer_document.del','0');
			    $this->db->where('trc_customer_document.customer_id', $inputData['loginId']);
			    $documentList = $this->db->get()->result_array();


			    foreach ($documentList as $key => $row) {

			    	    $this->db->select('trc_customer_document_attachment.*');
					    $this->db->from('trc_customer_document_attachment');
					    $this->db->where('trc_customer_document_attachment.del','0');
					    $this->db->where('trc_customer_document_attachment.document_id', $row['id']);
					    $attachmentList = $this->db->get()->row_array();

					    $documentList[$key]['document_url'] = $attachmentList['document_url'];
			    }

			}

		    $result = array(
		    	'documentList' => $documentList
		    );

		    echo json_encode($result);

         } else {

         	  $this->onReturnErrorMessage();
         }
	}


	public function getDocumentAllList() {

		  $inputData = json_decode(file_get_contents('php://input'), true);

         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

         	     $documentId = $inputData['documentId'];

         	     if($inputData['loginType'] == 'Technician') {


         	     	   $this->db->select('trc_document_attachment_master.*');
				       $this->db->from('trc_document_attachment_master');
				       $this->db->where('trc_document_attachment_master.del','0');
				       $this->db->where('trc_document_attachment_master.document_id', $documentId);
				       $documentList = $this->db->get()->result_array();

         	     }


         	     if($inputData['loginType'] == 'Customer') {

         	     	   $this->db->select('trc_customer_document_attachment.*');
				       $this->db->from('trc_customer_document_attachment');
				       $this->db->where('trc_customer_document_attachment.del','0');
				       $this->db->where('trc_customer_document_attachment.document_id', $documentId);
				       $documentList = $this->db->get()->result_array();
         	     }

			     $result = array(
			    	'documentImageData' => $documentList
			     );

			    echo json_encode($result);

         } else {

         	  $this->onReturnErrorMessage();
         }
	}


	public function getPriorityList() {

		$inputData = json_decode(file_get_contents('php://input'),true);

		if(isset($inputData['loginId']) && $inputData['loginId']) {

			$this->db->select('trc_priority_master.id, trc_priority_master.name');
			$this->db->from('trc_priority_master');
			$this->db->where('trc_priority_master.del','0');
			$this->db->order_by('trc_priority_master.name','ASC');
			$priorityList = $this->db->get()->result_array();

			$result = array('priorityList' => $priorityList);
			echo json_encode($result);

		} else {

			$this->onReturnErrorMessage();
		}
	}

	public function getTransactionTypeList(){

		$inputData = json_decode(file_get_contents('php://input'),true);

		if(isset($inputData['loginId']) && $inputData['loginId']) {

			$this->db->select('trc_transaction_type_master.id, trc_transaction_type_master.transaction_type');
			$this->db->from('trc_transaction_type_master');
			$this->db->where('trc_transaction_type_master.del','0');
			$this->db->order_by('trc_transaction_type_master.transaction_type','ASC');
			$transactionTypeList = $this->db->get()->result_array();

			$result = array('transactionTypeList' => $transactionTypeList);
			echo json_encode($result);

		} else {

			$this->onReturnErrorMessage();
		}
	}


	
	public function getComplaintTypeList() {

		$inputData = json_decode(file_get_contents('php://input'),true);

		if(isset($inputData['loginId']) && $inputData['loginId']) {

			$this->db->select('trc_complaint_title_master.id, trc_complaint_title_master.title');
			$this->db->from('trc_complaint_title_master');
			$this->db->where('trc_complaint_title_master.del','0');
			$this->db->order_by('trc_complaint_title_master.title','ASC');
			$complaintTypeList = $this->db->get()->result_array();

			$result = array('complaintTypeList' => $complaintTypeList);
			echo json_encode($result);

		} else {

			$this->onReturnErrorMessage();
		}
	}

	public function getNatureProbelmList(){

		$inputData = json_decode(file_get_contents('php://input'),true);

		if(isset($inputData['loginId']) && $inputData['loginId']) {

			$this->db->select('trc_nature_problem_master.id, trc_nature_problem_master.nature');
			$this->db->from('trc_nature_problem_master');
			$this->db->where('trc_nature_problem_master.del','0');
			$this->db->order_by('trc_nature_problem_master.nature','ASC');
			$natureProbelmList = $this->db->get()->result_array();

			$result = array('natureProbelmList' => $natureProbelmList);
			echo json_encode($result);

		} else {

			$this->onReturnErrorMessage();
		}

	}

	public function getStateList() {

		 $inputData = json_decode(file_get_contents('php://input'),true);

		 $this->db->select('trc_postal_master.state_name');
		 $this->db->from('trc_postal_master');
		 $this->db->where('trc_postal_master.del','0');
		 $this->db->group_by('trc_postal_master.state_name');
		 $this->db->order_by('trc_postal_master.state_name','ASC');
		 $stateList = $this->db->get()->result_array();
		
		 $result = array('stateList' => $stateList);
		 echo json_encode($result);
	}


	public function getDistrictList() {

			$inputData = json_decode(file_get_contents('php://input'),true);

			if(isset($inputData['stateName']) && $inputData['stateName']) {

                  $stateName = $inputData['stateName'];
				  $this->db->select('trc_postal_master.district_name');
				  $this->db->from('trc_postal_master');
		          $this->db->where('trc_postal_master.del','0');
		        
				  if($stateName) {
				 	 $this->db->where('trc_postal_master.state_name',$stateName);
		          }
		        
				  $this->db->group_by('trc_postal_master.district_name');
				  $this->db->order_by('trc_postal_master.district_name','ASC');
				  $districtList = $this->db->get()->result_array();
				
				  $result = array('districtList' => $districtList);
				  echo json_encode($result);

			} else {

                $this->onReturnErrorMessage();
			}	
	}


	public function onGetFeedbackTaskData() {

			$inputData = json_decode(file_get_contents('php://input'),true);

			if(isset($inputData['taskId']) && $inputData['taskId']) {

				  $taskId = $inputData['taskId'];

				  $this->db->select('trc_customer_task.date_created, trc_customer_task.task_no, trc_customer_task.status_update_on');
				  $this->db->from('trc_customer_task');
				  $this->db->where('trc_customer_task.del','0');
				  $this->db->where('trc_customer_task.id', $taskId);
				  $taskData = $this->db->get()->row_array();

				  $taskDateFormat = date_create($taskData['date_created']);

				  $dateCreated = date_format($taskDateFormat, 'd M Y');
		  	      $timeCreated = date_format($taskDateFormat, 'H:i A');

		  	      $taskData['dateCreated'] = $dateCreated;
		  	      $taskData['timeCreated'] = $timeCreated;

				  $taskDateFormat = date_create($taskData['date_created']);
				  $taskDate = date_format($taskDateFormat, 'Y-m-d');

				  $taskCloseDate  = date_create($taskData['status_update_on']);
			 	  $taskCloseDateFormat = date_format($taskCloseDate, 'Y-m-d');

			      $diff = strtotime($taskCloseDateFormat) - strtotime($taskDate);  
			      $taskData['days'] = abs(round($diff / 86400));

			      $result = array(

			      	 'taskData' => $taskData
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
	
	public function update_token(){

		$inputData = json_decode(file_get_contents('php://input'),true);

		$regisData = array(

				'registration_id' => $inputData['registration_id']
		);

		$this->db->where('id', $inputData['id']);
		$query = $this->db->update('trc_user', $regisData);

		if(!$query){

			$this->db->last_query();
			exit;

		}

		echo json_encode($query);

	}
	
}

?>




