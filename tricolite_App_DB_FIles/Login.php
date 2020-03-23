<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Authorization, Content-Type, X-Auth-Token');

class Login extends MY_Controller
{
	public function __construct() {
		
		parent:: __construct();
		$this->load->helper("url");
		$this->load->library("pagination");
		$this->load->database();
	}


	public function onValidateLoginByUserNamePassword() {

	        $inputData = json_decode(file_get_contents('php://input'), true);
		    
			if(isset($inputData['loginType']) && isset($inputData['userName']) && isset($inputData['password']) &&  $inputData['loginType']&&  $inputData['userName'] &&  $inputData['password'])  {

					if($inputData['loginType'] == 'Customer') {

                          $this->db->select('trc_customer_login_access.*');
						  $this->db->from('trc_customer_login_access');
						  $this->db->where('trc_customer_login_access.del', '0');
						  $this->db->where('trc_customer_login_access.username', $inputData['userName']);
						  $this->db->where('trc_customer_login_access.password', $inputData['password']);
						  $this->db->where('trc_customer_login_access.status', 'Approved');
					      $resultData = $this->db->get()->row_array();

					      $loginName = $resultData['company_name'];
				          $loginType = 'Customer';
				          $status = $resultData['status'];
					}

					if($inputData['loginType'] == 'Technician') {
                        

                          $this->db->select('trc_user.*');
						  $this->db->from('trc_user');
						  $this->db->where('trc_user.del', '0');
						  $this->db->where('trc_user.access_level', '5');
						  $this->db->where('trc_user.username', $inputData['userName']);
						  $this->db->where('trc_user.password', $inputData['password']);
					      $resultData = $this->db->get()->row_array();

					      $loginName = $resultData['name'];
				          $loginType = 'Technician';
				          $status = 'Active';
					}


			      if(isset($resultData['id']) && $resultData['id']) {

			      	    $resultData['loginType'] = $inputData['loginType'];

			      	    $outputData = array(

			      	   	  'status' => 'success',
			      	   	  'statusMessage' => '',
			      	   	  'loginData' => $resultData,
			      	   	  'loginId' => $resultData['id'],
			      	   	  'loginName' => $loginName,
	                      'loginType' => $loginType,
	                      'loginStatus' => $status
			      	    );

			      } else {

                        $outputData = array(

			      	   	  'status' => 'error',
			      	   	  'statusMessage' => 'Invalid Username and Password!',
			      	   	  'loginData' => [],
			      	   	 
			      	   );
			      }

			      echo json_encode($outputData);

	        } else {

                 $this->onReturnErrorMessage();
	        }
	}


	public function onValidateLoginById() {

			$inputData = json_decode(file_get_contents('php://input'), true);
			
			if(isset($inputData['loginType']) && isset($inputData['loginId']) &&  $inputData['loginType'] &&  $inputData['loginId'])  {

				 
					if($inputData['loginType'] == 'Customer') {

						$this->db->select('trc_customer_login_access.*');
						$this->db->from('trc_customer_login_access');
						$this->db->where('trc_customer_login_access.del', '0');
						$this->db->where('trc_customer_login_access.id', $inputData['loginId']);
						$resultData = $this->db->get()->row_array();

						$loginName = $resultData['company_name'];
						$loginType = 'Customer';
						$status = $resultData['status'];
					}

					if($inputData['loginType'] == 'Technician') {

						$this->db->select('trc_user.*');
						$this->db->from('trc_user');
						$this->db->where('trc_user.del', '0');
						$this->db->where('trc_user.access_level', '5');
						$this->db->where('trc_user.id', $inputData['loginId']);
						$resultData = $this->db->get()->row_array();

						$loginName = $resultData['name'];
						$loginType = 'Technician';
						$status = 'Active';
					}


					if(isset($resultData['id']) && $resultData['id']) {

							$resultData['loginType'] = $inputData['loginType'];

							$outputData = array(

								'status' => 'success',
								'statusMessage' => '',
								'loginData' => $resultData,
								'loginId' => $resultData['id'],
								'loginName' => $loginName,
								'loginType' => $loginType,
								'loginStatus' => $status
							);

					} else {

						$outputData = array(

								'status' => 'error',
								'statusMessage' => 'Invalid Username and Password!',
								'loginData' => [],
								
						);
					}


					echo json_encode($outputData);

			} else {

					$this->onReturnErrorMessage();
			}
	}



