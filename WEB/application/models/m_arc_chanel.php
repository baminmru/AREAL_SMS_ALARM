
<?php
class  M_arc_chanel extends CI_Model {
    function getRow($empId) {
    $result = array('success' => false, 'msg' => 'No Row ID for retrive data');
	if (!empty($empId)){
	    $res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(arc_chanelid) as arc_chanelid, B2G(arc_chanelid) as id,B2G(parentstructrowid) as parentid, arc_chanel_BRIEF_F(arc_chanelid , NULL) as  brief,B2G(ch_taype) ch_taype, armd_chaneltype_BRIEF_F(ch_taype, NULL) as ch_taype_grid,ch_param,ch_on, case ch_on  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as ch_on_grid,msg_crash, case msg_crash  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_crash_grid,msg_current, case msg_current  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_current_grid,chanelname,chanelcomment', 'PartName' => 'arc_chanel', 'ID' =>  $empId 	));
	    if (!empty($res)) {
	        $result = $res[0];
	    }
	}
	return $result;
    }
    function setRow($data)  {
	    $data = (array)$data;
	if (!empty($data)) {
	    if (empty($data['arc_chanelid'])) {
	        $data['arc_chanelid'] = $this->jservice->get(array('Action' => 'NewGuid'));
	        $res=$this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arc_chanel', 'RowID' => $data['arc_chanelid'], 'DocumentID' => $data['instanceid'],'ParentID' => $data['parentid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }else{
	    $res = $this->jservice->get(array('Action' => 'UpdateRow', 'PartName' => 'arc_chanel', 'RowID' => $data['arc_chanelid'], 'DocumentID' => $data['instanceid'],'ParentID' => $data['parentid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }
	    return array('success' => TRUE, 'data' => $this->getRow($data['arc_chanelid'] ));
	} else {
	    return array('success' => FALSE, 'msg' => 'No data to store on server');
	}
    }
    function newRow($instanceid,$parentid,$data)  {
	  $id = $this->jservice->get(array('Action' => 'NewGuid'));
	if ($this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arc_chanel', 'RowID' => $id, 'DocumentID' => $instanceid,'ParentID'=>$parentid, 'Values'=>$data)) == 'OK') {
	    return array('success' => TRUE, 'data' => $id);
	} else {
	    return array('success' => FALSE, 'msg' => 'Error while create new id');
	}
    }
    function getRows($sort=array())
		{
	    $res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arc_chanelid) as arc_chanelid, B2G(arc_chanelid) as id,B2G(parentstructrowid) as parentid, arc_chanel_BRIEF_F(arc_chanelid , NULL) as  brief,B2G(ch_taype) ch_taype, armd_chaneltype_BRIEF_F(ch_taype, NULL) as ch_taype_grid,ch_param,ch_on, case ch_on  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as ch_on_grid,msg_crash, case msg_crash  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_crash_grid,msg_current, case msg_current  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_current_grid,chanelname,chanelcomment', 'ViewName' => 'arc_chanel'));
	    if (count($res)) {
	        return $res;
	    } else {
	        return array();
	    }
		}
    function getRowsByInstance($id,$sort=array())
		{
	$res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arc_chanelid) as arc_chanelid, B2G(arc_chanelid) as id,B2G(parentstructrowid) as parentid, arc_chanel_BRIEF_F(arc_chanelid , NULL) as  brief,B2G(ch_taype) ch_taype, armd_chaneltype_BRIEF_F(ch_taype, NULL) as ch_taype_grid,ch_param,ch_on, case ch_on  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as ch_on_grid,msg_crash, case msg_crash  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_crash_grid,msg_current, case msg_current  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_current_grid,chanelname,chanelcomment', 'ViewName' => 'arc_chanel', 'WhereClause' => 'instanceid=G2B(\''. $id . '\')'));
	if (count($res) == 0) {
	    return array();
	} else {
	    return $res;
	}
		}
    function getRowsByParent($id,$sort=array())
	{
	$res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arc_chanelid) as arc_chanelid, B2G(arc_chanelid) as id,B2G(parentstructrowid) as parentid, arc_chanel_BRIEF_F(arc_chanelid , NULL) as  brief,B2G(ch_taype) ch_taype, armd_chaneltype_BRIEF_F(ch_taype, NULL) as ch_taype_grid,ch_param,ch_on, case ch_on  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as ch_on_grid,msg_crash, case msg_crash  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_crash_grid,msg_current, case msg_current  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as msg_current_grid,chanelname,chanelcomment', 'ViewName' => 'arc_chanel', 'WhereClause' => ' parentstructrowid=G2B(\''. $id . '\')'));
	if (count($res) == 0) {
	    return array();
	} else {
	    return $res;
	}
  }
    function deleteRow($id = null) {
	  if (!empty($id) && $this->jservice->get(array('Action' => 'DeleteRow', 'PartName' => 'arc_chanel', 'RowID' => $id)) == 'OK')
	    $result = array('success' => TRUE);
	else
	    $result = array('success' => FALSE, 'msg' => 'Error while deleting record!');
	return $result;
    }
}
?>