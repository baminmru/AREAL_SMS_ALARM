<?php
	 class C_armd_type extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function setRow() {
          log_message('debug', 'armd_type.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'armd_type.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'armd_typeid' =>  $this->input->get_post('armd_typeid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
            );
            $armd_type = $this->m_armd_type->setRow($data);
            print json_encode($armd_type);
    }
    function newRow() {
            log_message('debug', 'armd_type.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'armd_typeid' =>  $this->input->get_post('armd_typeid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
            $armd_type= $this->m_armd_type->newRow($instanceid,$data);
            $return = $armd_type;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'armd_type.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $armd_type = $this->m_armd_type->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $armd_type
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
            	$sort[] = array('property'=>'name', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
            $instanceid=$this->input->get('instanceid', FALSE);
            if(isset($instanceid)){
                if($instanceid!=''){
                    $armd_type= $this->m_armd_type->getRowsByInstance($instanceid,$sort);
                }else{
                    $armd_type= $this->m_armd_type->getRows($sort);
                }
            }else{
              $armd_type= $this->m_armd_type->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $armd_type
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'armd_type.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'name', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $InstId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($InstId) > 0) {
            $armd_type= $this->m_armd_type->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $armd_type
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
        log_message('debug', 'armd_type.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'name', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $ParentId  =  $this->input->get_post('parentid', TRUE);
        if (strlen($ParentId) > 0) {
            $armd_type= $this->m_armd_type->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $armd_type
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
        log_message('debug', 'armd_type.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('armd_typeid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_armd_type->deleteRow($tempId);
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
        $this->load->model('M_armd_type', 'm_armd_type');
    }
}
?>