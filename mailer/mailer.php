<?php

//error_reporting(E_ALL);
//ini_set('display_errors', 1);
		
include_once('/home/baranov/WEB/mailer/mailer_config.php');

class areal_mailer {
	 
	
    function __construct() {
		//logWrite( 'areal_mailer __construct ');

		global $config;
	

        //Подключаемся к БД
        $this->db = new mysqli($config['db']['server'], $config['db']['username'], $config['db']['password'],
                               $config['db']['database'], $config['db']['port']);
							   
        if ($this->db->connect_error) 
		{
			logWrite( $this->db->connect_error);
			throw new Exception('Connect Error (' . $this->db->connect_errno . ') ' . $this->db->connect_error);
        }
        $this->db->set_charset("utf8");
		
						
    }
	private function close()
	{							
		if($this->db) $this->db->close();		
		$this->db=false;
	}
	public function __destruct()
    {
		$this->close();
    }
	

	
	function index(){
		
		$this->EmailSMS();
		
		$this->SMS_SMS();
	
	}
	
	function startsWith($haystack, $needle)
	{
		//echo('<br/>strpos( *'.$haystack.'* , *'.$needle.'* )='. strpos($haystack, $needle));
		return strpos($haystack, $needle) === 0;
	}

	
		 
	function MailIt($title, $msg ,$to ){
	
	
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$headers .= 'To: '. $to . "\r\n";
		$headers .= 'From: notifier@sms.a-real.xyz' . "\r\n";
		$mess = wordwrap($msg, 70);
		
		logWrite( '>>>Mail title: '.$title.' to: '.$to.'  message: '.$msg);
		
		if(mail($to, $title, $mess, $headers)) {
			return true;	
		}
		else {
			return false;
		}
		
		
		
	}
	