	public function onValidateMobileExistance() {

            $inputData = json_decode(file_get_contents('php://input'), true);

			if(isset($inputData['loginType']) && isset($inputData['mobileNo']) &&  $inputData['loginType'] &&  $inputData['mobileNo'])  {

				if($inputData['loginType'] == 'Customer') {

					  $this->db->select('trc_customer.id, trc_customer.cust_type');
					  $this->db->from('trc_customer');
					  $this->db->where('trc_customer.del', '0');
					  $this->db->where('trc_customer.mobile', $inputData['mobileNo']);
				      $resultData = $this->db->get()->row_array();
				}


				if($inputData['loginType'] == 'Technician') {
                    
			          $this->db->select('trc_user.id, trc_user.access_level');
					  $this->db->from('trc_user');
					  $this->db->where('trc_user.del', '0');
					  $this->db->where('trc_user.access_level', '5');
					  $this->db->where('trc_user.mobile', $inputData['mobileNo']);
				      $resultData = $this->db->get()->row_array();
				}

			    if(isset($resultData['id']) && $resultData['id']) {

			      	   $otpCode = '1234';

			      	   $outputData = array(

	                      'loginId' => $resultData['id'],
	                      'otpCode' => $otpCode,
			      	   	  'status' => 'success',
			      	   	  'statusMessage' => 'Mobile Exist!'
			      	   );

		        } else {

                    $outputData = array(

		      	   	  'status' => 'error',
		      	   	  'statusMessage' => 'Mobiile Not Exist!',
		      	    );
			    }

			    echo json_encode($outputData);

	        } else {

                  $this->onReturnErrorMessage();
	        }
	}



	public function onUpdateLoginPassword() {

	        $inputData = json_decode(file_get_contents('php://input'), true);

			if(isset($inputData['loginType']) && isset($inputData['loginId']) && isset($inputData['password']) &&  $inputData['loginType'] && $inputData['loginId'] && $inputData['password'])  {

				   $updatedData = array(
	                   'password' => $inputData['password'],
	                   'last_updated_by' => $inputData['loginId'],
	                   'last_updated_by_name' => $inputData['loginName'],
	                   'last_updated_by_type' => $inputData['loginType'],
	               );

	               if($inputData['loginType'] == 'Customer') {
                      
	                       $this->db->where('id', $inputData['loginId']);
					       $this->db->update('trc_customer', $updatedData);

					       $this->db->select('trc_customer.*');
						   $this->db->from('trc_customer');
						   $this->db->where('trc_customer.del', '0');
						   $this->db->where('trc_customer.id', $inputData['loginId']);
					       $resultData = $this->db->get()->row_array();
	               }


	               if($inputData['loginType'] == 'Technician') {

	                       $this->db->where('id', $inputData['loginId']);
					       $this->db->update('trc_user', $updatedData);

					       $this->db->select('trc_user.*');
						   $this->db->from('trc_user');
						   $this->db->where('trc_user.del', '0');
						   $this->db->where('trc_user.access_level', '5');
						   $this->db->where('trc_user.id', $inputData['loginId']);
					       $resultData = $this->db->get()->row_array();
	                }

	            
			        $outputData = array(
                          'loginData' => $resultData,
			      	   	  'status' => 'success',
			      	   	  'statusMessage' => 'Password Updated Successfully!',
		      	    );

		      	    echo json_encode($outputData);

	        } else {

                  $this->onReturnErrorMessage();
	        }
	}

