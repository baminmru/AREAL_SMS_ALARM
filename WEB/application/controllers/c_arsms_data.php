<?php
	 class C_arsms_data extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function setRow() {
          log_message('debug', 'arsms_data.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'arsms_data.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'arsms_dataid' =>  $this->input->get_post('arsms_dataid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'smstime' =>   $this->input->get_post('smstime', TRUE)
                ,'phone' =>   $this->input->get_post('phone', TRUE)
                ,'serialno' =>   $this->input->get_post('serialno', TRUE)
                ,'opercode' =>   $this->input->get_post('opercode', TRUE)
                ,'controlcode' =>   $this->input->get_post('controlcode', TRUE)
                ,'temperature' =>   $this->input->get_post('temperature', TRUE)
                ,'pop_ok' =>   $this->input->get_post('pop_ok', TRUE)
                ,'roof_open' =>   $this->input->get_post('roof_open', TRUE)
                ,'power_ok' =>   $this->input->get_post('power_ok', TRUE)
            );
            $arsms_data = $this->m_arsms_data->setRow($data);
            print json_encode($arsms_data);
    }
    function newRow() {
            log_message('debug', 'arsms_data.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'arsms_dataid' =>  $this->input->get_post('arsms_dataid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'smstime' =>   $this->input->get_post('smstime', TRUE)
                ,'phone' =>   $this->input->get_post('phone', TRUE)
                ,'serialno' =>   $this->input->get_post('serialno', TRUE)
                ,'opercode' =>   $this->input->get_post('opercode', TRUE)
                ,'controlcode' =>   $this->input->get_post('controlcode', TRUE)
                ,'temperature' =>   $this->input->get_post('temperature', TRUE)
                ,'pop_ok' =>   $this->input->get_post('pop_ok', TRUE)
                ,'roof_open' =>   $this->input->get_post('roof_open', TRUE)
                ,'power_ok' =>   $this->input->get_post('power_ok', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
            $arsms_data= $this->m_arsms_data->newRow($instanceid,$data);
            $return = $arsms_data;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'arsms_data.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $arsms_data = $this->m_arsms_data->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $arsms_data
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
            	$sort[] = array('property'=>'smstime', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
            $instanceid=$this->input->get('instanceid', FALSE);
            if(isset($instanceid)){
                if($instanceid!=''){
                    $arsms_data= $this->m_arsms_data->getRowsByInstance($instanceid,$sort);
                }else{
                    $arsms_data= $this->m_arsms_data->getRows($sort);
                }
            }else{
              $arsms_data= $this->m_arsms_data->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arsms_data
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'arsms_data.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'smstime', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $InstId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($InstId) > 0) {
            $arsms_data= $this->m_arsms_data->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arsms_data
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
        log_message('debug', 'arsms_data.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'smstime', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $ParentId  =  $this->input->get_post('parentid', TRUE);
        if (strlen($ParentId) > 0) {
            $arsms_data= $this->m_arsms_data->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $arsms_data
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
        log_message('debug', 'arsms_data.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('arsms_dataid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_arsms_data->deleteRow($tempId);
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
        $this->load->model('M_arsms_data', 'm_arsms_data');
    }
}
?>