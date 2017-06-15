<?php

global $dconfig;

$dconfig = array();

// Реквизиты БД
$dconfig['db']['server'] = 'localhost';
$dconfig['db']['database'] = 'areal_cli';
$dconfig['db']['username'] = 'root';
$dconfig['db']['password'] = '';

// полный путь к каталогу файлового хранилища
$dconfig['storage'] = 'D:/bami/projects/SMS_alarm/WEB/files';
$dconfig['icons'] = 'D:/bami/projects/SMS_alarm/WEB/resources/icons';
$dconfig['logpath']='D:/bami/projects/SMS_alarm/WEB/application/logs';
$dconfig['temppath']='D:/bami/projects/SMS_alarm/WEB/temp/';
$dconfig['log']=true;

?>
