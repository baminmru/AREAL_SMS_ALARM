
<?php
class  M_arlog_data extends CI_Model {
    function getRow($empId) {
    $result = array('success' => false, 'msg' => 'No Row ID for retrive data');
	if (!empty($empId)){
	    $res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(arlog_dataid) as arlog_dataid, B2G(arlog_dataid) as id,B2G(instanceid) as instanceid, arlog_data_BRIEF_F(arlog_dataid , NULL) as  brief,sendresult,B2G(chanel) chanel, arc_chanel_BRIEF_F(chanel, NULL) as chanel_grid,B2G(sms) sms, arsms_data_BRIEF_F(sms, NULL) as sms_grid,finished, case finished  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as finished_grid,trynumber,  DATE_FORMAT(sendtime,\'%Y-%m-%d %H:%i:%s\') as  sendtime', 'PartName' => 'arlog_data', 'ID' =>  $empId 	));
	    if (!empty($res)) {
	        $result = $res[0];
	    }
	}
	return $result;
    }
    function setRow($data)  {
	    $data = (array)$data;
	if (!empty($data)) {
	    if (empty($data['arlog_dataid'])) {
	        $data['arlog_dataid'] = $this->jservice->get(array('Action' => 'NewGuid'));
	        $res=$this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arlog_data', 'RowID' => $data['arlog_dataid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }else{
	    $res = $this->jservice->get(array('Action' => 'UpdateRow', 'PartName' => 'arlog_data', 'RowID' => $data['arlog_dataid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }
	    return array('success' => TRUE, 'data' => $this->getRow($data['arlog_dataid'] ));
	} else {
	    return array('success' => FALSE, 'msg' => 'No data to store on server');
	}
    }
    function newRow($instanceid,$data)  {
	  $id = $this->jservice->get(array('Action' => 'NewGuid'));
	if ($this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arlog_data', 'RowID' => $id, 'DocumentID' => $instanceid, 'Values'=>$data)) == 'OK') {
	    return array('success' => TRUE, 'data' => $id);
	} else {
	    return array('success' => FALSE, 'msg' => 'Error while create new id');
	}
    }
    function getRows($sort=array())
		{
	    $res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arlog_dataid) as arlog_dataid, B2G(arlog_dataid) as id,B2G(instanceid) as instanceid, arlog_data_BRIEF_F(arlog_dataid , NULL) as  brief,sendresult,B2G(chanel) chanel, arc_chanel_BRIEF_F(chanel, NULL) as chanel_grid,B2G(sms) sms, arsms_data_BRIEF_F(sms, NULL) as sms_grid,finished, case finished  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as finished_grid,trynumber,  DATE_FORMAT(sendtime,\'%Y-%m-%d %H:%i:%s\') as  sendtime', 'ViewName' => 'arlog_data'));
	    if (count($res)) {
	        return $res;
	    } else {
	        return array();
	    }
		}
    function getRowsByInstance($id,$sort=array())
		{
	$res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arlog_dataid) as arlog_dataid, B2G(arlog_dataid) as id,B2G(instanceid) as instanceid, arlog_data_BRIEF_F(arlog_dataid , NULL) as  brief,sendresult,B2G(chanel) chanel, arc_chanel_BRIEF_F(chanel, NULL) as chanel_grid,B2G(sms) sms, arsms_data_BRIEF_F(sms, NULL) as sms_grid,finished, case finished  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as finished_grid,trynumber,  DATE_FORMAT(sendtime,\'%Y-%m-%d %H:%i:%s\') as  sendtime', 'ViewName' => 'arlog_data', 'WhereClause' => 'instanceid=G2B(\''. $id . '\')'));
	if (count($res) == 0) {
	    return array();
	} else {
	    return $res;
	}
		}
    function deleteRow($id = null) {
	  if (!empty($id) && $this->jservice->get(array('Action' => 'DeleteRow', 'PartName' => 'arlog_data', 'RowID' => $id)) == 'OK')
	    $result = array('success' => TRUE);
	else
	    $result = array('success' => FALSE, 'msg' => 'Error while deleting record!');
	return $result;
    }
}
?>