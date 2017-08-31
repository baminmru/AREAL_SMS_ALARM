<?php
	 class C_armd_info extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function setRow() {
          log_message('debug', 'armd_info.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'armd_info.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'armd_infoid' =>  $this->input->get_post('armd_infoid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'moduletype' =>   $this->input->get_post('moduletype', TRUE)
                ,'serialno' =>   $this->input->get_post('serialno', TRUE)
                ,'makedate' =>   $this->input->get_post('makedate', TRUE)
                ,'phone' =>   $this->input->get_post('phone', TRUE)
                ,'roof_no' =>   $this->input->get_post('roof_no', TRUE)
                ,'pop_no' =>   $this->input->get_post('pop_no', TRUE)
                ,'power_no' =>   $this->input->get_post('power_no', TRUE)
            );
            $armd_info = $this->m_armd_info->setRow($data);
            print json_encode($armd_info);
    }
    function newRow() {
            log_message('debug', 'armd_info.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'armd_infoid' =>  $this->input->get_post('armd_infoid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'moduletype' =>   $this->input->get_post('moduletype', TRUE)
                ,'serialno' =>   $this->input->get_post('serialno', TRUE)
                ,'makedate' =>   $this->input->get_post('makedate', TRUE)
                ,'phone' =>   $this->input->get_post('phone', TRUE)
                ,'roof_no' =>   $this->input->get_post('roof_no', TRUE)
                ,'pop_no' =>   $this->input->get_post('pop_no', TRUE)
                ,'power_no' =>   $this->input->get_post('power_no', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
            $armd_info= $this->m_armd_info->newRow($instanceid,$data);
            $return = $armd_info;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'armd_info.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $armd_info = $this->m_armd_info->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $armd_info
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
            	$sort[] = array('property'=>'moduletype', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
            $instanceid=$this->input->get('instanceid', FALSE);
            if(isset($instanceid)){
                if($instanceid!=''){
                    $armd_info= $this->m_armd_info->getRowsByInstance($instanceid,$sort);
                }else{
                    $armd_info= $this->m_armd_info->getRows($sort);
                }
            }else{
              $armd_info= $this->m_armd_info->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $armd_info
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'armd_info.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'moduletype', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $InstId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($InstId) > 0) {
            $armd_info= $this->m_armd_info->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $armd_info
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
        log_message('debug', 'armd_info.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'moduletype', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $ParentId  =  $this->input->get_post('parentid', TRUE);
        if (strlen($ParentId) > 0) {
            $armd_info= $this->m_armd_info->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $armd_info
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
        log_message('debug', 'armd_info.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('armd_infoid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_armd_info->deleteRow($tempId);
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
        $this->load->model('M_armd_info', 'm_armd_info');
    }
}
?>