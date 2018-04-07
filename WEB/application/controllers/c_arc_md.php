<?php
	 class C_arc_md extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
	function VCall(){
		log_message('debug', 'arc_md.VCall post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('arc_mdid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_arc_md->VCall($tempId);
        }
        else {
            $return = array(
                'success' => FALSE,
                'msg'     => 'No  ID to VCall'
            );
        }
        print json_encode($return);
	}
    function setRow() {
          log_message('debug', 'arc_md.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'arc_md.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'arc_mdid' =>  $this->input->get_post('arc_mdid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'mymodule' =>   $this->input->get_post('mymodule', TRUE)
                ,'moduleserial' =>   $this->input->get_post('moduleserial', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
                ,'deivetype' =>   $this->input->get_post('deivetype', TRUE)
                ,'theaddress' =>   $this->input->get_post('theaddress', TRUE)
                ,'master_fio' =>   $this->input->get_post('master_fio', TRUE)
                ,'roof_no' =>   $this->input->get_post('roof_no', TRUE)
                ,'pop_no' =>   $this->input->get_post('pop_no', TRUE)
                ,'power_no' =>   $this->input->get_post('power_no', TRUE)
            );
            $arc_md = $this->m_arc_md->setRow($data);
            print json_encode($arc_md);
    }
    function newRow() {
            log_message('debug', 'arc_md.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'arc_mdid' =>  $this->input->get_post('arc_mdid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'mymodule' =>   $this->input->get_post('mymodule', TRUE)
                ,'moduleserial' =>   $this->input->get_post('moduleserial', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
                ,'deivetype' =>   $this->input->get_post('deivetype', TRUE)
                ,'theaddress' =>   $this->input->get_post('theaddress', TRUE)
                ,'master_fio' =>   $this->input->get_post('master_fio', TRUE)
                ,'roof_no' =>   $this->input->get_post('roof_no', TRUE)
                ,'pop_no' =>   $this->input->get_post('pop_no', TRUE)
                ,'power_no' =>   $this->input->get_post('power_no', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
            $arc_md= $this->m_arc_md->newRow($instanceid,$data);
            $return = $arc_md;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'arc_md.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $arc_md = $this->m_arc_md->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $arc_md
            );
            print json_encode($return);
        }
    }
    function getRows() {
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'moduleserial', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
            $instanceid=$this->input->get('instanceid', FALSE);
            if(isset($instanceid)){
                if($instanceid!=''){
                    $arc_md= $this->m_arc_md->getRowsByInstance($instanceid,$sort);
                }else{
                    $arc_md= $this->m_arc_md->getRows($sort);
                }
            }else{
              $arc_md= $this->m_arc_md->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arc_md
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'arc_md.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'moduleserial', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $InstId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($InstId) > 0) {
            $arc_md= $this->m_arc_md->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arc_md
            );
        }
        else {
            $return = array(
                'success' => FALSE,
                'msg'     => 'Need instanceid to query.'
            );
        }
        print json_encode($return);
    }
    function getRowsByParent() {
        log_message('debug', 'arc_md.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'moduleserial', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $ParentId  =  $this->input->get_post('parentid', TRUE);
        if (strlen($ParentId) > 0) {
            $arc_md= $this->m_arc_md->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $arc_md
            );
        }
        else {
            $return = array(
                'success' => FALSE,
                'msg'     => 'Need parent parentid to query.'
            );
        }
        print json_encode($return);
    }
    function deleteRow() {
        log_message('debug', 'arc_md.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('arc_mdid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_arc_md->deleteRow($tempId);
        }
        else {
            $return = array(
                'success' => FALSE,
                'msg'     => 'No  ID to delete'
            );
        }
        print json_encode($return);
    }
    private function _loadModels () {
        $this->load->model('M_arc_md', 'm_arc_md');
    }
}
?>