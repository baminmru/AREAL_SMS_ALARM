
<?php
class  M_armd_info extends CI_Model {
    function getRow($empId) {
    $result = array('success' => false, 'msg' => 'No Row ID for retrive data');
	if (!empty($empId)){
	    $res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(armd_infoid) as armd_infoid, B2G(armd_infoid) as id,B2G(instanceid) as instanceid, armd_info_BRIEF_F(armd_infoid , NULL) as  brief,serialno,B2G(moduletype) moduletype, armd_type_BRIEF_F(moduletype, NULL) as moduletype_grid,phone,  DATE_FORMAT(makedate,\'%Y-%m-%d\') as  makedate', 'PartName' => 'armd_info', 'ID' =>  $empId 	));
	    if (!empty($res)) {
	        $result = $res[0];
	    }
	}
	return $result;
    }
    function setRow($data)  {
	    $data = (array)$data;
	if (!empty($data)) {
	    if (empty($data['armd_infoid'])) {
	        $data['armd_infoid'] = $this->jservice->get(array('Action' => 'NewGuid'));
	        $res=$this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'armd_info', 'RowID' => $data['armd_infoid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }else{
	    $res = $this->jservice->get(array('Action' => 'UpdateRow', 'PartName' => 'armd_info', 'RowID' => $data['armd_infoid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }
	    return array('success' => TRUE, 'data' => $this->getRow($data['armd_infoid'] ));
	} else {
	    return array('success' => FALSE, 'msg' => 'No data to store on server');
	}
    }
    function newRow($instanceid,$data)  {
	  $id = $this->jservice->get(array('Action' => 'NewGuid'));
	if ($this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'armd_info', 'RowID' => $id, 'DocumentID' => $instanceid, 'Values'=>$data)) == 'OK') {
	    return array('success' => TRUE, 'data' => $id);
	} else {
	    return array('success' => FALSE, 'msg' => 'Error while create new id');
	}
    }
    function getRows($sort=array())
		{
	    $res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(armd_infoid) as armd_infoid, B2G(armd_infoid) as id,B2G(instanceid) as instanceid, armd_info_BRIEF_F(armd_infoid , NULL) as  brief,serialno,B2G(moduletype) moduletype, armd_type_BRIEF_F(moduletype, NULL) as moduletype_grid,phone,  DATE_FORMAT(makedate,\'%Y-%m-%d\') as  makedate', 'ViewName' => 'armd_info'));
	    if (count($res)) {
	        return $res;
	    } else {
	        return null;
	    }
		}
    function getRowsByInstance($id,$sort=array())
		{
	$res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(armd_infoid) as armd_infoid, B2G(armd_infoid) as id,B2G(instanceid) as instanceid, armd_info_BRIEF_F(armd_infoid , NULL) as  brief,serialno,B2G(moduletype) moduletype, armd_type_BRIEF_F(moduletype, NULL) as moduletype_grid,phone,  DATE_FORMAT(makedate,\'%Y-%m-%d\') as  makedate', 'ViewName' => 'armd_info', 'WhereClause' => 'instanceid=G2B(\''. $id . '\')'));
	if (count($res) == 0) {
	    return null;
	} else {
	    return $res;
	}
		}
    function deleteRow($id = null) {
	  if (!empty($id) && $this->jservice->get(array('Action' => 'DeleteRow', 'PartName' => 'armd_info', 'RowID' => $id)) == 'OK')
	    $result = array('success' => TRUE);
	else
	    $result = array('success' => FALSE, 'msg' => 'Error while deleting record!');
	return $result;
    }
}
?>