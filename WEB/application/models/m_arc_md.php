
<?php
class  M_arc_md extends CI_Model {
    function getRow($empId) {
    $result = array('success' => false, 'msg' => 'No Row ID for retrive data');
	if (!empty($empId)){
	    $res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(arc_mdid) as arc_mdid, B2G(arc_mdid) as id,B2G(instanceid) as instanceid, arc_md_BRIEF_F(arc_mdid , NULL) as  brief,B2G(mymodule) mymodule, armd_info_BRIEF_F(mymodule, NULL) as mymodule_grid,moduleserial,name,deivetype,theaddress,master_fio,roof_no, case roof_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as roof_no_grid,pop_no, case pop_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as pop_no_grid,power_no, case power_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as power_no_grid', 'PartName' => 'arc_md', 'ID' =>  $empId 	));
	    if (!empty($res)) {
	        $result = $res[0];
	    }
	}
	return $result;
    }
    function setRow($data)  {
	    $data = (array)$data;
	if (!empty($data)) {
	    if (empty($data['arc_mdid'])) {
	        $data['arc_mdid'] = $this->jservice->get(array('Action' => 'NewGuid'));
	        $res=$this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arc_md', 'RowID' => $data['arc_mdid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }else{
	    $res = $this->jservice->get(array('Action' => 'UpdateRow', 'PartName' => 'arc_md', 'RowID' => $data['arc_mdid'], 'DocumentID' => $data['instanceid'], 'Values'=>$data));
	       if(isset($res[0])){
	       	if($res[0]->result!='ok'){
	       		return array('success' => FALSE, 'msg' => $res[0]->result);
	       	} 
	       }else{
	       	return array('success' => FALSE, 'msg' => 'Unknown error' );
	       }
	    }
	    return array('success' => TRUE, 'data' => $this->getRow($data['arc_mdid'] ));
	} else {
	    return array('success' => FALSE, 'msg' => 'No data to store on server');
	}
    }
    function newRow($instanceid,$data)  {
	  $id = $this->jservice->get(array('Action' => 'NewGuid'));
	if ($this->jservice->get(array('Action' => 'NewRow', 'PartName' => 'arc_md', 'RowID' => $id, 'DocumentID' => $instanceid, 'Values'=>$data)) == 'OK') {
	    return array('success' => TRUE, 'data' => $id);
	} else {
	    return array('success' => FALSE, 'msg' => 'Error while create new id');
	}
    }
    function getRows($sort=array())
		{
	    $res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arc_mdid) as arc_mdid, B2G(arc_mdid) as id,B2G(instanceid) as instanceid, arc_md_BRIEF_F(arc_mdid , NULL) as  brief,B2G(mymodule) mymodule, armd_info_BRIEF_F(mymodule, NULL) as mymodule_grid,moduleserial,name,deivetype,theaddress,master_fio,roof_no, case roof_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as roof_no_grid,pop_no, case pop_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as pop_no_grid,power_no, case power_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as power_no_grid', 'ViewName' => 'arc_md'));
	    if (count($res)) {
	        return $res;
	    } else {
	        return array();
	    }
		}
    function getRowsByInstance($id,$sort=array())
		{
	$res = $this->jservice->get(array('Action' => 'GetViewData','Sort'=>$sort,'FieldList'=>'B2G(arc_mdid) as arc_mdid, B2G(arc_mdid) as id,B2G(instanceid) as instanceid, arc_md_BRIEF_F(arc_mdid , NULL) as  brief,B2G(mymodule) mymodule, armd_info_BRIEF_F(mymodule, NULL) as mymodule_grid,moduleserial,name,deivetype,theaddress,master_fio,roof_no, case roof_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as roof_no_grid,pop_no, case pop_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as pop_no_grid,power_no, case power_no  when -1 then \'Да\' when 0 then \'Нет\' else \'\'  end   as power_no_grid', 'ViewName' => 'arc_md', 'WhereClause' => 'instanceid=G2B(\''. $id . '\')'));
	if (count($res) == 0) {
	    return array();
	} else {
	    return $res;
	}
		}
    function deleteRow($id = null) {
	  if (!empty($id) && $this->jservice->get(array('Action' => 'DeleteRow', 'PartName' => 'arc_md', 'RowID' => $id)) == 'OK')
	    $result = array('success' => TRUE);
	else
	    $result = array('success' => FALSE, 'msg' => 'Error while deleting record!');
	return $result;
    }
	
	
	function SendIt($to,$id){
	 $to=str_replace('+', '', $to);
	 $to=str_replace(' ', '', $to);
	 $sms ="To:".$to."\r\nVoicecall:true\r\n\r\nTONE: TIME: 15 2\r\n";
		file_put_contents('/var/spool/sms/outgoing/'.$id.'_'.$to.'_voice.txt', $sms);
		return true;
	}
	
	
	function VCall($empId) {
    $result = array('success' => false, 'msg' => 'No Row ID for VCall');
	
	if (!empty($empId)){
	    $res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(mymodule) mymodule', 'PartName' => 'arc_md', 'ID' =>  $empId 	));
	    if (!empty($res)) {
	        $mid = $res[0]->mymodule;
			$res = $this->jservice->get(array('Action' => 'GetRowData','FieldList'=>'B2G(armd_infoid) as id,  phone', 'PartName' => 'armd_info', 'ID' =>  $mid 	));
			if (!empty($res)) {
					$id=$res[0]->id;
					$to=$res[0]->phone;
					$this->SendIt($to,$id);
					$result = array('success' => TRUE);
					
			}else{
				$result = array('success' => false, 'msg' => 'Wrong Module ID for VCall');
			}
	    }else{
			$result = array('success' => false, 'msg' => 'Wrong Row ID for VCall');
		}
	}
	return $result;
    }
}
?>