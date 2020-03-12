<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

class Customer extends MY_Controller
{
	public function __construct() {
		
		parent:: __construct();
		$this->load->helper("url");
		$this->load->library("pagination");
		$this->load->database();
	}

	public function getCustomerContactHandler() {

          
	        $inputData = json_decode(file_get_contents('php://input'), true);

			if(isset($inputData['loginType']) && $inputData['loginType'] && isset($inputData['loginType']) && $inputData['loginId'])  {

                     $customerId = $inputData['loginId'];

					 $this->db->select('trc_customer_contact.*');
					 $this->db->from('trc_customer_contact');
					 $this->db->where('trc_customer_contact.del','0');
					 $this->db->where('trc_customer_contact.customer_id', $customerId);
					 $contactData = $this->db->get()->result_array();

					 $resultData = array(
					 	 'contactData' => $contactData
					 );

					 echo json_encode($resultData);

			} else {

				  $this->onReturnErrorMessage();
			}
	}


	public function  onSubmitTaskData() {

		$inputData = json_decode(file_get_contents('php://input'), true);

		// print_r($inputData); exit();
		
		if(isset($inputData['loginType']) && $inputData['loginType'] && isset($inputData['loginType']) && $inputData['loginId'])  {

                $this->db->select('trc_customer_task.task_no');
			    $this->db->from('trc_customer_task');
			    $this->db->where('trc_customer_task.del','0');
			    $this->db->order_by('trc_customer_task.id','DESC');
			    $taskData = $this->db->get()->row_array();

                if(isset($taskData['task_no']) && $taskData['task_no']) {
		                $taskNo =  $taskData['task_no'] + 1;
                } else {
		                $taskNo =  1001;
                }

                $this->db->select('trc_customer.*');
			    $this->db->from('trc_customer');
			    $this->db->where('trc_customer.del','0');
			    $this->db->where('trc_customer.id', $inputData['loginId']);
			    $customerData = $this->db->get()->row_array();

			    $this->db->select('trc_customer_project.*');
			    $this->db->from('trc_customer_project');
			    $this->db->where('trc_customer_project.del','0');
			    $this->db->where('trc_customer_project.id', $inputData['projectId']);
			    $projectData = $this->db->get()->row_array();

			    if(!isset($inputData['requestType']) || !$inputData['requestType'] ) {

                        
                         $inputData['requestType'] = 'service_request';
			    }
		
				$taskData = array(

					'date_created' => $this->dateData['dateCreated'],
					'created_by' => $inputData['loginId'],
					'created_by_name' => $inputData['loginName'],
					'created_by_type' => $inputData['loginType'],
					'customer_id' => $inputData['loginId'],
					'customer_name' => $inputData['loginName'],
					'customer_code' => $customerData['cust_code'],
					'project_id' => $inputData['projectId'],
					'project_name' => $inputData['projectName'],
					'task_type' => $inputData['requestType'],
					'task_no' => $taskNo,
					'visit_date_time' => $inputData['visitDateTime'],
					'expectation_closing_date' => $inputData['expectingClosingTime'],
					'compaint_title' => $inputData['complaintTitle'],
					'task_description' => $inputData['description'],
					'customer_street' => $customerData['street'],
					'customer_state_name' => $customerData['state_name'],
					'customer_district_name' => $customerData['district_name'],
					'customer_city' => $customerData['city'],
					'customer_pincode' => $customerData['pincode'],
					'project_street' => $projectData['street'],
					'project_state_name' => $projectData['state_name'],
					'project_district_name' => $projectData['district_name'],
					'project_city' => $projectData['city'],
					'project_pincode' => $projectData['pincode'],
					'priority' => $inputData['priority'],	
					'transaction_type' => $inputData['transactionType'],
					'status' => 'Open',
					'status_update_on' => $this->dateData['dateCreated'],
					'status_updated_by' => $inputData['loginId'],
					'status_updated_by_name' => $inputData['loginName'],
					'status_updated_by_type' => $inputData['loginType'],
					'last_updated_by' => $inputData['loginId'],
					'last_updated_by_name' => $inputData['loginName'],
					'last_updated_by_type' =>$inputData['loginType'],
					'last_updated_remark' =>  'New Task Created!'
				);
					
				if($this->db->insert('trc_customer_task', $taskData)) {

					// echo $this->db->last_query();

				    $taskId = $this->db->insert_id();

                    $contactData = $inputData['contactList'];
                    $fgData = $inputData['fgData'];

                    foreach ($contactData as $key => $row) {

                    	if(isset($row['checked']) && $row['checked']) {

                    		   $contactRowData = array(

									 'date_created' => $this->dateData['dateCreated'],
									 'created_by' => $inputData['loginId'],
									 'created_by_name' => $inputData['loginName'],
									 'created_by_type' => $inputData['loginType'],
									 'customer_id' => $inputData['loginId'],
									 'customer_name' => $inputData['loginName'],
									 'project_id' => $inputData['projectId'],
									 'project_name' => $inputData['projectName'],
									 'task_id' => $taskId,
									 'task_no' => $taskNo,
									 'contact_id' => $row['id'],
									 'name' => $row['name'],
									 'designation' => $row['designation'],
									 'email' => $row['email'],
									 'mobile' => $row['mobile'],
								 );
								
							     $this->db->insert('trc_customer_task_contact', $contactRowData);
                    	}

                	    
                    }


                    $fgStr = '';
                    $serviceTypeStr = '';

                    foreach ($fgData as $key => $row) {

                    	    $this->db->select('trc_customer_project_fg.*');
						    $this->db->from('trc_customer_project_fg');
						    $this->db->where('trc_customer_project_fg.del','0');
						    $this->db->where('trc_customer_project_fg.project_id', $inputData['projectId']);
						    $this->db->where('trc_customer_project_fg.fg_no', $row['fgNo']);
						    $fgDetail = $this->db->get()->row_array();

 

                    	    $fgRowData = array(

								'date_created' => $this->dateData['dateCreated'],
								'created_by' => $inputData['loginId'],
								'created_by_name' => $inputData['loginName'],
								'created_by_type' => $inputData['loginType'],
								'customer_id' => $inputData['loginId'],
								'customer_name' => $inputData['loginName'],
								'project_id' => $inputData['projectId'],
								'project_name' => $inputData['projectName'],
								'task_id' => $taskId,
								'task_no' => $taskNo,
								'fg_no' => $row['fgNo'],
								'warranty_type' => $fgDetail['warranty_type'],
								'valid_upto' => $fgDetail['warranty_valid_upto'],
								'service_center' => $fgDetail['service_center_name'],
								'nature_problem' => isset($row['natureProblem'])?$row['natureProblem']:'', 
							);
							
						    $this->db->insert('trc_customer_task_fg', $fgRowData);

                            if($fgStr) {

						        $fgStr .= ', ' . $row['fgNo'];

                                $serviceType = '';
						        if($fgDetail['warranty_type']=='Under Warranty') {

						        	  $serviceType = 'Free Service';

						        } else {

						        	  $serviceType = 'Paid Service';
						        }

				        	    if (strpos($serviceTypeStr, $serviceType) === false) {
								    
								      $serviceTypeStr .=  ', ' . $serviceType;
							    }
                                  
                            } else {

						         $fgStr = $row['fgNo'];    
						         $serviceTypeStr = ($fgDetail['warranty_type']=='Under Warranty' ? 'Free Service' : 'Paid Service');
                            }
                    }


                    $taskUpdatedData = array(
                    	 'fg_search' => $fgStr,
                    	 'service_type_search' => $serviceTypeStr
                    );

                    $this->db->where('id', $taskId);
                    $this->db->update('trc_customer_task', $taskUpdatedData);

                    $logData = array(

								'date_created' => $this->dateData['dateCreated'],
								'created_by' => $inputData['loginId'],
								'created_by_name' => $inputData['loginName'],
								'created_by_type' => $inputData['loginType'],
								'task_id' => $taskId,
								'description' => 'New Task Created!',
				    );
							
				    $this->db->insert('trc_customer_task_log', $logData);


				    $status = 'success';
				    $statusMessage = '';

				} else {

				     $status = 'error';
				     $statusMessage = $this->db->error();
				}
			

			    $result = array('status' => $status, 'message' => $statusMessage);
			    echo json_encode($result);

		} else {

           
             $this->onReturnErrorMessage();

		}
    }


