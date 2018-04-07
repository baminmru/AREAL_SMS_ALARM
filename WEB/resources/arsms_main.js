
Ext.require([
'Ext.form.*'
]);
  arsms_main= null;
function arsms_Panel_main(objectID, RootPanel, selection){ 


    var store_arsms_data = Ext.create('Ext.data.Store', {
        model:'model_arsms_data',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_arsms_data/getRows',
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
          DefineForms_arsms_data_main();
     var   int_arsms_data_main     =      DefineInterface_arsms_data_main('int_arsms_data',store_arsms_data);
     arsms_main= Ext.create('Ext.form.Panel', {
      id: 'arsms',
      layout:'fit',
      width:WidthIf(810),  // для правильного расчета размера дочерних окон ! 
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
            xtype:'panel',
            itemId:'tabs_arsms',
            layout: 'fit',
            border:0,
            items:[   // tabs
            { // begin part tab
            xtype:'panel',
            border:0,
            layout:'fit',
            itemId:'tab_arsms_data',
            items:[ // panel on tab 
int_arsms_data_main
        ] // panel on tab  form or grid
      } // end tab
    ] // part tabs
    }] // tabpanel
    }); //Ext.Create
    if(RootPanel==true){
       arsms_main.closable= true;
       arsms_main.title= 'СМС';
       arsms_main.frame= true;
    }else{
       arsms_main.closable= false;
       arsms_main.title= '';
       arsms_main.frame= false;
    }
   int_arsms_data_main.instanceid=objectID;	
       store_arsms_data.load(  {params:{ instanceid:objectID} } );
    return arsms_main;
}