
 Ext.define('model_v_autoarc_info',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'instanceid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name:'arc_info_org', type: 'string'}
            ,{name:'arc_info_login', type: 'string'}
            ,{name:'arc_info_family', type: 'string'}
            ,{name:'arc_info_phone', type: 'string'}
            ,{name:'arc_info_name', type: 'string'}
            ,{name:'arc_info_email', type: 'string'}
        ]
    });

    var store_v_autoarc_info = Ext.create('Ext.data.Store', {
        model:'model_v_autoarc_info',
        autoLoad: false,
        autoSync: false,
        remoteSort: true,
        remoteFilter:true,
        pageSize : 30,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_v_autoarc_info/getRows',
            extraParams: {archived:0}, 
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