	public function onRegisterCustomerAccount() {
          
		$inputData = json_decode(file_get_contents('php://input'), true);

		if(isset($inputData['companyName']) && $inputData['companyName'] )  
		{

			$this->db->select('trc_customer_project_contact.*');
			$this->db->from('trc_customer_project_contact');
			$this->db->where('trc_customer_project_contact.del', '0');
			$this->db->where('trc_customer_project_contact.mobile', $inputData['contactData'][0]['contactMobile']);

			$mobileExistProject = $this->db->get()->row_array();

			$this->db->select('trc_customer_login_access.id');
			$this->db->from('trc_customer_login_access');
			$this->db->where('trc_customer_login_access.del', '0');
			$this->db->where('trc_customer_login_access.username', $inputData['username']);
			
			$userNameData = $this->db->get()->row_array();


			$this->db->select('trc_customer_login_access.*');
			$this->db->from('trc_customer_login_access');
			$this->db->where('trc_customer_login_access.del', '0');
			$this->db->where('trc_customer_login_access.contact_mobile', $inputData['contactData'][0]['contactMobile']);
			
			$mobileExist = $this->db->get()->row_array();

		    $loginData = array();

			if((isset($mobileExist['id']) && $mobileExist['id']) || (isset($mobileExistProject['id']) && $mobileExistProject['id'])) {


				if($mobileExist['status'] == 'Pending'){

					$status = 'error';
					$statusMessage = 'Account Verification with this mobile already under process.';

				}
				if($mobileExist['status'] == 'Approved'){


					$status = 'error';
					$statusMessage ='Account with this mobile has Already Active';

				}

				if($mobileExist['status'] == 'Reject') {

					$status = 'error';
					$statusMessage = 'Account with this mobile has rejected.';

				}

				if($mobileExist['status'] == '') {

					$status = 'error';
					$statusMessage = 'Account with this mobile has Already Active, Please Login.';

				}

			} else if(isset($userNameData['id']) && $userNameData['id']) {

				    $status  = 'error';
				    $statusMessage = 'Username not available';

			}  else {

				$customerData = array(
					
					'date_created' => $this->dateData['dateCreated'],
					'created_by' => $_SESSION['uid'],
					'created_by_name' => $_SESSION['uname'],
					'created_by_type' => $_SESSION['utype'],
					'company_name' => $inputData['companyName'],
					'email' => $inputData['email'],
					'landline_no' => isset($inputData['landlineNo']) && $inputData['landlineNo'] ? $inputData['landlineNo'] : NULL,
					'username' => $inputData['username'],
					'password' => $inputData['password'],
					'project_name' => $inputData['projectName'],
					'project_street' => isset($inputData['street']) && $inputData['street'] ? $inputData['street'] : '',
					'project_state' => $inputData['state']['state_name'],
					'project_district' => isset($inputData['district']['district_name']) && $inputData['district']['district_name'] ? $inputData['district']['district_name'] : '',
					'project_city' => $inputData['city'],
					'project_pincode' => $inputData['pincode'],
					'contact_person_name' => $inputData['contactData'][0]['contactName'],
					'contact_designation' => $inputData['contactData'][0]['designation'],
					'contact_email' => $inputData['contactData'][0]['contactEmail'],
					'contact_mobile' =>$inputData['contactData'][0]['contactMobile'],
					'status' => 'Pending',
					'last_updated_by' => $_SESSION['uid'],
					'last_updated_by_name' => $_SESSION['uname'],
					'last_updated_by_type' => $_SESSION['utype']
	
				);
	
				if($this->db->insert('trc_customer_login_access', $customerData)) {
	
					$customerId = $this->db->insert_id();
	
					$this->db->select('trc_customer_login_access.*');
					$this->db->from('trc_customer_login_access');
					$this->db->where('trc_customer_login_access.del', '0');
					$this->db->where('trc_customer_login_access.id', $customerId);
					$resultData = $this->db->get()->row_array();
	
					$loginData = $resultData;
	
					$loginData['loginId'] = $resultData['id'];
					$loginData['loginType'] = 'Customer';
					$loginData['loginName'] = $resultData['company_name'];
					$loginData['loginStatus'] = $resultData['status'];
	
				   $status = 'success';
				   $statusMessage = '';
				   $this->sendMsgWhenRegistered($inputData['contactData'][0]['contactMobile']);
	
			   }else{
	
				   $status = 'error';
				   $statusMessage = $this->db->error();
				   $statusMessage = str_replace("Duplicate entry","Already Exist In System,", $statusMessage['message']);
	
				   $loginData = array();
			   
			   }
	
			}

			$result = array('loginData' => $loginData, 'status' => $status, 'statusMessage' => $statusMessage);
			echo json_encode($result);

		}else {

			$this->db->onReturnErrorMessage();
		}
	}

