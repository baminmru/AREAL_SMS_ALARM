
Ext.require([
'Ext.form.*'
]);
  arc_main= null;
function arc_Panel_main(objectID, RootPanel, selection){ 


    var store_arc_info = Ext.create('Ext.data.Store', {
        model:'model_arc_info',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_arc_info/getRows',
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

    var store_arc_md = Ext.create('Ext.data.Store', {
        model:'model_arc_md',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_arc_md/getRows',
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

    var store_arc_chanel = Ext.create('Ext.data.Store', {
        model:'model_arc_chanel',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_arc_chanel/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        }
    });
          DefineForms_arc_info_main();
          DefineForms_arc_md_main();
     var   int_arc_info_main     =      DefineInterface_arc_info_main('int_arc_info',store_arc_info, selection);
     var   int_arc_md_main     =      DefineInterface_arc_md_main('int_arc_md',store_arc_md);
     arc_main= Ext.create('Ext.form.Panel', {
      id: 'arc',
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
        	    int_arc_info_main.doSave( me.onCommit);
        		},
        		onButtonCancel: function()
        		{
        		},
        canClose: function(){
        	return int_arc_info_main.canClose();
        },
        items: [{
            xtype:'tabpanel',
            itemId:'tabs_arc',
            activeTab: 0,
            layout: 'fit',
            tabPosition:'top',
            border:0,
            items:[   // tabs
            { // begin part tab
            xtype:'panel',
            border:0,
            title: 'Информация',
            layout:'fit',
            itemId:'tab_arc_info',
            items:[ // panel on tab 
int_arc_info_main
        ] // panel on tab  form or grid
      } // end tab
,
            { // begin part tab
            xtype:'panel',
            border:0,
            title: 'Мои модули',
            layout:'fit',
            itemId:'tab_arc_md',
            items:[ // panel on tab 
int_arc_md_main
        ] // panel on tab  form or grid
      } // end tab
    ] // part tabs
    }] // tabpanel
    }); //Ext.Create
    if(RootPanel==true){
       arc_main.closable= true;
       arc_main.title= 'Клиент';
       arc_main.frame= true;
	    int_arc_info_main.add( 
			{		
				xtype:'button',
				id: int_arc_info_main.id+'_buttonOk',
				iconCls:  'icon-accept',					
				text: 'Сохранить',					
				disabled: false,
				hidden: false,			
				x:800,
				y:5,	
				handler: arc_main.onButtonOk
				
			}
			)
		;
    }else{
       arc_main.closable= false;
       arc_main.title= '';
       arc_main.frame= false;
    }
   store_arc_info.on('load', function() {
        if(store_arc_info.count()==0){
            store_arc_info.insert(0, new model_arc_info());
        }
        record= store_arc_info.getAt(0);
        record['instanceid']=objectID;
   int_arc_info_main.setActiveRecord(record,objectID);	
   });
       store_arc_info.load( {params:{ instanceid:objectID} }  );
   int_arc_md_main.instanceid=objectID;	
       store_arc_md.load(  {params:{ instanceid:objectID} } );
    return arc_main;
}