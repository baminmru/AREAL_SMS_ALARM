
Ext.require([
'Ext.form.*'
]);
  arc_= null;
function arc_Panel_(objectID, RootPanel, selection){ 


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
          DefineForms_arc_info_();
          DefineForms_arc_md_();
     var   int_arc_info_     =      DefineInterface_arc_info_('int_arc_info',store_arc_info, selection);
     var   int_arc_md_     =      DefineInterface_arc_md_('int_arc_md',store_arc_md);
     arc_= Ext.create('Ext.form.Panel', {
      id: 'arc',
      layout:'fit',
      width:WidthIf(810),  // для правильного расчета размера дочерних окон ! 
      height:470,
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
        	    int_arc_info_.doSave( me.onCommit);
        		},
        		onButtonCancel: function()
        		{
        		},
        canClose: function(){
        	return int_arc_info_.canClose();
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
int_arc_info_
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
int_arc_md_
        ] // panel on tab  form or grid
      } // end tab
    ] // part tabs
    }] // tabpanel
    }); //Ext.Create
    if(RootPanel==true){
       arc_.closable= true;
       arc_.title= 'Клиент';
       arc_.frame= true;
	   
	  int_arc_info_.add( 
			{		
				xtype:'button',
				id: int_arc_info_.id+'_buttonOk',
				iconCls:  'icon-accept',					
				text: 'Сохранить',					
				disabled: false,
				hidden: false,			
				x:5,
				y:380,	
				handler: arc_.onButtonOk
				
			}
			)
		;
	   
	   
    }else{
       arc_.closable= false;
       arc_.title= '';
       arc_.frame= false;
    }
   store_arc_info.on('load', function() {
        if(store_arc_info.count()==0){
            store_arc_info.insert(0, new model_arc_info());
        }
        record= store_arc_info.getAt(0);
        record['instanceid']=objectID;
   int_arc_info_.setActiveRecord(record,objectID);	
   });
       store_arc_info.load( {params:{ instanceid:objectID} }  );
   int_arc_md_.instanceid=objectID;	
       store_arc_md.load(  {params:{ instanceid:objectID} } );
    return arc_;
}