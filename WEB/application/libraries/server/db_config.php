<?php

global $dconfig;

$dconfig = array();

// Реквизиты БД
$dconfig['db']['server'] = 'localhost';
$dconfig['db']['database'] = 'areal_cli';
$dconfig['db']['username'] = 'myadmin';
$dconfig['db']['password'] = 'SupaPleX';

// полный путь к каталогу файлового хранилища
$dconfig['storage'] = '/home/baranov/WEB/files';
$dconfig['icons'] = '/home/baranov/WEB/resources/icons';
$dconfig['logpath']='/home/baranov/WEB/application/logs';
$dconfig['temppath']='/home/baranov/WEB/temp/';
$dconfig['log']=true;

?>
