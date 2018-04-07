
<?php
class  M_arc_info extends CI_Model {
    function getRow($empId) {
    $result = array('success' => false, 'msg' => 'No Row ID for retrive data');
	if (!empty($empId)){
	    $res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(arc_infoid) as arc_infoid, B2G(arc_infoid) as id,B2G(instanceid) as instanceid, arc_info_BRIEF_F(arc_infoid , NULL) as  brief,family,name,org,phone,email,login,isadmin, case isadmin  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as isadmin_grid', 'PartName' => 'arc_info', 'ID' =>  $empId 	));
	    if (!empty($res)) {
	        $result = $res[0];
	    }
	}
	return $result;
    }
    function setRow($data)  {
	    $data = (array)$data;
	if (!empty($data)) {
	    if (empty($data['arc_infoid'])) {
	        $data['arc_infoid'] = $this->jservice->get(array('Action' => 'NewGuid'));
	        $res=$this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arc_info', 'RowID' => $data['arc_infoid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }else{
	    $res = $this->jservice->get(array('Action' => 'UpdateRow', 'PartName' => 'arc_info', 'RowID' => $data['arc_infoid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }
	    return array('success' => TRUE, 'data' => $this->getRow($data['arc_infoid'] ));
	} else {
	    return array('success' => FALSE, 'msg' => 'No data to store on server');
	}
    }
    function newRow($instanceid,$data)  {
	  $id = $this->jservice->get(array('Action' => 'NewGuid'));
	if ($this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arc_info', 'RowID' => $id, 'DocumentID' => $instanceid, 'Values'=>$data)) == 'OK') {
	    return array('success' => TRUE, 'data' => $id);
	} else {
	    return array('success' => FALSE, 'msg' => 'Error while create new id');
	}
    }
    function getRows($sort=array())
		{
	    $res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arc_infoid) as arc_infoid, B2G(arc_infoid) as id,B2G(instanceid) as instanceid, arc_info_BRIEF_F(arc_infoid , NULL) as  brief,family,name,org,phone,email,login,isadmin, case isadmin  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as isadmin_grid', 'ViewName' => 'arc_info'));
	    if (count($res)) {
	        return $res;
	    } else {
	        return array();
	    }
		}
    function getRowsByInstance($id,$sort=array())
		{
	$res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arc_infoid) as arc_infoid, B2G(arc_infoid) as id,B2G(instanceid) as instanceid, arc_info_BRIEF_F(arc_infoid , NULL) as  brief,family,name,org,phone,email,login,isadmin, case isadmin  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as isadmin_grid', 'ViewName' => 'arc_info', 'WhereClause' => 'instanceid=G2B(\''. $id . '\')'));
	if (count($res) == 0) {
	    return array();
	} else {
	    return $res;
	}
		}
    function deleteRow($id = null) {
	  if (!empty($id) && $this->jservice->get(array('Action' => 'DeleteRow', 'PartName' => 'arc_info', 'RowID' => $id)) == 'OK')
	    $result = array('success' => TRUE);
	else
	    $result = array('success' => FALSE, 'msg' => 'Error while deleting record!');
	return $result;
    }
}
?>