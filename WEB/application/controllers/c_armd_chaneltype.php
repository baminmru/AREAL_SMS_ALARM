<?php
	 class C_armd_chaneltype extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function setRow() {
          log_message('debug', 'armd_chaneltype.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'armd_chaneltype.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'armd_chaneltypeid' =>  $this->input->get_post('armd_chaneltypeid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
            );
            $armd_chaneltype = $this->m_armd_chaneltype->setRow($data);
            print json_encode($armd_chaneltype);
    }
    function newRow() {
            log_message('debug', 'armd_chaneltype.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'armd_chaneltypeid' =>  $this->input->get_post('armd_chaneltypeid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'name' =>   $this->input->get_post('name', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
            $armd_chaneltype= $this->m_armd_chaneltype->newRow($instanceid,$data);
            $return = $armd_chaneltype;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'armd_chaneltype.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $armd_chaneltype = $this->m_armd_chaneltype->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $armd_chaneltype
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
                    $armd_chaneltype= $this->m_armd_chaneltype->getRowsByInstance($instanceid,$sort);
                }else{
                    $armd_chaneltype= $this->m_armd_chaneltype->getRows($sort);
                }
            }else{
              $armd_chaneltype= $this->m_armd_chaneltype->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $armd_chaneltype
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'armd_chaneltype.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
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
            $armd_chaneltype= $this->m_armd_chaneltype->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $armd_chaneltype
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
        log_message('debug', 'armd_chaneltype.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
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
            $armd_chaneltype= $this->m_armd_chaneltype->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $armd_chaneltype
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
        log_message('debug', 'armd_chaneltype.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('armd_chaneltypeid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_armd_chaneltype->deleteRow($tempId);
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
        $this->load->model('M_armd_chaneltype', 'm_armd_chaneltype');
    }
}
?>