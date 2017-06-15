
<?php
class  M_v_autoarsms_data extends CI_Model {
    public function  __construct()
    {
         parent::__construct();
    }
    function newRow($objtype,$name)  {
               $id = $this->jservice->get(array('Action'=>'NewGuid'));
               $this->jservice->get(array('Action'=>'NewDocument', 'TypeName'=>'arsms', 'DocumentID'=>$id, 'DocumentCaption'=>$name));
               $rowid = $this->jservice->get(array('Action'=>'NewGuid'));
               $this->jservice->get(array('Action'=>'NewRow', 'PartName'=>'arsms_data', 'RowID'=>$rowid, 'DocumentID'=>$id));
                if ($id) {
                    return array('success'=>TRUE, 'data' => $id, 'rowid'=>$rowid);
                }
                else {
                    $return= array('success'=>FALSE, 'msg' => 'Error while create new id');
				    return $return;
                }
    }
      function getRowsSL($offset,$limit, $sort = array(), $filter = null){
        $filter = (array)json_decode($filter);
       	$cond ='';
        $whereclause = '';
    try{
	    foreach($filter as $obj) {
		    $tmp = json_decode($obj->value);
		    if(is_array($tmp)) $obj->value = $tmp;	
		    switch($obj->property) {
			    //case 'value':
			    	//$cond = '';
			    	//break;
			  case 'clientid':
			  $cond = "getclientsms('".$obj->value."',id)=1";	
			  break;			  
			  case 'arsms_data_temperature_le':
			  $cond = 'arsms_data_temperature<='.$obj->value;
			  break;
			  case 'arsms_data_temperature_ge':
			  $cond = 'arsms_data_temperature>='.$obj->value;
			  break;
			  case 'arsms_data_smstime_le':
			  $cond = 'arsms_data_smstime<="'.$obj->value.'"';
			  break;
			  case 'arsms_data_smstime_ge':
			  $cond = 'arsms_data_smstime>="'.$obj->value.'"';
			  break;
		    	default:
			    	if(isset($obj->value))
			    	{
			    		if(is_array($obj->value))
				    	{
				    		$cond = $obj->property . ' IN ("' . implode('", "',$obj->value).'") ';
				    		//echo $cond;
					    }else
					    {
					    	$cond = $obj->property . ' LIKE "%' . $obj->value . '%"';
					    }
				    }else{
				        $cond='1=1';
				    }
		    }
		    $whereclause .= (empty($whereclause)) ? $cond : ' AND ' . $cond;
	    }
    }catch(Exception $e) {
	    log_message('error','Exception: '. $e->getMessage());
    }
	 if (isset($offset) && isset($limit)) {
	    $res = $this->jservice->get(array('Action' => 'GetViewData', 'ViewName' => 'v_autoarsms_data','FieldList'=>'instanceid,id,arsms_data_serialno,arsms_data_power_ok,arsms_data_controlcode,arsms_data_opercode,arsms_data_temperature,arsms_data_roof_open,arsms_data_pop_ok,DATE_FORMAT(arsms_data_smstime,\'%Y-%m-%d %H:%i:%s\') arsms_data_smstime,arsms_data_phone','Sort'=>$sort, 'WhereClause' => $whereclause,'Limit'=>$limit,'Offset'=>$offset));
	} else {
	    $res = $this->jservice->get(array('Action' => 'GetViewData', 'ViewName' => 'v_autoarsms_data','FieldList'=>'instanceid,id,arsms_data_serialno,arsms_data_power_ok,arsms_data_controlcode,arsms_data_opercode,arsms_data_temperature,arsms_data_roof_open,arsms_data_pop_ok,DATE_FORMAT(arsms_data_smstime,\'%Y-%m-%d %H:%i:%s\') arsms_data_smstime,arsms_data_phone','Sort'=>$sort, 'WhereClause' => $whereclause));
	}
	$root = new stdClass();
	$root->total = $this->jservice->get(array('Action' => 'CountView', 'ViewName' => 'v_autoarsms_data','FieldList'=>'instanceid,id,arsms_data_serialno,arsms_data_power_ok,arsms_data_controlcode,arsms_data_opercode,arsms_data_temperature,arsms_data_roof_open,arsms_data_pop_ok,DATE_FORMAT(arsms_data_smstime,\'%Y-%m-%d %H:%i:%s\') arsms_data_smstime,arsms_data_phone', 'WhereClause' => $whereclause));
	$root->success = true;
	$root->rows = $res;
	return $root;
}
    function deleteRow($id = null) {
	    $this->jservice->get(array('Action'=>'DeleteDocument', 'TypeName'=>'arsms', 'DocumentID'=>$id));
	    $return = array('success' => true);
	    return $return;
    }
}
?>