
Ext.require([
'Ext.form.*'
]);
  armd_adm= null;
function armd_Panel_adm(objectID, RootPanel, selection){ 


    var store_armd_type = Ext.create('Ext.data.Store', {
        model:'model_armd_type',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_armd_type/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
                },
            extraParams:{
                instanceid: objectID
            }
        }
    });

    var store_armd_info = Ext.create('Ext.data.Store', {
        model:'model_armd_info',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_armd_info/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
                },
            extraParams:{
                instanceid: objectID
            }
        }
    });

    var store_armd_chaneltype = Ext.create('Ext.data.Store', {
        model:'model_armd_chaneltype',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_armd_chaneltype/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
                },
            extraParams:{
                instanceid: objectID
            }
        }
    });
          DefineForms_armd_type_adm();
          DefineForms_armd_info_adm();
          DefineForms_armd_chaneltype_adm();
     var   int_armd_type_adm     =      DefineInterface_armd_type_adm('int_armd_type',store_armd_type);
     var   int_armd_info_adm     =      DefineInterface_armd_info_adm('int_armd_info',store_armd_info);
     var   int_armd_chaneltype_adm     =      DefineInterface_armd_chaneltype_adm('int_armd_chaneltype',store_armd_chaneltype);
     armd_adm= Ext.create('Ext.form.Panel', {
      id: 'armd',
      layout:'fit',
      width:810, // для правильного расчета размера дочерних окон ! 
      height:530,
      fieldDefaults: {
          labelAlign:             'top',
          msgTarget:              'side'
        },
        defaults: {
        anchor:'100%'
        },

        instanceid:objectID,
                onCommit: function(){
        		},
        		onButtonOk: function()
        		{
        			var me = this;
        		},
        		onButtonCancel: function()
        		{
        		},
        canClose: function(){
        	return true;
        },
        items: [{
            xtype:'tabpanel',
            itemId:'tabs_armd',
            activeTab: 0,
            layout: 'fit',
            tabPosition:'top',
            border:0,
            items:[   // tabs
            { // begin part tab
            xtype:'panel',
            border:0,
            title: 'Тип модуля',
            layout:'fit',
            itemId:'tab_armd_type',
            items:[ // panel on tab 
int_armd_type_adm
        ] // panel on tab  form or grid
      } // end tab
,
            { // begin part tab
            xtype:'panel',
            border:0,
            title: 'Модуль',
            layout:'fit',
            itemId:'tab_armd_info',
            items:[ // panel on tab 
int_armd_info_adm
        ] // panel on tab  form or grid
      } // end tab
,
            { // begin part tab
            xtype:'panel',
            border:0,
            title: 'Типы каналов',
            layout:'fit',
            itemId:'tab_armd_chaneltype',
            items:[ // panel on tab 
int_armd_chaneltype_adm
        ] // panel on tab  form or grid
      } // end tab
    ] // part tabs
    }] // tabpanel
    }); //Ext.Create
    if(RootPanel==true){
       armd_adm.closable= true;
       armd_adm.title= 'Справочник';
       armd_adm.frame= true;
    }else{
       armd_adm.closable= false;
       armd_adm.title= '';
       armd_adm.frame= false;
    }
   int_armd_type_adm.instanceid=objectID;	
       store_armd_type.load(  {params:{ instanceid:objectID} } );
   int_armd_info_adm.instanceid=objectID;	
       store_armd_info.load(  {params:{ instanceid:objectID} } );
   int_armd_chaneltype_adm.instanceid=objectID;	
       store_armd_chaneltype.load(  {params:{ instanceid:objectID} } );
    return armd_adm;
}