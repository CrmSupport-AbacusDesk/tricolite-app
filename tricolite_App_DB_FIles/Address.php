<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

class Address extends MY_Controller
{
	public function __construct() {
		
		parent:: __construct();
		$this->load->helper("url");
		$this->load->library("pagination");
		$this->load->database();
	}


	public function getStateList() {

		 $inputData = json_decode(file_get_contents('php://input'),true);

         if(isset($_SESSION['uid']) && $_SESSION['uid']) {

				 $this->db->select('trc_postal_master.state_name');
				 $this->db->from('trc_postal_master');
				 $this->db->where('trc_postal_master.del','0');
				 $this->db->group_by('trc_postal_master.state_name');
				 $this->db->order_by('trc_postal_master.state_name','ASC');
				 $stateList = $this->db->get()->result_array();
				
				 $result = array('stateList' => $stateList);
				 echo json_encode($result);

         } else {

              $this->onReturnErrorMessage();
         }
	}
	
	
	public function getDistrictList() {

			$inputData = json_decode(file_get_contents('php://input'),true);

			if(isset($_SESSION['uid']) && $_SESSION['uid'] && isset($inputData['stateName']) && $inputData['stateName']) {

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


    public function onReturnErrorMessage() {

    	    $resultData = array('status' => 'Error', 'message' => 'You are not authorized to access this information!');

    	    echo json_encode($resultData);
    }

	
}

?>