    public function saveFeedbackData() {

         $inputData = json_decode(file_get_contents('php://input'), true);

         if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

         	   $taskId = $inputData['taskId'];

         	   $this->db->select('trc_customer.cust_code, trc_customer.mobile');
			   $this->db->from('trc_customer');
			   $this->db->where('trc_customer.id', $inputData['loginId']);
			   $this->db->where('trc_customer.del','0');
			   $customerData = $this->db->get()->row_array();

         	   $this->db->select('trc_customer_task.*');
			   $this->db->from('trc_customer_task');
			   $this->db->where('trc_customer_task.id', $taskId);
			   $this->db->where('trc_customer_task.del','0');
			   $taskData = $this->db->get()->row_array();

			   $this->db->select('trc_customer_task_fg.fg_no');
			   $this->db->from('trc_customer_task_fg');
			   $this->db->where('trc_customer_task_fg.task_id', $taskId);
			   $this->db->where('trc_customer_task_fg.del','0');
			   $fgData = $this->db->get()->row_array();

         	   $feedBackData = array(

					'date_created' => $this->dateData['dateCreated'],
					'created_by' => $inputData['loginId'],
					'created_by_name' => $inputData['loginName'],
					'created_by_type' => $inputData['loginType'],
					'customer_id' => $inputData['loginId'],
					'customer_name' => $inputData['loginName'],
					'project_id' => $taskData['project_id'],
					'project_name' => $taskData['project_name'],
					'task_id' => $taskId,
					'task_no' => $taskData['task_no'],
					'rating' => $inputData['rating'],
					'description' => $inputData['description'],
					'fg_no' => $fgData['fg_no'],
					'assign_to' => $taskData['assign_to'],
					'assign_to_name' => $taskData['assign_to_name'],
					'complaint_date' => $taskData['date_created'],
					'feedback_date' => $this->dateData['dateCreated'],
					'task_date' => $taskData['date_created']
				);
					
				$this->db->insert('trc_customer_task_feedback', $feedBackData);


				$resultData = array(
                     'status' => 'success',
                     'statusMessage' => ''
			    );

			    echo json_encode($resultData);

         } else {

                $this->onReturnErrorMessage();
         }
    }



    public function getProjectList() {
            
        $inputData = json_decode(file_get_contents('php://input'), true);

		if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId'] )  {

              $customerId = $inputData['loginId'];

			  $this->db->select('trc_customer_project.*');
			  $this->db->from('trc_customer_project');

			  $this->db->join('trc_customer_project_contact', 'trc_customer_project_contact.project_id = trc_customer_project.id', 'left');

			  $this->db->where('trc_customer_project.customer_id', $customerId);

			  $this->db->where('trc_customer_project.del','0');

			  if(isset($inputData['projectId']) && $inputData['projectId']) {
			  	   $this->db->where('trc_customer_project.id', $inputData['projectId']);
			  }


			  if(isset($inputData['searchData']) && $inputData['searchData']) {

                  $this->db->group_start();

			  	    $this->db->or_like('trc_customer_project.project_name', $inputData['searchData']);

			  	    $this->db->or_like('trc_customer_project.state_name', $inputData['searchData']);

			  	    $this->db->or_like('trc_customer_project.district_name', $inputData['searchData']);

			  	    $this->db->or_like('trc_customer_project.city', $inputData['searchData']);

			  	    $this->db->or_like('trc_customer_project.pincode', $inputData['searchData']);

			  	  $this->db->group_end();
			  }


              $this->db->group_by('trc_customer_project.id');
			  $newDB = clone $this->db;

			  $totalProjectCount = $newDB->get()->num_rows();

			  if(isset($inputData['pageLimit']) && $inputData['pageLimit']) {

			        $this->db->limit($inputData['pageLimit'], ($inputData['start'] - 1) * $inputData['pageLimit']);
			  }

			  $projectList = $this->db->get()->result_array();

			  foreach ($projectList as $key => $row) {

			  	     $dateCreated = date_create($row['date_created']);
                      
                     $projectList[$key]['dateCreated'] = date_format($dateCreated, 'd M Y');


					 $this->db->select('trc_customer_project_contact.*');
					 $this->db->from('trc_customer_project_contact');
			         $this->db->where('trc_customer_project_contact.project_id', $row['id']);
			         $this->db->where('trc_customer_project_contact.del','0');
			         $contactData = $this->db->get()->result_array(); 

				     $projectList[$key]['contactData'] = $contactData;


				     $this->db->select('trc_customer_project_fg.*');
					 $this->db->from('trc_customer_project_fg');
			         $this->db->where('trc_customer_project_fg.project_id', $row['id']);
			         $this->db->where('trc_customer_project_fg.del','0');
			         $productData = $this->db->get()->result_array(); 


				     foreach ($productData as $productKey => $productRow) {

					      $dateSupplyCreate = date_create($productRow['date_of_supply']);
                          $productData[$key]['dateSupplyInFormat'] = date_format($dateSupplyCreate, 'd M Y');

					      $dateInstallationCreate = date_create($productRow['date_of_installation']);
					      $productData[$key]['dateInstallationInFormat'] = date_format($dateInstallationCreate, 'd M Y');


					      $warrantyValidUpToCreate = date_create($productRow['warranty_valid_upto']);
					      $productData[$key]['warantyValidUpToInFormat'] = date_format($warrantyValidUpToCreate, 'd M Y');


					         $this->db->select('trc_customer_task_fg.id');
							 $this->db->from('trc_customer_task_fg');

							 $this->db->join('trc_customer_task', 'trc_customer_task.id = trc_customer_task_fg.task_id and trc_customer_task.task_type = "service_request"');

					         $this->db->where('trc_customer_task_fg.project_id', $row['id']);
					         $this->db->where('trc_customer_task_fg.fg_no', $productRow['fg_no']);
					         $this->db->where('trc_customer_task_fg.del','0');
					         $this->db->group_by('trc_customer_task_fg.task_id');
					         $totalServiceRequest = $this->db->get()->num_rows(); 

					         $productData[$key]['productServiceRquestCount']=$totalServiceRequest;
				     }

				     $projectList[$key]['productData'] = $productData;


				     $this->db->select('trc_customer_task.id');
					 $this->db->from('trc_customer_task');
			         $this->db->where('trc_customer_task.project_id', $row['id']);
			         $this->db->where('trc_customer_task.task_type', 'service_request');
			         $this->db->where('trc_customer_task.del','0');
			         $totalServiceRequest = $this->db->get()->num_rows(); 

				     $projectList[$key]['totalServiceRequest'] = $totalServiceRequest;
			  }

	          $result = array('projectList' => $projectList, 'totalProjectCount' => $totalProjectCount);

	          echo json_encode($result);


	    } else {
             
               $this->onReturnErrorMessage();
	    }
	}


	public function getProjectFGList() {

		$inputData = json_decode(file_get_contents('php://input'),true);

		if(isset($inputData['loginId']) && isset($inputData['loginType']) && $inputData['loginId'] && $inputData['loginType']) {

				$projectId = $inputData['projectId'];

				$this->db->select('trc_customer_project_fg.*');
				$this->db->from('trc_customer_project_fg');
				$this->db->where('trc_customer_project_fg.project_id', $projectId);
				$this->db->where('trc_customer_project_fg.del','0');
				$this->db->order_by('trc_customer_project_fg.date_created','DESC');

				$fgList = $this->db->get()->result_array();

				foreach ($fgList as $key => $row) {

					   $dateSupplyCreate = date_create($row['date_of_supply']);
                       $fgList[$key]['dateSupplyInFormat'] = date_format($dateSupplyCreate, 'd M Y');

					   $dateInstallationCreate = date_create($row['date_of_installation']);
					   $fgList[$key]['dateInstallationInFormat'] = date_format($dateInstallationCreate, 'd M Y');
				}

				$result = array('fgList' => $fgList);
				echo json_encode($result);

		} else {

			$this->onReturnErrorMessage();
		}
	}


	public function saveProjectContact() {
          
          $inputData = json_decode(file_get_contents('php://input'), true);

          if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

                $projectId = $inputData['projectId'];
			    $contactData = $inputData['contactData'];

			    $isContactErrorOnInsert = false;

                foreach ($contactData as $key => $row) {

                    	$projectContactData = array(

							'date_created' => $this->dateData['dateCreated'],
							'created_by' => $inputData['loginId'],
							'created_by_name' => $inputData['loginName'],
							'created_by_type' => $inputData['loginType'],
							'customer_id' => $inputData['loginId'],
							'project_id' => $projectId,
							'name' => $row['contactName'],
							'designation' => $row['designation'],
							'email' => $row['contactEmail'],
							'mobile' => $row['contactMobile']
				        );

				        if(!$this->db->insert('trc_customer_project_contact',$projectContactData)) {

                              $isContactErrorOnInsert = true;

                              $status = 'error';
						      $statusMessage = $this->db->error();

						      $statusMessage = str_replace("Duplicate entry","Already Exist In System,", $statusMessage['message']);
					     }
		        }

		        if(!$isContactErrorOnInsert) {

                     $status = 'success';
			         $statusMessage = '';
		        }

		        $result = array('status' => $status, 'statusMessage' => $statusMessage);

		        echo json_encode($result);


          } else {

          	    $this->onReturnErrorMessage();
          }
	}


	public function onSaveCallRequestData() {

          $inputData = json_decode(file_get_contents('php://input'), true);

		  if(isset($inputData['loginType']) && isset($inputData['loginType']) && $inputData['loginType'] && $inputData['loginId']) {

	               $this->db->select('trc_customer.*');
				   $this->db->from('trc_customer');
				   $this->db->where('trc_customer.del','0');
				   $this->db->where('trc_customer.id', $inputData['loginId']);
				   $customerData = $this->db->get()->row_array();

                  $updatedData = array(

						'date_created' => $this->dateData['dateCreated'],
						'created_by' => $inputData['loginId'],
						'created_by_name' => $inputData['loginName'],
						'customer_id' => $inputData['loginId'],
						'customer_code' => $customerData['cust_code'],
						'customer_state' => $customerData['state_name'],
						'customer_district' => $customerData['district_name'],
						'contact_person' => $inputData['contactName'],
						'contact_mobile' => $inputData['mobile'],
						'call_on' => $inputData['suitableDateTime'],
						'status' => 'Pending'
				  );

				  if($this->db->insert('trc_customer_call_rqst', $updatedData)) {
                       
                       $status = 'success';
                       $statusMessage = '';

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


    public function onReturnErrorMessage() {

    	    $resultData = array('status' => 'error', 'statusMessage' => 'You are not authorized to access this information!');

    	    echo json_encode($resultData);
    }
	
}

?>




