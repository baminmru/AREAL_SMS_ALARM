<?php
$config = array(); 

// Реквизиты БД
$config['db']['server'] = 'localhost';
$config['db']['database'] = 'xxx';
$config['db']['username'] = 'xxx';
$config['db']['password'] = 'xxx';
$config['db']['port'] = 3306;



// полный путь к каталогу файлового хранилища
$config['logpath']='/home/baranov/WEB/mailer/log/';
$config['web']='http://sms.a-real.xyz/';
$config['log']=true;

function logWrite($msg)
{
	global $config;
	
	if($config['log'])
	{
		date_default_timezone_set('Europe/Moscow');
		
		$date = date('Y-m-d H:i:s');
	
		file_put_contents($config['logpath'].'_debug.txt', $date.'  '.$msg."\r\n", FILE_APPEND);
	}
	//echo $msg."\r\n";
}