	public function sendMsgWhenRegistered($cust_mobile) {

		$msg ='Thanks For the Registration, Your Account Approval is in Under Process!';

        $msg =urlencode( $msg );

        
         $ch = curl_init();
        
       
        curl_setopt($ch,CURLOPT_URL, 'https://www.smsjust.com/blank/sms/user/urlsms.php?username=tricolite12&pass=w5!7XB@r&senderid=CUSAIX&dest_mobileno=9560882994&msgtype=UNI&message='.$msg.'&response=Y');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
            
        $send_otp = curl_exec($ch);
       
        curl_close($ch);





        $msg1 ='Your acoount have been Registered Successfully.We will soon verify it.';

        $msg1 =urlencode( $msg1 );

        
         $ch1 = curl_init();
        
       
        curl_setopt($ch1,CURLOPT_URL, 'https://www.smsjust.com/blank/sms/user/urlsms.php?username=tricolite12&pass=w5!7XB@r&senderid=CUSAIX&dest_mobileno='.$cust_mobile.'&msgtype=UNI&message='.$msg1.'&response=Y');
        curl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch1, CURLOPT_POST, 1);
            
        $send_otp = curl_exec($ch1);
       
        curl_close($ch1);
	}


	// public function onRegisterCustomerAccount() {
          
    //         $inputData = json_decode(file_get_contents('php://input'), true);

    //         if(isset($inputData['loginType']) && isset($inputData['companyName']) && $inputData['loginType'] && $inputData['companyName'] )  {

	// 		$checkDuplicacyData = $this->onValidateCustomerDuplicacyHandler($inputData);

	// 		$loginData = [];

	// 		if($checkDuplicacyData['isDuplicateFound']) {

    //              $status = 'error';
    //              $statusMessage = $checkDuplicacyData['errorMsg'];

	// 		} else {

	// 			    if(!isset($inputData['street']) || !$inputData['street']) {

	// 			    	  $inputData['street'] = '';
	// 			    }
			
	// 				$customerData = array(
	
	// 					'date_created' => $this->dateData['dateCreated'],
	// 					'created_by_name' => $inputData['companyName'],
	// 					'created_by_type' => 'Customer',
	// 					'company_name' => $inputData['companyName'],
	// 					'email' => $inputData['email'],
	// 					'landline_no' => $inputData['landlineNo'],
	// 					'username' => $inputData['username'],
	// 					'password' => $inputData['password'],
	// 					'status' => 'Pending',
	// 					'last_updated_by_name' => $inputData['companyName'],
	// 					'last_updated_by_type' => 'Customer'
	// 				);

					
	// 				if($this->db->insert('trc_customer', $customerData)) {

	// 				    $customerId = $this->db->insert_id();

	// 				    $updatedData = array(
    //                          'created_by' => $customerId,
    //                          'last_updated_by' => $customerId
	// 				    );

	// 				    $this->db->where('id', $inputData['loginId']);
	// 					$this->db->update('trc_customer', $updatedData);
						
	// 					$projectData = array(

	// 						'date_created' => $this->dateData['dateCreated'],
	// 						'created_by' => $customerId,
	// 						'created_by_name' => $inputData['companyName'],
	// 						'created_by_type' => 'Customer',
	// 						'customer_id' => $customerId,
	// 						'project_name' => $inputData['projectName'],
	// 						'street' => $inputData['street'],
	// 						'state_name' => $inputData['stateName'],
	// 						'district_name' => $inputData['districtName'],
	// 						'city' => $inputData['city'],
	// 						'pincode' => $inputData['pincode'],

	// 					);

	// 					if($this->db->insert('trc_customer_project',$projectData)) {
 
	// 						$projectId = $this->db->insert_id();

	// 					}

	// 					// echo $this->db->last_query(); 

	// 				    $contactData = $inputData['contactData'];
    //                     $isContactErrorOnInsert = false;
    //                     foreach ($contactData as $key => $row) {

    //                     	$projectContactData = array(

	// 							'date_created' => $this->dateData['dateCreated'],
	// 							'created_by' => $customerId,
	// 							'created_by_name' => $inputData['companyName'],
	// 							'created_by_type' => 'Customer',
	// 							'customer_id' => $customerId,
	// 							'project_id' => $projectId,
	// 							'name' => $row['contactName'],
	// 							'designation' => $row['designation'],
	// 							'email' => $row['contactEmail'],
	// 							'mobile' => $row['contactMobile']
	// 				        );

	// 						if(!$this->db->insert('trc_customer_project_contact',$projectContactData)) {

    //                               $isContactErrorOnInsert = true;

    //                               $status = 'error';
	// 						      $statusMessage = $this->db->error();

	// 						      $statusMessage = str_replace("Duplicate entry","Already Exist In System,", $statusMessage['message']);
	// 						}
	// 			        }


	// 			        if($isContactErrorOnInsert) {

	// 			        	$this->db->where('id', $customerId);
	// 						$this->db->delete('trc_customer');

	// 						$this->db->where('customer_id', $customerId);
	// 					    $this->db->where('project_id', $projectId);							
	// 						$this->db->delete('trc_customer_project_contact');

	// 			        } else {

	// 			        	 $this->db->select('trc_customer.*');
	// 						 $this->db->from('trc_customer');
	// 						 $this->db->where('trc_customer.del', '0');
	// 						 $this->db->where('trc_customer.id', $customerId);
	// 					     $resultData = $this->db->get()->row_array();

    //                          $loginData = $resultData;

    //                          $loginData['loginId'] = $resultData['id'];
    //                          $loginData['loginType'] = 'Customer';
    //                          $loginData['loginName'] = $resultData['company_name'];
    //                          $loginData['loginStatus'] = $resultData['status'];

    //                          $status = 'success';
	// 				         $statusMessage = '';
	// 			        }


	// 				} else {

	// 				     $status = 'error';
	// 				     $statusMessage = $this->db->error();

	// 				     $statusMessage = str_replace("Duplicate entry","Already Exist In System,", $statusMessage['message']);
	// 				}
	// 		}


	// 		$result = array('loginData' => $loginData, 'status' => $status, 'statusMessage' => $statusMessage);
	// 		echo json_encode($result);
	// 	}
	// }



	public function onValidateCustomerDuplicacyHandler($customerData) {

            $this->db->select('trc_customer_contact.id, trc_customer_contact.customer_id');
		    $this->db->from('trc_customer_contact');
		    $this->db->where('trc_customer_contact.del','0');

            $this->db->group_start();

			  $this->db->where('trc_customer_contact.email', $customerData['email']);
			//   $this->db->or_where('trc_customer_contact.mobile', $customerData['mobile']);
			  $this->db->or_where('trc_customer_contact.mobile', $customerData['landlineNo']);

			$this->db->group_end();

		    $contactResultData = $this->db->get()->row_array();

            $isCustomerTableDuplicateFound = false;
            $isContactTableDuplicateFound = false;
            $errorMsg = '';

		    if(isset($contactResultData['id']) && $contactResultData['id']) {

                     $isContactTableDuplicateFound = true;

                     $this->db->select('trc_customer.id, trc_customer.company_name');
				     $this->db->from('trc_customer');
				     $this->db->where('trc_customer.id', $contactResultData['customer_id']);
				     $this->db->where('trc_customer.del','0');
		             $customerData = $this->db->get()->row_array();

                     $errorMsg = 'Duplicacy With '. $customerData['company_name'];
		    }


            foreach ($customerData['contactData'] as $key => $row) {
            	
                    $this->db->select('trc_customer.id, trc_customer.company_name');
				    $this->db->from('trc_customer');
				    $this->db->where('trc_customer.del','0');

	                $this->db->group_start();

				      $this->db->where('trc_customer.email', $row['contactEmail']);
				      $this->db->or_where('trc_customer.mobile', $row['contactMobile']);
				      $this->db->or_where('trc_customer.landline_no', $row['contactMobile']);

				    $this->db->group_end();

			        $customerResultData = $this->db->get()->row_array();

			        if(isset($customerResultData['id']) && $customerResultData['id']) {

                           $isCustomerTableDuplicateFound = true;

	                       $this->db->select('trc_customer.id, trc_customer.company_name');
					       $this->db->from('trc_customer');
					       $this->db->where('trc_customer.id', $customerResultData['id']);
					       $this->db->where('trc_customer.del','0');
			               $customerData = $this->db->get()->row_array();

	                       $errorMsg = 'Duplicacy With '. $customerData['company_name'];
			        }
            } 

            if($isCustomerTableDuplicateFound || $isContactTableDuplicateFound) {

            	 $resultData = array(

                    'isDuplicateFound' => true,
                    'errorMsg' => $errorMsg
                 );

            } else {

                 $resultData = array(

                    'isDuplicateFound' => false,
                    'errorMsg' => ''
                 );
            }

		    return $resultData;
    }

    public function onGetLoginUserCompleteDetail() {

		  $inputData = json_decode(file_get_contents('php://input'), true);
		  
		//   print_r($inputData); die;

    	  if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

    	  	    if($inputData['loginType'] == 'Customer') {

                      $this->db->select('trc_customer_login_access.*');
					  $this->db->from('trc_customer_login_access');
					  $this->db->where('trc_customer_login_access.del', '0');
					  $this->db->where('trc_customer_login_access.id', $inputData['loginId']);
					  $loginData = $this->db->get()->row_array();


					  $this->db->select('trc_customer_project_contact.*');
					  $this->db->from('trc_customer_project_contact');
					  $this->db->where('trc_customer_project_contact.del', '0');
					  $this->db->where('trc_customer_project_contact.project_id', $inputData['loginId']);
					  $contactData = $this->db->get()->result_array();

					  $result = array(

					  	  'loginData' => $loginData,
					  	  'contactData' =>$contactData
					  );
    	  	    }

    	  	    if($inputData['loginType'] == 'Technician') {


    	  	    	  $this->db->select('trc_user.*');
					  $this->db->from('trc_user');
					  $this->db->where('trc_user.del', '0');
					  $this->db->where('trc_user.id', $inputData['loginId']);
					  $loginData = $this->db->get()->row_array();

					  $result = array(

					  	  'loginData' => $loginData,
					  );
    	  	    }

    	  	    echo json_encode($result);

    	  } else {

    	  	    $this->onReturnErrorMessage();
    	  }
    }


    public function onSaveProfileImagesData() {

		    $inputData = json_decode(file_get_contents('php://input'), true);

		    if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

		    	 $loginId = $inputData['loginId'];

			     $imageName = uniqid(). '.jpg';

			     if($inputData['loginType'] == 'Technician') {

			        $uploadPath = $_SERVER["DOCUMENT_ROOT"] . 'api/uploads/User_Doc/'. $imageName;
			     }

			     if($inputData['loginType'] == 'Customer') {

			     	  $uploadPath = $_SERVER["DOCUMENT_ROOT"] . 'api/uploads/Customer_Doc/'. $imageName;
			     }


			     file_put_contents($uploadPath, base64_decode($inputData['uploadData']));

			     $imageData = array(
                                    'image_url' => $imageName
       	       	     	    );


                 if($inputData['loginType'] == 'Technician') {

                     $this->db->where('id', $loginId);
	           	     $this->db->update('trc_user', $imageData);
                 }

                 if($inputData['loginType'] == 'Customer') {

                     $this->db->where('id', $loginId);
	           	     $this->db->update('trc_customer', $imageData);
                 }

			    echo json_encode($uploadPath);
					 
		    } else {

		    	 $this->onReturnErrorMessage();
		    }     
	}


	public function onGetTechnicianDetail() {

	        $inputData = json_decode(file_get_contents('php://input'), true);

		    if(isset($inputData['loginType']) && isset($inputData['loginId']) && $inputData['loginType'] && $inputData['loginId']) {

                  $userId = $inputData['userId'];

		    	  $this->db->select('trc_user.*');
				  $this->db->from('trc_user');
				  $this->db->where('trc_user.del', '0');
				  $this->db->where('trc_user.id', $userId);
				  $userData = $this->db->get()->row_array();
		    	 
				  $result = array(
				  	  'userData' => $userData,
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




