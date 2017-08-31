
var groupingFeature_autoarsms_data = Ext.create('Ext.grid.feature.Grouping',{
groupByText:  'Группировать по этому полю',
showGroupsText:  'Показать группировку'
});
var interval_autoarsms_data;
Ext.define('grid_autoarsms_data', {
    extend:  'Ext.grid.Panel',
    alias: 'widget.g_v_autoarsms_data',
    requires: [
        'Ext.grid.*',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
    initComponent: function(){
        Ext.apply(this, {
        frame: false,
        store: store_v_autoarsms_data,
        features: [groupingFeature_autoarsms_data],
        defaultDockWeights : { top: 7, bottom: 5, left: 1, right: 3 },
        // viewConfig: {               enableTextSelection: true        },
        dockedItems: [{
                xtype:  'toolbar',
                     items: [{
                    iconCls:  'icon-application_form_add',
                    text:   'Создать',
                    scope:  this,
                    handler : this.onAddClick
                    }, {
                    iconCls:  'icon-application_form_edit',
                    text:   'Изменить',
                    itemId:  'edit',
                    disabled: true,
                    scope:  this,
                    handler : this.onEditClick
                    }, {
                    iconCls:  'icon-application_form_delete',
                    text:   'Удалить',
                    disabled: true,
                    itemId:  'delete',
                    scope:  this,
                    handler : this.onDeleteClick
                    }, {
                    iconCls:  'icon-table_refresh',
                    text:   'Обновить',
                    itemId:  'bRefresh',
                    scope:  this,
                    handler : this.onRefreshClick
                   } , {
                    iconCls:  'icon-page_excel',
                    text:   'Экспорт',
                    itemId:  'bExport',
                    scope:  this,
                    handler: this.onExportClick
                }]
            }],
        columns: [
            {text: "Дата и Время СМС", width:133, dataIndex: 'arsms_data_smstime', sortable: true,renderer:myDateRenderer}
            ,
            {text: "Серийный номер", width:133, dataIndex: 'arsms_data_serialno', sortable: true}
            ,
            {text: "Температура", width:133, dataIndex: 'arsms_data_temperature', sortable: true}
            ,
            {text: "Поплавок-норма", width:133, dataIndex: 'arsms_data_pop_ok', sortable: true}
            ,
            {text: "Крышка открыта", width:133, dataIndex: 'arsms_data_roof_open', sortable: true}
            ,
            {text: "Питание в норме", width:133, dataIndex: 'arsms_data_power_ok', sortable: true}
        ]
        ,
        bbar: Ext.create('Ext.PagingToolbar', {
        store: store_v_autoarsms_data,
        displayInfo: true,
        displayMsg:  'Показаны строки с {0} по {1} из {2}',
        emptyMsg: 'нет данных'
        
        })

, rbar:
                [
                {
                    xtype:  'form',
                    title:  'Фильтры',
                    iconCls:  'icon-find',
                    flex:1,
					collapsible:true,
                    collapseDirection:  'right',
					animCollapse: false, 
					titleCollapse:true,
					bodyPadding:5,
					width:200,
					minWidth:200,
					autoScroll:true,
                    buttonAlign:  'center',
					layout: {
                    type:   'vbox',
                    align:  'stretch'
				},
                defaultType:  'textfield',
				items: [
{

xtype:  'datefield',
format:'d/m/Y H:i:s',
submitFormat:'Y-m-d H:i:s',
value:  '',
name:  'arsms_data_smstime_ge',
itemId: 'arsms_data_smstime_ge',
fieldLabel: 'Дата и Время СМС C',
emptyText:'не задано',
submitEmptyText: false,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Дата и Время СМС C'});}}
}
,
{

xtype:  'datefield',
format:'d/m/Y H:i:s',
submitFormat:'Y-m-d H:i:s',
value:  '',
name:  'arsms_data_smstime_le',
itemId: 'arsms_data_smstime_le',
fieldLabel: 'Дата и Время СМС по',
emptyText:'не задано',
submitEmptyText: false,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Дата и Время СМС по'});}}
}
,
{

value:  '',
name:   'arsms_data_serialno',
itemId:   'arsms_data_serialno',
fieldLabel:  '',
emptyText:      'Серийный номер',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Серийный номер'});}}
}
,
{

xtype:  'numberfield',
value:  '0',
name:   'arsms_data_temperature_ge',
itemId:   'arsms_data_temperature_ge',
fieldLabel:  'Температура >=',
emptyText:      'не задано',
submitEmptyText: false,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Температура >='});}}
}
,
{

xtype:  'numberfield',
value:  '0',
name:   'arsms_data_temperature_le',
itemId:   'arsms_data_temperature_le',
fieldLabel:  'Температура <=',
emptyText:      'не задано',
submitEmptyText: false,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Температура <='});}}
}
,
{

xtype:          'combobox',
editable: false,
trigger1Cls:        'x-form-clear-trigger', 
trigger2Cls:        'x-form-select-trigger', 
hideTrigger1:false, 
hideTrigger2:false, 
onTrigger1Click : function(){
		this.collapse();
		this.clearValue();
},
onTrigger2Click : function(){ 
		if(this.isExpanded) {
			this.collapse(); 
		}else{ 
			this.expand();
		}
},
store: enum_Boolean,
valueField:     'value',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'arsms_data_pop_ok_val',
itemId:   'arsms_data_pop_ok_val',
fieldLabel:  '',
emptyText:      'Поплавок-норма',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Поплавок-норма'});}}
}
,
{

xtype:          'combobox',
editable: false,
trigger1Cls:        'x-form-clear-trigger', 
trigger2Cls:        'x-form-select-trigger', 
hideTrigger1:false, 
hideTrigger2:false, 
onTrigger1Click : function(){
		this.collapse();
		this.clearValue();
},
onTrigger2Click : function(){ 
		if(this.isExpanded) {
			this.collapse(); 
		}else{ 
			this.expand();
		}
},
store: enum_Boolean,
valueField:     'value',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'arsms_data_roof_open_val',
itemId:   'arsms_data_roof_open_val',
fieldLabel:  '',
emptyText:      'Крышка открыта',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Крышка открыта'});}}
}
,
{

xtype:          'combobox',
editable: false,
trigger1Cls:        'x-form-clear-trigger', 
trigger2Cls:        'x-form-select-trigger', 
hideTrigger1:false, 
hideTrigger2:false, 
onTrigger1Click : function(){
		this.collapse();
		this.clearValue();
},
onTrigger2Click : function(){ 
		if(this.isExpanded) {
			this.collapse(); 
		}else{ 
			this.expand();
		}
},
store: enum_Boolean,
valueField:     'value',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'arsms_data_power_ok_val',
itemId:   'arsms_data_power_ok_val',
fieldLabel:  '',
emptyText:      'Питание в норме',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Питание в норме'});}}
}
					],
                    buttons: 
                    [
                        {
                            text: 'Найти',
							iconCls:'icon-find',
                            formBind: true, 
                            disabled: false,
                            grid: this,
                            handler: function() {
                                var user_input =this.up('form').getForm().getValues(false,true);
                                var filters = new Array();
								if(this.grid.default_filter != null){
									for (var i=0; i< this.grid.default_filter.length;i++) {
										var kv=this.grid.default_filter[i];
										filters.push({property: kv.key, value: kv.value});
									}
								}
                                for (var key in user_input) {
                                    filters.push({property: key, value: user_input[key]});
                                }
                                if (this.grid.store.filters.length>0) 
                                    this.grid.store.filters.clear();
                                if (filters.length>0) 
                                    this.grid.store.filter(filters); 
                                else 
								   this.grid.store.load();
                            }
                        }, {
							text: 'Сбросить',
							iconCls:'icon-cancel',
                            grid: this,
                            handler: function() {
                                this.up('form').getForm().reset();
								var filters = new Array();
                                if(this.grid.default_filter!=null){
									for (var i=0; i< this.grid.default_filter.length;i++) {
										var kv=this.grid.default_filter[i];
										filters.push({property: kv.key, value: kv.value});
									}
								}
                                if (this.grid.store.filters.length>0) 
                                    this.grid.store.filters.clear();
                                if (filters.length>0) 
                                    this.grid.store.filter(filters); 
                                else 
								   this.grid.store.load();
                            }
                        }
                    ]
                }
            ]//rbar
        }
        );
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
        this.store.load()
       },
        onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length === 0);
    },
    listeners: {
        itemdblclick: function() { 
    	    this.onEditClick();
        }
        ,
        	added:function(){
        			//interval_autoarsms_data= setInterval(function() {  
        			//	store_v_autoarsms_data.load();
        			//}, 60000);
        		}
        	,
        	destroy:function(){
        		//clearInterval(interval_autoarsms_data);
        }
    },
    onDeleteConfirm:function(selection){
      if (selection) {
        Ext.Ajax.request({
            url:    rootURL+'index.php/c_v_autoarsms_data/deleteRow',
            method:  'POST',
    		params: { 
    				instanceid: selection.get('instanceid')
    				}
    	});
    	this.store.remove(selection);
      }
    },
    onDeleteClick: function(){
      var selection = this.getView().getSelectionModel().getSelection()[0];
      if (selection) {
   	    if(CheckOperation('arsms.edit')!=0 && OTAllowDelete('arsms')){
        Ext.Msg.show({
            title:  'Удалить?',
            msg:    'Удалить строку из базы данных?',
        	buttons: Ext.Msg.YESNO,
        	icon:   Ext.MessageBox.QUESTION,
        	fn: function(btn,text,opt){
        		if(btn=='yes'){
        			opt.caller.onDeleteConfirm(opt.selectedRow);
        	    }
        	},
            caller: this,
            selectedRow: selection
        });
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Удаление объектов не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
      }
    },
    onAddClick: function(){
   	    if(CheckOperation('arsms.edit')!=0 && OTAllowAdd('arsms')){
            Ext.Ajax.request({
                url: rootURL+'index.php/c_v_autoarsms_data/newRow',
                method:  'POST',
                params: { 
                },
                success: function(response){
                var text = response.responseText;
                var res =Ext.decode(text);
                var edit = Ext.create('iu.windowObjects');
                edit.prefix='c_v_autoarsms_data';
                edit.setTitle('Создание документа:СМС') ;
                var p=eval('arsms_Panel_'+OTAddMode('arsms')+'( res.data, false,null )') ;
                edit.add(p);
                edit.show();
                }
            });
            this.store.load();
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Создание объектов не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
    },
    onEditClick: function(){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
   	    if(CheckOperation('arsms.edit')!=0 ){
                var edit = Ext.create('iu.windowObjects');
                edit.prefix='c_v_autoarsms_data';
                edit.setTitle('Редактирование документа: СМС') ;
            var p=eval('arsms_Panel_'+OTEditMode('arsms')+'( selection.get(\'instanceid\'), false, selection )') ;
            edit.add(p);
            edit.show();
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Изменение объектов не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
        }
    },
    onRefreshClick: function(){
             this.store.load();
    }
    ,
     onExportClick: function(){ 
         	var config= {title:this.title, columns:this.columns };
    	var workbook = new Workbook(config);
    workbook.addWorksheet(this.store, config );
    var x= workbook.render();
    window.open( 'data:application/vnd.ms-excel;base64,' + Base64.encode(x),'_blank');
     }
    }
    );
Ext.require([
'Ext.form.*'
]);
function arsms_Jrnl(){ 

  var arsms= Ext.create('Ext.form.Panel', {
       closable: true,
       id:     'arsms_jrnl',
       title: 'СМС',
      layout: 'fit',
      flex: 1,
      fieldDefaults: {
         labelAlign:             'top',
          msgTarget:             'side'
        },
        defaults: {
        anchor:'100%'
        },

        items: [{
            itemId:'gr_autoarsms_data',
            xtype:'g_v_autoarsms_data',
            stateful: stateFulSystem,
            stateId:'j_v_autoarsms_data',
            layout: 'fit',
            flex: 1,
            store: store_v_autoarsms_data
    }] // tabpanel
    }); //Ext.Create
    return arsms;
}
Ext.define('ObjectWindow_arsms', {
    extend:  'Ext.window.Window',
    maxHeight: 620,
    minHeight: 620,
    minWidth: 800,
    maxWidth: 1024,
    constrainHeader :true,
    layout:  'fit',
    autoShow: true,
    closeAction: 'destroy',
    modal: true,
    iconCls:  'icon-comments',
    title:  'СМС',
    items:[ ]
	});