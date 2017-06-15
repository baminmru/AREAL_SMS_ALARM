<?php
	 class C_arc_chanel extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function setRow() {
          log_message('debug', 'arc_chanel.setRow post : '.json_encode($this->input->post(NULL, FALSE)));
          log_message('debug', 'arc_chanel.getRows get : '.json_encode($this->input->get(NULL, FALSE)));
          $data = array(
                'arc_chanelid' =>  $this->input->get_post('arc_chanelid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'parentid' =>  $this->input->get_post('parentid', TRUE)
                ,'ch_taype' =>   $this->input->get_post('ch_taype', TRUE)
                ,'ch_param' =>   $this->input->get_post('ch_param', TRUE)
                ,'ch_on' =>   $this->input->get_post('ch_on', TRUE)
                ,'msg_crash' =>   $this->input->get_post('msg_crash', TRUE)
                ,'msg_current' =>   $this->input->get_post('msg_current', TRUE)
            );
            $arc_chanel = $this->m_arc_chanel->setRow($data);
            print json_encode($arc_chanel);
    }
    function newRow() {
            log_message('debug', 'arc_chanel.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
          $data = array(
                'arc_chanelid' =>  $this->input->get_post('arc_chanelid', TRUE)
                ,'instanceid' =>  $this->input->get_post('instanceid', TRUE)
                ,'parentid' =>  $this->input->get_post('parentid', TRUE)
                ,'ch_taype' =>   $this->input->get_post('ch_taype', TRUE)
                ,'ch_param' =>   $this->input->get_post('ch_param', TRUE)
                ,'ch_on' =>   $this->input->get_post('ch_on', TRUE)
                ,'msg_crash' =>   $this->input->get_post('msg_crash', TRUE)
                ,'msg_current' =>   $this->input->get_post('msg_current', TRUE)
            );
                $instanceid =  $this->input->get_post('instanceid', TRUE);
                $parentid =  $this->input->get_post('parentid', TRUE);
            $arc_chanel= $this->m_arc_chanel->newRow($instanceid,$parentid,$data);
            $return = $arc_chanel;
            print json_encode($return);
    }
    function getRow() {
        log_message('debug', 'arc_chanel.getRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $empId  =  $this->input->get_post('id', TRUE);
        if (isset($empId)) {
            $arc_chanel = $this->m_arc_chanel->getRow($empId);
            $return = array(
                'success' => true,
                'data'    => $arc_chanel
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
            	$sort[] = array('property'=>'ch_taype', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
            $parentid=$this->input->get('parentid', FALSE);
            if(isset($parentid)){
                if($parentid!=''){
                    $arc_chanel= $this->m_arc_chanel->getRowsByParent($parentid,$sort);
                }else{
                    $arc_chanel= $this->m_arc_chanel->getRows($sort);
                }
            }else{
              $arc_chanel= $this->m_arc_chanel->getRows($sort);
            }
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arc_chanel
            );
        print json_encode($return);
    }
    function getRowsByInstance() {
        log_message('debug', 'arc_chanel.getRowsByInstance post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'ch_taype', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $InstId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($InstId) > 0) {
            $arc_chanel= $this->m_arc_chanel->getRowsByInstance($InstId,$sort);
            $return = array(
                'success' =>  TRUE ,
                'data'    => $arc_chanel
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
        log_message('debug', 'arc_chanel.getRowsByParent post : '.json_encode($this->input->post(NULL, FALSE)));
            $group = $this->input->get('group', FALSE); 
           $sort = $this->input->get('sort', FALSE);
           if(!$sort && $group) $sort = $group;
           if(!$sort || $group == $sort) 
            {
            	$sort = json_decode($sort);
            	$sort[] = array('property'=>'ch_taype', 'direction'=>'ASC');
            	$sort = json_encode($sort);
            }
        $ParentId  =  $this->input->get_post('parentid', TRUE);
        if (strlen($ParentId) > 0) {
            $arc_chanel= $this->m_arc_chanel->getRowsByParent($ParentId,$sort);
            $return = array(
                'success' => TRUE,
                'data'    => $arc_chanel
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
        log_message('debug', 'arc_chanel.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('arc_chanelid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_arc_chanel->deleteRow($tempId);
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
        $this->load->model('M_arc_chanel', 'm_arc_chanel');
    }
}
?>