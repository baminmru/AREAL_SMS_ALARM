
    <?php
	 class C_v_autoarsms_data extends CI_Controller {
    function __construct() {
         parent::__construct();
        $this->_loadModels();
    }
    function newRow() {
            log_message('debug', 'autoarsms_data.newRow post : '.json_encode($this->input->post(NULL, FALSE)));
            $name  =  $this->input->get_post('name', TRUE);
            $objtype  =  $this->input->get_post('objtype', TRUE);
            $autoarsms_data= $this->m_v_autoarsms_data->newRow($name,$objtype);
            $return = $autoarsms_data;
            print json_encode($return);
    }
    function getRows() {
            log_message('debug', 'autoarsms_data.getRows post : '.json_encode($this->input->post(NULL, FALSE)));
           $start=$this->input->get('start', FALSE);
           $limit=$this->input->get('limit', FALSE);
       $group = $this->input->get('group', FALSE);  
      $sort = $this->input->get('sort', FALSE);
      if(!$sort && $group) $sort = $group;
      if(!$sort || $group == $sort) 
          {
              $sort = json_decode($sort);
              //$sort[] = array('property'=>'field_name', 'direction'=>'ASC');
              $sort = json_encode($sort);
          }
          $filter = $this->input->get('filter', FALSE);
           $autoarsms_data= $this->m_v_autoarsms_data->getRowsSL($start,$limit,$sort,$filter);
           print json_encode($autoarsms_data);
    }
    function deleteRow() {
        log_message('debug', 'autoarsms_data.deleteRow post : '.json_encode($this->input->post(NULL, FALSE)));
        $tempId  =  $this->input->get_post('instanceid', TRUE);
        if (strlen($tempId) > 0) {
            $return = $this->m_v_autoarsms_data->deleteRow($tempId);
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
        $this->load->model('M_v_autoarsms_data', 'm_v_autoarsms_data');
    }
}