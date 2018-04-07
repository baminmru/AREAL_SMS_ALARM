<?php
	 class C_arlog_data extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function setRow() {
          log_message('debug', 'arlog_data.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'arlog_data.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'arlog_dataid' =>  $this->input->get_post('arlog_dataid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'sms' =>   $this->input->get_post('sms', TRUE)
                ,'chanel' =>   $this->input->get_post('chanel', TRUE)
                ,'sendtime' =>   $this->input->get_post('sendtime', TRUE)
                ,'sendresult' =>   $this->input->get_post('sendresult', TRUE)
                ,'trynumber' =>   $this->input->get_post('trynumber', TRUE)
                ,'finished' =>   $this->input->get_post('finished', TRUE)
            );
            $arlog_data = $this->m_arlog_data->setRow($data);
            print json_encode($arlog_data);
    }
    function newRow() {
            log_message('debug', 'arlog_data.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'arlog_dataid' =>  $this->input->get_post('arlog_dataid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'sms' =>   $this->input->get_post('sms', TRUE)
                ,'chanel' =>   $this->input->get_post('chanel', TRUE)
                ,'sendtime' =>   $this->input->get_post('sendtime', TRUE)
                ,'sendresult' =>   $this->input->get_post('sendresult', TRUE)
                ,'trynumber' =>   $this->input->get_post('trynumber', TRUE)
                ,'finished' =>   $this->input->get_post('finished', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
            $arlog_data= $this->m_arlog_data->newRow($instanceid,$data);
            $return = $arlog_data;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'arlog_data.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $arlog_data = $this->m_arlog_data->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $arlog_data
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
            	$sort[] = array('property'=>'sms', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
            $instanceid=$this->input->get('instanceid', FALSE);
            if(isset($instanceid)){
                if($instanceid!=''){
                    $arlog_data= $this->m_arlog_data->getRowsByInstance($instanceid,$sort);
                }else{
                    $arlog_data= $this->m_arlog_data->getRows($sort);
                }
            }else{
              $arlog_data= $this->m_arlog_data->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arlog_data
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'arlog_data.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'sms', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $InstId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($InstId) > 0) {
            $arlog_data= $this->m_arlog_data->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arlog_data
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
        log_message('debug', 'arlog_data.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'sms', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $ParentId  =  $this->input->get_post('parentid', TRUE);
        if (strlen($ParentId) > 0) {
            $arlog_data= $this->m_arlog_data->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $arlog_data
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
        log_message('debug', 'arlog_data.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('arlog_dataid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_arlog_data->deleteRow($tempId);
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
        $this->load->model('M_arlog_data', 'm_arlog_data');
    }
}
?>