
Ext.require([
'Ext.form.*'
]);
  arlog_= null;
function arlog_Panel_(objectID, RootPanel, selection){ 


    var store_arlog_data = Ext.create('Ext.data.Store', {
        model:'model_arlog_data',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_arlog_data/getRows',
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
          DefineForms_arlog_data_();
     var   int_arlog_data_     =      DefineInterface_arlog_data_('int_arlog_data',store_arlog_data);
     arlog_= Ext.create('Ext.form.Panel', {
      id: 'arlog',
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
            itemId:'tabs_arlog',
            layout: 'fit',
            border:0,
            items:[   // tabs
            { // begin part tab
            xtype:'panel',
            border:0,
            layout:'fit',
            itemId:'tab_arlog_data',
            items:[ // panel on tab 
int_arlog_data_
        ] // panel on tab  form or grid
      } // end tab
    ] // part tabs
    }] // tabpanel
    }); //Ext.Create
    if(RootPanel==true){
       arlog_.closable= true;
       arlog_.title= 'Протокол отсылки оповещений';
       arlog_.frame= true;
    }else{
       arlog_.closable= false;
       arlog_.title= '';
       arlog_.frame= false;
    }
   int_arlog_data_.instanceid=objectID;	
       store_arlog_data.load(  {params:{ instanceid:objectID} } );
    return arlog_;
}