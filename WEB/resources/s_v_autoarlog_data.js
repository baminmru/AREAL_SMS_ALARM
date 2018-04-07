
 Ext.define('model_v_autoarlog_data',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'instanceid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name:'arlog_data_finished', type: 'string'}
            ,{name:'arlog_data_trynumber', type: 'number'}
            ,{name:'arlog_data_sendresult', type: 'string'}
            ,{name:'arlog_data_sms', type: 'string'}
            ,{name:'arlog_data_chanel', type: 'string'}
            ,{name:'arlog_data_sendtime', type: 'string'}
        ]
    });

    var store_v_autoarlog_data = Ext.create('Ext.data.Store', {
        model:'model_v_autoarlog_data',
        autoLoad: false,
        autoSync: false,
        remoteSort: true,
        remoteFilter:true,
        pageSize : 30,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_v_autoarlog_data/getRows',
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