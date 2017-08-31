<?php	
	header("Cache-control: public");
	header("Cache-control: max-age=86400");
	//session_start();


	if ( isset($_SESSION['SessionID'])) {
		log_message('debug', 'Areal view: SessionID >'.$_SESSION['SessionID'].'<' ); 
	}else{
		log_message('debug', 'Areal view: SessionID  not set !!!' ); 
	}
				 
	if (!isset($_SESSION['SessionID']) || $_SESSION['SessionID']=='') 
	{
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
	<head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta http-equiv="content-type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
			<meta name="description" content="" />
			<title>AREAL СМС</title>
			<script type="text/javascript" src="/e6/ext-all.js"></script> 

			<script type="text/javascript" src="resources/exporter/Base64.js"></script>
			<script type="text/javascript" src="resources/exporter/Cell.js"></script>
			<script type="text/javascript" src="resources/exporter/Style.js"></script>
			<script type="text/javascript" src="resources/exporter/Worksheet.js"></script>
			<script type="text/javascript" src="resources/exporter/Workbook.js"></script>

			
					
			<!-- <link rel="stylesheet" type="text/css" href="/e6/modern/theme-windows/resources/theme-windows-all.css">
			<script type="text/javascript" src="/e6/modern/theme-windows/theme-windows.js"></script>  -->
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-triton/resources/theme-triton-all.css"/>
			<script type="text/javascript" src="/e6/classic/theme-triton/theme-triton-debug.js"></script> -->
			
			<link rel="stylesheet" type="text/css" href="/e6/classic/theme-aria/resources/theme-aria-all.css">
			<script type="text/javascript" src="/e6/classic/theme-aria/theme-aria.js"></script>  
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-triton/resources/theme-triton-all.css"/>
			<script type="text/javascript" src="/e6/classic/theme-triton/theme-triton-debug.js"></script> -->
			
			
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-neptune/resources/theme-neptune-all.css">
			<script type="text/javascript" src="/e6/classic/theme-neptune/theme-neptune-debug.js"></script>  -->
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-aria/resources/theme-aria-all.css">
			<script type="text/javascript" src="/e6/classic/theme-aria/theme-aria-debug.js"></script>  -->
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-neptune-touch/resources/theme-neptune-touch-all.css">
			<script type="text/javascript" src="/e6/classic/theme-neptune-touch/theme-neptune-touch-debug.js"></script>  -->
			
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-crisp/resources/theme-crisp-all.css">
			<script type="text/javascript" src="/e6/classic/theme-crisp/theme-crisp-debug.js"></script>  -->
			
				
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-gray/resources/theme-gray-all.css">
			<script type="text/javascript" src="/e6/classic/theme-gray/theme-gray-debug.js"></script>  -->
			
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-classic/resources/theme-classic-all.css">
			<script type="text/javascript" src="/e6/classic/theme-classic/theme-classic-debug.js"></script>  -->


			<!--	<link rel="stylesheet" type="text/css" href="/e6/classic/theme-neptune/resources/theme-neptune-all.css">
			<script type="text/javascript" src="/e6/classic/theme-neptune/theme-neptune.js"></script> -->
				
				<script type="text/javascript" src="/e6/packages/ux/modern/ux.js"></script>
			
			   <script type="text/javascript" src="/e6/locale/locale-ru.js"></script>
			   
			   <script type ="text/javascript" > var rootURL="" ;  </script>
			   
			   
			   
			   <script type ="text/javascript" >
				function AfterLoad(){}
				</script>
			 <style>
				body, html {
					height: 100%;
				}
		  </style>
	</head>
	<body>
		<link rel="stylesheet" type="text/css" href="resources/css/icons.css"/>
		<script type="text/javascript" src="resources/common.js"></script>
		<script type="text/javascript" src="resources/login.js"></script>
		<script type="text/javascript" src="resources/app.js"></script>
		
		
		
		<script type="text/javascript" src="resources/models.js"></script>
		<script type="text/javascript" src="resources/enums.js"></script>
		<?php require('inc.php'); ?>
		<script type="text/javascript" src="resources/menu.js"></script>
		
		<div id="loading-mask"></div>
		<div id="loading"><span id="loading-message"></span></div>
	</body>
</html>
<?php 
	} else {
?>		 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
	<head>
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta http-equiv="content-type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
			<meta name="description" content="" />
			<title>AREAL СМС</title>
			<script type="text/javascript" src="/e6/ext-all.js"></script> 
			

			<script type="text/javascript" src="resources/exporter/Base64.js"></script>
			<script type="text/javascript" src="resources/exporter/Cell.js"></script>
			<script type="text/javascript" src="resources/exporter/Style.js"></script>
			<script type="text/javascript" src="resources/exporter/Worksheet.js"></script>
			<script type="text/javascript" src="resources/exporter/Workbook.js"></script>

			
				
		    <!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-triton/resources/theme-triton-all.css"/>
			<script type="text/javascript" src="/e6/classic/theme-triton/theme-triton-debug.js"></script> -->
			
			<link rel="stylesheet" type="text/css" href="/e6/classic/theme-aria/resources/theme-aria-all.css">
			<script type="text/javascript" src="/e6/classic/theme-aria/theme-aria.js"></script>  
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-neptune-touch/resources/theme-neptune-touch-all.css">
			<script type="text/javascript" src="/e6/classic/theme-neptune-touch/theme-neptune-touch-debug.js"></script>  -->
			
			
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-crisp-touch/resources/theme-crisp-touch-all.css">
			<script type="text/javascript" src="/e6/classic/theme-crisp-touch/theme-crisp-touch-debug.js"></script>  -->
			
			
			
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-neptune/resources/theme-neptune-all.css">
			<script type="text/javascript" src="/e6/classic/theme-neptune/theme-neptune-debug.js"></script>  -->
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-aria/resources/theme-aria-all.css">
			<script type="text/javascript" src="/e6/classic/theme-aria/theme-aria-debug.js"></script>  -->
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-crisp/resources/theme-crisp-all.css">
			<script type="text/javascript" src="/e6/classic/theme-crisp/theme-crisp-debug.js"></script>  -->
			
				
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-gray/resources/theme-gray-all.css">
			<script type="text/javascript" src="/e6/classic/theme-gray/theme-gray-debug.js"></script>  -->
			
			
			<!-- <link rel="stylesheet" type="text/css" href="/e6/classic/theme-classic/resources/theme-classic-all.css">
			<script type="text/javascript" src="/e6/classic/theme-classic/theme-classic-debug.js"></script>  -->

	        <script type="text/javascript" src="/e6/packages/ux/modern/ux.js"></script>
			
			<script type="text/javascript" src="/e6/locale/locale-ru.js"></script>
				
			   
			   <script type ="text/javascript" > var rootURL="" ;  </script>
			   
			   
			   
			   <script type ="text/javascript" >
				function AfterLoad(){}
				</script>
			 <style>
				body, html {
					height: 100%;
				}
		  </style>
	</head>
	<body>
		<link rel="stylesheet" type="text/css" href="resources/css/icons.css"/>
		<script type="text/javascript" src="resources/common.js"></script>
		<script type="text/javascript" src="resources/app.js"></script>
		
	
		<script type="text/javascript" src="resources/models.js"></script>
		<script type="text/javascript" src="resources/enums.js"></script>
			<?php require('inc.php'); ?>
		<script type="text/javascript" src="resources/menu.js"></script>
		<script type="text/javascript" src="resources/logged.js"></script>
		<div id="loading-mask"></div>
		<div id="loading"><span id="loading-message"></span></div>
	</body>
</html>
<?php 
	}
?>