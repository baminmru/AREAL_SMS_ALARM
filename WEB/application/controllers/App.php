<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

	
class App extends CI_Controller
{
    public function index()
    {
	
    }

    public function login()
    {
     
 
		$CI =& get_instance();
        $loginUsername = $this->input->get_post('loginUsername', TRUE);
        $loginPassword = $this->input->get_post('loginPassword', TRUE);
        $res = $CI->jservice->get(array('Action' => 'Login', 'Email' => $loginUsername, 'PasswordHash' => $loginPassword ));
        if (strlen($res) == 38) {
		    log_message('debug', 'Login sessionid= : ' . $res);
            //$CI->session->set_userdata('SessionID', $res);
			//session_start();
			$_SESSION['SessionID'] = $res;
			log_message('debug', 'php sessionid= : ' . session_id());
			log_message('debug', 'sys sessionid= : ' . $_SESSION['SessionID']);
            //$CI->jservice->get(array('Action' => 'SetRole', 'RoleName' => 'Администратор'));
            $this->output->set_output(json_encode(array('success' => true)));
        } else {
            $this->output->set_output(json_encode(array('success' => false)));
  
      }

		
    }
	
	
	public function register(){
		
		$CI =& get_instance();
        $user = $this->input->get_post('user', TRUE);
        $pass = $this->input->get_post('pass', TRUE);
		$pass2 = $this->input->get_post('pass2', TRUE);
		$first = $this->input->get_post('first', TRUE);
        $last = $this->input->get_post('last', TRUE);
		$phone = $this->input->get_post('phone', TRUE);
		$email = $this->input->get_post('email', TRUE);
		if($pass!=$pass2){
			$this->output->set_output(json_encode(array('success' => false,'result'=>'Пароли не совпадают')));
			return;
		}
        $res = $CI->jservice->get(
			array('Action' => 'Register', 
			'user' => $user, 
			'pass' => $pass, 
			'first' => $first,
			'last' => $last,
			'phone' => $phone,
			'email' => $email
			)
		);
		
		if($res!='OK'){
			$this->output->set_output(json_encode(array('success' => false,'result'=>$res)));
			return;
		}
		
		$res = $CI->jservice->get(array('Action' => 'Login', 'Email' => $user, 'PasswordHash' => $pass ));
        if (strlen($res) == 36 or strlen($res) == 38) {
		    log_message('debug', 'Login sessionid= : ' . $res);
            //$CI->session->set_userdata('SessionID', $res);
			//session_start();
			$_SESSION['SessionID'] = $res;
			log_message('debug', 'php sessionid= : ' . session_id());
			log_message('debug', 'sys sessionid= : ' . $_SESSION['SessionID']);
            //$CI->jservice->get(array('Action' => 'SetRole', 'RoleName' => 'Администратор'));
            $this->output->set_output(json_encode(array('success' => true)));
        } else {
            $this->output->set_output(json_encode(array('success' => false)));
  
      }
	}
	
	/*
	 public function setRole()
    {
	
        $CI =& get_instance();
        $RoleName = $this->input->get_post('RoleName', TRUE);
        log_message('debug', 'Set Role name= ' . $RoleName);
		log_message('debug', 'Set Role post : '.json_encode($this->input->post(NULL, FALSE)));
        log_message('debug', 'Set Role get : '.json_encode($this->input->get(NULL, FALSE)));
        $res = $CI->jservice->get(array('Action' => 'SetRole', 'RoleName' => $RoleName));
        
        $this->output->set_output(json_encode(array('success' => true)));
       
		
    }
	
	function getRoleList() {
            log_message('debug', 'GetRole List ');

          
        $res = $this->jservice->get(array('Action' => 'GetRoleList'));
        if (empty($res)) {
            return array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
	
			print json_encode($return);
		}
    }
	*/
	
	function getActions() {
        log_message('debug', 'GetActions ');

          
        $res = $this->jservice->get(array('Action' => 'GetActions'));
        if (empty($res)) {
            return json_encode(array('success' => FALSE, 'msg' => 'No data found'));
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
	
			print json_encode($return);
		}
    }
	
	function getModes() {
        log_message('debug', 'getModes ');

          
        $res = $this->jservice->get(array('Action' => 'GetModes'));
        if (empty($res)) {
            return array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
	
			print json_encode($return);
		}
    }
	
	
	function getOperations() {
        log_message('debug', 'getOperations ');

          
        $res = $this->jservice->get(array('Action' => 'GetOperations'));
        if (empty($res)) {
            return array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
	
			print json_encode($return);
		}
    }
	
