
 Ext.define('model_v_autoarsms_data',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'instanceid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name:'arsms_data_smstime', type: 'string'}
            ,{name:'arsms_data_serialno', type: 'string'}
            ,{name:'arsms_data_roof_open', type: 'string'}
            ,{name:'arsms_data_pop_ok', type: 'string'}
            ,{name:'arsms_data_temperature', type: 'number'}
            ,{name:'arsms_data_power_ok', type: 'string'}
			,{name:'arsms_data_opercode', type: 'number'}
        ]
    });

    var store_v_autoarsms_data = Ext.create('Ext.data.Store', {
        model:'model_v_autoarsms_data',
        autoLoad: false,
        autoSync: false,
        remoteSort: true,
        remoteFilter:true,
        pageSize : 30,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_v_autoarsms_data/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'rows'
                ,totalProperty: 'total'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            },
            listeners: {
                exception: function(proxy, response, operation){
                    Ext.MessageBox.show({
                        title: 'REMOTE EXCEPTION',
                        msg:    operation.getError(),
                        icon : Ext.MessageBox.ERROR,
                        buttons : Ext.Msg.OK
                    });
                }
            }
        }
    });