	public function SmsIt($msg,$to,$id){
	
	     $cyr = array(
    'ж',  'ч',  'щ',   'ш',  'ю',  'а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ы','ъ', 'ь', 'я',
    'Ж',  'Ч',  'Щ',   'Ш',  'Ю',  'А', 'Б', 'В', 'Г', 'Д', 'Е', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ы','Ъ', 'Ь', 'Я');
    $lat = array(
    'zh', 'ch', 'sht', 'sh', 'yu', 'a', 'b', 'v', 'g', 'd', 'e', 'z', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h', 'c', 'i', 'y', 'x', 'q',
    'Zh', 'Ch', 'Sht', 'Sh', 'Yu', 'A', 'B', 'V', 'G', 'D', 'E', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'c', 'I', 'Y', 'X', 'Q');
     $textcyr = str_replace($cyr, $lat, $msg);
	 $to=str_replace('+', '', $to);
	 $to=str_replace(' ', '', $to);
	 $sms ="To:".$to."\r\n"."Autosplit:2\r\n\r\n".$textcyr;
		logWrite($sms);
		file_put_contents('/var/spool/sms/outgoing/'.$id.'_'.$to.'.txt', $sms);
		return true;
		
	}
	
	public function EmailSMS()
	{
	   	global $config;
		
		$query="SELECT * FROM v_sender where chtype='e-mail' AND finished=0 AND NOT (ch_param  is null OR ch_param='')
				order by smstime";
		$tasks = array();
			
		if ($this->db->multi_query($query)) 
		{
			do 
			{
				if ($resultset = $this->db->store_result()) 
				{
					while ($row = $resultset->fetch_assoc()) $tasks[]=$row;
				
					$resultset->free();
				}
				if ($this->db->more_results()) {
				}		
			} while ($this->db->next_result());
		}
		
		
	    
		for($i=0; $i<count($tasks); $i++) 
		{
			
			$id=$tasks[$i]['id'];
			$email=$tasks[$i]['ch_param'];
			$msg=$tasks[$i]['family']." ".$tasks[$i]['name']."!";
			$msg =$msg."<br/>Получено сообщение от модуля оповещения: ".$tasks[$i]['modulename'];
			$msg =$msg."<br/>Время сообщения:".$tasks[$i]['smstime'];
			$msg =$msg."<br/>Содержание:";
			$msg =$msg."<br/>Температура:".$tasks[$i]['temperature'];
			
			$msg =$msg."<br/>Поплавок в норме:";
			if($tasks[$i]['pop_ok']==0){
				$msg =$msg. 'Нет';
			}else{
				$msg =$msg. 'Да';
			}				;
			$msg =$msg."<br/>Питание в норме:";
			if($tasks[$i]['power_ok']==0){
				$msg =$msg. 'Нет';
			}else{
				$msg =$msg. 'Да';
			}				;
			$msg =$msg."<br/>Крышка открыта:";
			if($tasks[$i]['roof_open']==0){
				$msg =$msg. 'Нет';
			}else{
				$msg =$msg. 'Да';
			}				;
		
			//echo "<br/>mail to: ".$email."=>".$msg;
			
			if($this->MailIt('Оповещение AREAL SMS NOTIFIER',$msg,$email)){
				$q = "UPDATE arlog_data set sendtime=now(),finished=-1 where  arlog_dataid=G2B('".$id."')";
				$stmt = $this->db->prepare($q);
				$stmt->execute();
				$stmt->close();	
			}else{
				
				$q = "UPDATE arlog_data set sendtime=now(),trynumber=trynumber+1 where  arlog_dataid=G2B('".$id."')";
				$stmt = $this->db->prepare($q);
				$stmt->execute();
				$stmt->close();	
				
				$q = "UPDATE arlog_data set finished=-1  where trynumber > 5  and arlog_dataid=G2B('".$id."')";
				$stmt = $this->db->prepare($q);
				$stmt->execute();
				$stmt->close();	
				
			}
			
			
		}
		
		
		
	

	}



	public function SMS_SMS()
	{
	   	global $config;
		
		$query="SELECT * FROM v_sender where chtype='SMS' AND finished=0 AND NOT (ch_param  is null OR ch_param='') order by smstime";
		$tasks = array();
			
		if ($this->db->multi_query($query)) 
		{
			do 
			{
				if ($resultset = $this->db->store_result()) 
				{
					while ($row = $resultset->fetch_assoc()) $tasks[]=$row;
				
					$resultset->free();
				}
				if ($this->db->more_results()) {
				}		
			} while ($this->db->next_result());
		}
		
		
	    
		for($i=0; $i<count($tasks); $i++) 
		{
			
			$id=$tasks[$i]['id'];
			$mdid=$tasks[$i]['mdid'];
			$TO=$tasks[$i]['ch_param'];
			$msg=$tasks[$i]['family']." ".$tasks[$i]['name']."!";
			$msg =$msg." MODULE : ".$tasks[$i]['modulename'];
			$msg =$msg." TIME:".$tasks[$i]['smstime']."; ";
			$msg =$msg." TEMP:".$tasks[$i]['temperature']."; ";
			
			/* Содержание сообщения
				1.	При открытии крышки «OTKRYTA KRYSHKA» 
				2.	При переполнении «PEREPOLNENIE»
				3.	При отключении электричества  «NET 220V”
				4.	При падении температуры «TEMP <5 C»
				5.	При закрытии крышки «ZAKRYTA KRYSHKA»
				6.	При восстановлении подачи электроэнергии «NORM 220V»
				7.	При восстановлении температуры «TEMP NORM»
				сообщение при запросе статуса устройства
				 «RABOTA NORM» при стандартных условиях: закрыта крышка, нет переполнения, нормальная температура, есть электричество
			*/
			
			$msgbody="";
			$query2="SELECT * FROM armodule_state where  armdid=G2B('".$mdid."')";
			$status=array();
			
			if ($this->db->multi_query($query2)) 
			{
				do 
				{
					if ($resultset = $this->db->store_result()) 
					{
						while ($row = $resultset->fetch_assoc()) $status=$row;
					
						$resultset->free();
					}
					if ($this->db->more_results()) {
					}		
				} while ($this->db->next_result());
			}
			
			
		
			
			
			
			if($tasks[$i]['pop_ok']!=0  &&  $tasks[$i]['power_ok']!=0 && $tasks[$i]['roof_open']==0  && $tasks[$i]['temperature']>=5 ){
				$msgbody =$msgbody." RABOTA NORM; ";
				
			}else{
				
			
				if(count($status)>0){
					if($tasks[$i]['power_ok']!=0 && $status[0]['power_ok']==0){
						$msgbody =$msgbody. 'NORM 220V; ';
					}
					
					if($tasks[$i]['roof_open']==0 && $status[0]['roof_open']!=0){
						$msgbody =$msgbody. 'ZAKRYTA KRYSHKA; ';
					}
					
					if($tasks[$i]['temperature']>=5 && $status[0]['temperature']<5){
						$msgbody =$msgbody. 'TEMP NORM; ';
					}
				}
			
				if($tasks[$i]['pop_ok']==0){
					if(count($status)>0){
						if( $status[0]['pop_ok']!=0){
							$msgbody =$msgbody. 'REREPOLNENIE; ';
						}
					}else{
						$msgbody =$msgbody. 'REREPOLNENIE; ';
					}
				}
				
				if($tasks[$i]['power_ok']==0){
					if(count($status)>0){
						if( $status[0]['power_ok']!=0){
							$msgbody =$msgbody. 'NET 220V; ';
						}
					}else{
						$msgbody =$msgbody. 'NET 220V; ';
					}
				}
				
				if($tasks[$i]['roof_open']!=0){
					if(count($status)>0){
						if( $status[0]['roof_open']==0){
							$msgbody =$msgbody. 'OTKRYTA KRYSHKA; ';
						}
					}else{
						$msgbody =$msgbody. 'OTKRYTA KRYSHKA; ';
					}
				}
				
				if($tasks[$i]['temperature']<5){
					if(count($status)>0){
						if( $status[0]['temperature']>=5){
							$msgbody =$msgbody. 'TEMP <5 C; ';
						}
					}else{
						$msgbody =$msgbody. 'TEMP <5 C; ';
					}
				}
			}
			
			if($msgbody !=""){
				$msg=$msg.$msgbody;
				if($this->SmsIt($msg,$TO,$id)){
					$q = "UPDATE arlog_data set sendtime=now(),finished=-1 where  arlog_dataid=G2B('".$id."')";
					$stmt = $this->db->prepare($q);
					$stmt->execute();
					$stmt->close();	
					
				    // save error status
					$q = "DELETE FROM armodule_state where  armdid=G2B('".$mdid."')";
					$stmt = $this->db->prepare($q);
					$stmt->execute();
					$stmt->close();
					
					$q = "INSERT INTO armodule_state(  armdid ,pop_ok ,roof_open ,power_ok ,temperature)VALUES(G2B('".$mdid."'),".$tasks[$i]['pop_ok'].",".$tasks[$i]['roof_open'].",".$tasks[$i]['power_ok'].",".$tasks[$i]['temperature'].")";
					$stmt = $this->db->prepare($q);
					$stmt->execute();
					$stmt->close();
					
				}else{
					
					$q = "UPDATE arlog_data set sendtime=now(),trynumber=trynumber+1 where  arlog_dataid=G2B('".$id."')";
					$stmt = $this->db->prepare($q);
					$stmt->execute();
					$stmt->close();	
					
					$q = "UPDATE arlog_data set finished=-1  where trynumber > 5  and arlog_dataid=G2B('".$id."')";
					$stmt = $this->db->prepare($q);
					$stmt->execute();
					$stmt->close();	
					
				}
			}else{
				
				// нет новой информации ....
				$q = "UPDATE arlog_data set sendtime=now(),finished=-1 where  arlog_dataid=G2B('".$id."')";
				$stmt = $this->db->prepare($q);
				$stmt->execute();
				$stmt->close();	
			}
			
		}
		
		
		
	}

};



//echo "create mailer";
$mmm = new areal_mailer();
//echo "<br/>start mailer";
$mmm->index();
//echo "<br/>mailer finished";
