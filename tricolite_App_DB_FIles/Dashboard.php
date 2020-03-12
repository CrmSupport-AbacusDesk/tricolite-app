<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

class Dashboard extends MY_Controller
{
	public function __construct() {
		
		parent:: __construct();
		$this->load->helper("url");
		$this->load->library("pagination");
		$this->load->database();
	}


	public function onGetDashboardData() {

	        $inputData = json_decode(file_get_contents('php://input'), true);

			if(isset($inputData['loginType']) && isset($inputData['loginId']) &&  $inputData['loginType'] &&  $inputData['loginId'])  {


					if($inputData['loginType'] == 'Customer') {

						  $customerEmergencyNumber = '';

                          $this->db->select('trc_customer.id, trc_customer.company_name, trc_customer.mobile, trc_customer.cust_code');
						  $this->db->from('trc_customer');
						  $this->db->where('trc_customer.del', '0');
						  $this->db->where('trc_customer.id', $inputData['loginId']);
					      $loginData = $this->db->get()->row_array();

					      $loginData['name'] = $loginData['company_name'];

                          $this->db->select('trc_customer_call_rqst.id');
						  $this->db->from('trc_customer_call_rqst');
						  $this->db->where('trc_customer_call_rqst.del', '0');
						  $this->db->where('trc_customer_call_rqst.customer_id', $inputData['loginId']);
						  $this->db->where('trc_customer_call_rqst.status', 'Pending');
					      $typeTotalCount1 = $this->db->get()->num_rows();


					      $this->db->select('trc_customer_task.id');
						  $this->db->from('trc_customer_task');
						  $this->db->join('trc_customer_task_feedback', 'trc_customer_task_feedback.task_id = trc_customer_task.id', 'left');
						  $this->db->where('trc_customer_task.del', '0');
						  $this->db->where('trc_customer_task.customer_id', $inputData['loginId']);
						  $this->db->where('trc_customer_task.status', 'Close');
						  $this->db->where('trc_customer_task_feedback.task_id IS NULL');
						  $this->db->group_by('trc_customer_task.id');
					      $typeTotalCount2 = $this->db->get()->num_rows();


					      $this->db->select('trc_emergency_master.*');
						  $this->db->from('trc_emergency_master');
						  $this->db->where('trc_emergency_master.del', '0');
					      $emergencyResultData = $this->db->get()->result_array();

					      $currentTime = date('H:i:s');

					      foreach ($emergencyResultData as $key => $row) {
					      	
					      	     if($currentTime > $row['emergency_from'] && $currentTime < $row['emergency_to']) {

                                       $customerEmergencyNumber = $row['emergency_number'];
					      	     }
					      }


					      $outputData = array(

		      	   	        'status' => 'success',
			      	   	    'statusMessage' => '',
				      	   	'loginData' => $loginData,
			      	   	    'typeTotalCount1' => $typeTotalCount1,
			      	   	    'typeTotalCount2' => $typeTotalCount2,
			      	   	    'customerEmergencyNumber' => $customerEmergencyNumber,
		      	          );

					}

					if($inputData['loginType'] == 'Technician') {

						  $fiveDaysBeforeDate = date('Y-m-d', strtotime('-1 day', strtotime($this->dateData['dateCreated'])));

						  $tenDaysBeforeDate = date('Y-m-d', strtotime('-10 day', strtotime($this->dateData['dateCreated'])));

						  $this->db->select('trc_user.name, trc_user.mobile');
						  $this->db->from('trc_user');
						  $this->db->where('trc_user.del','0');
						  $this->db->where('trc_user.id', $inputData['loginId']);
						  $loginData = $this->db->get()->row_array();


						  $this->db->select('trc_customer_task.id');
						  $this->db->from('trc_customer_task');
						  $this->db->where('trc_customer_task.del','0');
						  $this->db->where('trc_customer_task.assign_to', $inputData['loginId']);

						  $this->db->where('trc_customer_task.status != "Close"');
						  $this->db->where('trc_customer_task.date_created > "'.$fiveDaysBeforeDate.'"');
						  $typeTotalCount1 = $this->db->get()->num_rows();

						  $this->db->select('trc_customer_task.id');
						  $this->db->from('trc_customer_task');
						  $this->db->where('trc_customer_task.del','0');
						  $this->db->where('trc_customer_task.assign_to', $inputData['loginId']);

						  $this->db->where('trc_customer_task.status != "Close"');
						  $this->db->where('trc_customer_task.date_created > "'.$tenDaysBeforeDate.'" AND trc_customer_task.date_created < "'.$fiveDaysBeforeDate.'"');
						  $typeTotalCount2 = $this->db->get()->num_rows();

						  $this->db->select('trc_customer_task.id');
						  $this->db->from('trc_customer_task');
						  $this->db->where('trc_customer_task.del','0');
						  $this->db->where('trc_customer_task.assign_to', $inputData['loginId']);

						  $this->db->where('trc_customer_task.status != "Close"');
						  $this->db->where('trc_customer_task.date_created < "'.$tenDaysBeforeDate.'"');
						  $typeTotalCount3 = $this->db->get()->num_rows();


						  $this->db->select('trc_customer_task.id');
						  $this->db->from('trc_customer_task');
						  $this->db->join('trc_customer_task_fg', 'trc_customer_task_fg.task_id = trc_customer_task.id');
						  $this->db->where('trc_customer_task.del','0');
						  $this->db->where('trc_customer_task.assign_to', $inputData['loginId']);

						  $this->db->where('trc_customer_task.task_type','service_request');
						  $this->db->where('trc_customer_task_fg.warranty_type','Under Warranty');
						  $this->db->where('trc_customer_task.status != "Close"');
                          $this->db->group_by('trc_customer_task.id');

						  $freeServiceTask = $this->db->get()->num_rows();


						  $this->db->select('trc_customer_task.id');
						  $this->db->from('trc_customer_task');
						  $this->db->join('trc_customer_task_fg', 'trc_customer_task_fg.task_id = trc_customer_task.id');
						  $this->db->where('trc_customer_task.del','0');
						  $this->db->where('trc_customer_task.assign_to', $inputData['loginId']);
						  $this->db->where('trc_customer_task.task_type','service_request');
						  $this->db->where('trc_customer_task_fg.warranty_type','Expire Warranty');
						  $this->db->where('trc_customer_task.status != "Close"');
                          $this->db->group_by('trc_customer_task.id');

						  $paidServiceTask = $this->db->get()->num_rows();

						  $this->db->select('trc_customer_task.id');
						  $this->db->from('trc_customer_task');
						  $this->db->where('trc_customer_task.del','0');
						  $this->db->where('trc_customer_task.assign_to', $inputData['loginId']);
						  $this->db->where('trc_customer_task.task_type','commissioning');
						  $this->db->where('trc_customer_task.status != "Close"');
                          $this->db->group_by('trc_customer_task.id');

						  $commissioningTask = $this->db->get()->num_rows();

						   $outputData = array(

				      	   	  'status' => 'success',
				      	   	  'statusMessage' => '',
				      	   	  'loginData' => $loginData,
				      	   	  'typeTotalCount1' => $typeTotalCount1,
				      	   	  'typeTotalCount2' => $typeTotalCount2,
				      	   	  'typeTotalCount3' => $typeTotalCount3,
				      	   	  'freeServiceTask' => $freeServiceTask,
				      	   	  'paidServiceTask' => $paidServiceTask,
				      	   	  'commissioningTask' => $commissioningTask,
		      	           );

					}

			        echo json_encode($outputData);


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