	function getSessionInfo() {
        log_message('debug', 'getGetSessionInfo ');

          $res = $this->jservice->get(array('Action' => 'GetSessionInfo'));
        if (empty($res)) {
            return array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
	
			print json_encode($return);
		}
    }
	

	
	
	
	function getDocMode() {

			$res= $this->jservice->get(array('Action' => 'GetDocModes', 'DocumentID'=>$this->input->get_post('id', TRUE)));
			$return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
			print json_encode($return);
    }
	
	
	function getRoleData() {
        log_message('debug', 'getRoleData ');
          
        $res = $this->jservice->get(array('Action' => 'GetRoleData'));
        if (empty($res)) {
			//log_message('debug', 'No data found');
            print array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
			print json_encode($return);
			//log_message('debug', json_encode($return));
		}
		
		 
    }
	
		
	function getRoleColumns() {
        log_message('debug', 'getRoleColumns ');
          
        $res = $this->jservice->get(array('Action' => 'GetRoleColumns'));
        if (empty($res)) {
			//log_message('debug', 'No data found');
            print array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
			print json_encode($return);
			//log_message('debug', json_encode($return));
		}
    }
	
	function getRoleModel() {
        log_message('debug', 'getRoleModel ');
          
        $res = $this->jservice->get(array('Action' => 'GetRoleModel'));
        if (empty($res)) {
			//log_message('debug', 'No data found');
            print array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
			print json_encode($return);
			//log_message('debug', json_encode($return));
		}
    }
	
	
	function ProcessRole() {
		 log_message('debug', 'setSPPassword post : '.json_encode($this->input->post(NULL, FALSE)));
		 log_message('debug', 'setSPPassword get : '.json_encode($this->input->get(NULL, FALSE)));
		 $data = array(
			'instanceid' =>   $this->input->get_post('instanceid', TRUE),
			'name' =>   $this->input->get_post('name', TRUE),
			'value' =>   $this->input->get_post('value', TRUE)
		 );
       
		if (!empty($data)) {
			$res=$this->jservice->get(array('Action' => 'ProcessRole',  'Values'=>$data ));
			
			if($res=='OK'){
				echo( json_encode(array('success' => TRUE, 'msg' => 'OK')));
			}else{
				echo( json_encode(array('success' => FALSE, 'msg' => 'error')));
			}
			
		} else {
			echo(json_encode(array('success' => FALSE, 'msg' => 'No data to store on server')));
		}
    }
	
	
	function setSPPassword() {
		 log_message('debug', 'setSPPassword post : '.json_encode($this->input->post(NULL, FALSE)));
		 log_message('debug', 'setSPPassword get : '.json_encode($this->input->get(NULL, FALSE)));
		 $data = array(
			'oldpassword' =>   $this->input->get_post('oldPassword', TRUE),
			'newpassword' =>   $this->input->get_post('newPassword', TRUE),
			'comppassword' =>   $this->input->get_post('compPassword', TRUE)
		 );
       
		if (!empty($data)) {
			$res=$this->jservice->get(array('Action' => 'Wizard', 'Name' => 'setmypassword_wiz', 'Values'=>$data ));
			
			if($res[0]->result=='OK'){
				echo( json_encode(array('success' => TRUE, 'msg' => $res[0]->result)));
			}else{
				echo( json_encode(array('success' => FALSE, 'msg' => $res[0]->result)));
			}
			
		} else {
			echo(json_encode(array('success' => FALSE, 'msg' => 'No data to store on server')));
		}
    }
	
	function AdminPassword() {
		 log_message('debug', 'setPassword post : '.json_encode($this->input->post(NULL, FALSE)));
		 log_message('debug', 'setPassword get : '.json_encode($this->input->get(NULL, FALSE)));
		 $data = array(
			'instanceid' =>   $this->input->get_post('instanceid', TRUE),
			'newpassword' =>   $this->input->get_post('newpassword', TRUE),
			'comppassword' =>   $this->input->get_post('comppassword', TRUE)
		 );
       
		if (!empty($data)) {
			$res=$this->jservice->get(array('Action' => 'Wizard', 'Name' => 'setpassword_wiz', 'Values'=>$data ));
			
			if($res[0]->result=='OK'){
				echo( json_encode(array('success' => TRUE, 'msg' => $res[0]->result)));
			}else{
				echo( json_encode(array('success' => FALSE, 'msg' => $res[0]->result)));
			}
			
		} else {
			echo(json_encode(array('success' => FALSE, 'msg' => 'No data to store on server')));
		}
    }
	
	
	 public function logout()
    {
    
		$CI =& get_instance();
		setcookie('lastvkid', '', time()-300, "/", "vas.baminote.local", false, true);
		$_COOKIE['lastvkid']='';
      
        $res = $CI->jservice->get(array('Action' => 'Logout'));
       
        $this->output->set_output(json_encode(array('success' => true)));
		
		$_SESSION['SessionID']='';
		
	
		
		log_message('debug', 'logout SessionID= >'.$_SESSION['SessionID'].'<' );
		
		session_unset();
		
    }
	
	
	
