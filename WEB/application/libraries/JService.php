<?php  if (!defined('BASEPATH')) exit('No direct script access allowed');

error_reporting(E_ERROR  | E_PARSE);

include_once(dirname(__FILE__)  . '/' .'db_config.php');

include_once(dirname(__FILE__)  . '/' .'dbapi.php');


class JService
{
	function temp_file_path(){
		global $dconfig;
		return $dconfig['temppath'];
	}

	public function dbConfig(){
		global $dconfig;
		return $dconfig['db'];
	}

 function get($data)
    {
		global $dconfig;
		
        $CI =& get_instance();
		

		if(isset($_SESSION['SessionID'])){
			log_message('debug', 'JService sys sessionid= : ' . $_SESSION['SessionID']);
			$data = array_merge($data, array('SessionID'=>$_SESSION['SessionID']));
		}else{
			log_message('debug', 'JService sys sessionid= not set');
			$data = array_merge($data, array('SessionID'=>''));
		}
	
		
		$app = new B2service($dconfig, $data);
		
		if ($app->action!="AddFile" && $app->action!="AddPhotoFile"){
			log_message('debug', 'Jservice.Get : '.json_encode($data));
		}else{
			log_message('debug', 'Jservice.Get : '.$app->action);
		}
		try {
			$res = call_user_func(array($app, $app->action));
			log_message('debug', 'Jservice.Result : '.json_encode($res));
			return json_decode(json_encode($res));
		} catch( Exception $e ) {
		   log_message('debug', 'Jservice.Error : '.$e->getMessage());
		   echo json_encode(array('error' => $e->getMessage()));
		}

	}
}


