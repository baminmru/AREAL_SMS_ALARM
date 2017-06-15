<?php
	 class C_arc_info extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function setRow() {
          log_message('debug', 'arc_info.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'arc_info.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'arc_infoid' =>  $this->input->get_post('arc_infoid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'family' =>   $this->input->get_post('family', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
                ,'org' =>   $this->input->get_post('org', TRUE)
                ,'phone' =>   $this->input->get_post('phone', TRUE)
                ,'email' =>   $this->input->get_post('email', TRUE)
                ,'login' =>   $this->input->get_post('login', TRUE)
            );
            $arc_info = $this->m_arc_info->setRow($data);
            print json_encode($arc_info);
    }
    function newRow() {
            log_message('debug', 'arc_info.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'arc_infoid' =>  $this->input->get_post('arc_infoid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'family' =>   $this->input->get_post('family', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
                ,'org' =>   $this->input->get_post('org', TRUE)
                ,'phone' =>   $this->input->get_post('phone', TRUE)
                ,'email' =>   $this->input->get_post('email', TRUE)
                ,'login' =>   $this->input->get_post('login', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
            $arc_info= $this->m_arc_info->newRow($instanceid,$data);
            $return = $arc_info;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'arc_info.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $arc_info = $this->m_arc_info->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $arc_info
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
            	$sort[] = array('property'=>'family', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
            $instanceid=$this->input->get('instanceid', FALSE);
            if(isset($instanceid)){
                if($instanceid!=''){
                    $arc_info= $this->m_arc_info->getRowsByInstance($instanceid,$sort);
                }else{
                    $arc_info= $this->m_arc_info->getRows($sort);
                }
            }else{
              $arc_info= $this->m_arc_info->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arc_info
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'arc_info.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'family', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $InstId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($InstId) > 0) {
            $arc_info= $this->m_arc_info->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arc_info
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
        log_message('debug', 'arc_info.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'family', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $ParentId  =  $this->input->get_post('parentid', TRUE);
        if (strlen($ParentId) > 0) {
            $arc_info= $this->m_arc_info->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $arc_info
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
        log_message('debug', 'arc_info.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('arc_infoid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_arc_info->deleteRow($tempId);
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
        $this->load->model('M_arc_info', 'm_arc_info');
    }
}
?>