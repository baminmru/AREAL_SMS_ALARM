
<?php
class  M_arsms_data extends CI_Model {
    function getRow($empId) {
    $result = array('success' => false, 'msg' => 'No Row ID for retrive data');
	if (!empty($empId)){
	    $res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(arsms_dataid) as arsms_dataid, B2G(arsms_dataid) as id,B2G(instanceid) as instanceid, arsms_data_BRIEF_F(arsms_dataid , NULL) as  brief,  DATE_FORMAT(smstime,\'%Y-%m-%d %H:%i:%s\') as  smstime,phone,serialno,opercode,controlcode,temperature,pop_ok, case pop_ok  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as pop_ok_grid,roof_open, case roof_open  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as roof_open_grid,power_ok, case power_ok  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as power_ok_grid', 'PartName' => 'arsms_data', 'ID' =>  $empId 	));
	    if (!empty($res)) {
	        $result = $res[0];
	    }
	}
	return $result;
    }
    function setRow($data)  {
	    $data = (array)$data;
	if (!empty($data)) {
	    if (empty($data['arsms_dataid'])) {
	        $data['arsms_dataid'] = $this->jservice->get(array('Action' => 'NewGuid'));
	        $res=$this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arsms_data', 'RowID' => $data['arsms_dataid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }else{
	    $res = $this->jservice->get(array('Action' => 'UpdateRow', 'PartName' => 'arsms_data', 'RowID' => $data['arsms_dataid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }
	    return array('success' => TRUE, 'data' => $this->getRow($data['arsms_dataid'] ));
	} else {
	    return array('success' => FALSE, 'msg' => 'No data to store on server');
	}
    }
    function newRow($instanceid,$data)  {
	  $id = $this->jservice->get(array('Action' => 'NewGuid'));
	if ($this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arsms_data', 'RowID' => $id, 'DocumentID' => $instanceid, 'Values'=>$data)) == 'OK') {
	    return array('success' => TRUE, 'data' => $id);
	} else {
	    return array('success' => FALSE, 'msg' => 'Error while create new id');
	}
    }
    function getRows($sort=array())
		{
	    $res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arsms_dataid) as arsms_dataid, B2G(arsms_dataid) as id,B2G(instanceid) as instanceid, arsms_data_BRIEF_F(arsms_dataid , NULL) as  brief,  DATE_FORMAT(smstime,\'%Y-%m-%d %H:%i:%s\') as  smstime,phone,serialno,opercode,controlcode,temperature,pop_ok, case pop_ok  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as pop_ok_grid,roof_open, case roof_open  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as roof_open_grid,power_ok, case power_ok  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as power_ok_grid', 'ViewName' => 'arsms_data'));
	    if (count($res)) {
	        return $res;
	    } else {
	        return array();
	    }
		}
    function getRowsByInstance($id,$sort=array())
		{
	$res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arsms_dataid) as arsms_dataid, B2G(arsms_dataid) as id,B2G(instanceid) as instanceid, arsms_data_BRIEF_F(arsms_dataid , NULL) as  brief,  DATE_FORMAT(smstime,\'%Y-%m-%d %H:%i:%s\') as  smstime,phone,serialno,opercode,controlcode,temperature,pop_ok, case pop_ok  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as pop_ok_grid,roof_open, case roof_open  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as roof_open_grid,power_ok, case power_ok  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as power_ok_grid', 'ViewName' => 'arsms_data', 'WhereClause' => 'instanceid=G2B(\''. $id . '\')'));
	if (count($res) == 0) {
	    return array();
	} else {
	    return $res;
	}
		}
    function deleteRow($id = null) {
	  if (!empty($id) && $this->jservice->get(array('Action' => 'DeleteRow', 'PartName' => 'arsms_data', 'RowID' => $id)) == 'OK')
	    $result = array('success' => TRUE);
	else
	    $result = array('success' => FALSE, 'msg' => 'Error while deleting record!');
	return $result;
    }
}
?>