	function PrepareDocument() {
	    $typename=$this->input->get_post('typename',TRUE);
		$id=$this->input->get_post('documentid',TRUE);
	    $this->jservice->get(array('Action'=>'PrepareDocument', 'TypeName'=>$typename, 'DocumentID'=>$id));
	    echo( json_encode(array('success' => TRUE, 'msg' => 'PrepareDocument:'.$typename.'.'.$id)));
    }
	
	function CommitDocument() {
	    $typename=$this->input->get_post('typename',TRUE);
		$id=$this->input->get_post('documentid',TRUE);
	    $this->jservice->get(array('Action'=>'CommitDocument', 'TypeName'=>$typename, 'DocumentID'=>$id));
	    echo( json_encode(array('success' => TRUE, 'msg' => 'CommitDocument:'.$typename.'.'.$id)));
    }
	
	function DropTempDocument() {
	    $typename=$this->input->get_post('typename',TRUE);
		$id=$this->input->get_post('documentid',TRUE);
	    $this->jservice->get(array('Action'=>'DropTempDocument', 'TypeName'=>$typename, 'DocumentID'=>$id));
		echo( json_encode(array('success' => TRUE, 'msg' => 'DropTempDocument:'.$typename.'.'.$id)));
    }
	
	function ReArchiveDocument() {
	    $typename=$this->input->get_post('typename',TRUE);
		$id=$this->input->get_post('documentid',TRUE);
	    $this->jservice->get(array('Action'=>'ReArchiveDocument', 'TypeName'=>$typename, 'DocumentID'=>$id));
	    echo( json_encode(array('success' => TRUE, 'msg' => 'ReArchiveDocument:'.$typename.'.'.$id)));
    }
	
	
	
	function SaveNewIcon(){
	     log_message('debug', 'SaveNewIcon');
//////////////////////////// support file data for:newicon
		if ($_FILES['newicon_fu']['size'] > 0 ) {
		   $ext = pathinfo($_FILES['newicon_fu']['name'], PATHINFO_EXTENSION);
		   $orig = pathinfo($_FILES['newicon_fu']['name'], PATHINFO_BASENAME) ;
		   $filename = strtolower(trim($this->jservice->get(array('Action' => 'NewGuid')),'{}') . '.' . $ext);
		   
		   if (move_uploaded_file($_FILES['newicon_fu']['tmp_name'], $this->jservice->temp_file_path().$filename)) {
				log_message('debug', 'SaveNewIcon->file moved');
			  $file_data = file_get_contents($this->jservice->temp_file_path().$filename);
			  $this->jservice->get(array('Action' => 'AddIconFile', 'FileName'=>$filename, 'Data'=>utf8_encode($file_data), 'OrigName'=>$orig   ));
			  log_message('debug', 'SaveNewIcon->file saved');
			  unlink($this->jservice->temp_file_path().$filename);
		   }
		   log_message('debug', 'SaveNewIcon->ok');
		   echo json_encode(array('success' => TRUE, 'data' => $orig ));
		   return;
		}
//////////////////////////// end support file data for: newicon
		log_message('debug', 'SaveNewIcon->err');
		echo json_encode(array('success' => FALSE, 'data' => 'no data' ));
	}
	
	
	function getIconList() {
        log_message('debug', 'getRoleModel ');
          
        $res = $this->jservice->get(array('Action' => 'GetIconList'));
        if (empty($res)) {
			//log_message('debug', 'No data found');
            print array('success' => FALSE, 'msg' => 'No data found');
        } else {
           
            $return = array(
                'success' =>  TRUE ,
                'data'    => $res
            );
			print json_encode($return);
			//log_message('debug', json_encode($return));
		}
    }
	
	
	
}
