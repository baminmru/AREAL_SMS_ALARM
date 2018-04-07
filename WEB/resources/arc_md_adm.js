
Ext.require([
'Ext.form.*'
]);

function DefineInterface_arc_md_adm(id,mystore){

var groupingFeature_arc_chanel = Ext.create('Ext.grid.feature.Grouping',{
groupByText:  'Группировать по этому полю',
showGroupsText:  'Показать группировку'
});
var grid_arc_chanel;
    function ChildOnDeleteConfirm(selection){
      if (selection) {
        Ext.Ajax.request({
            url:    rootURL+'index.php/c_arc_chanel/deleteRow',
            method:  'POST',
    		params: { 
    				arc_chanelid: selection.get('arc_chanelid')
    				}
    	});
    	grid_arc_chanel.store.remove(selection);
      }
    };
     function ChildOnDeleteClick(){
    if( grid_arc_chanel.parentid=='{00000000-0000-0000-0000-000000000000}') {return;}
      var selection = grid_arc_chanel.getView().getSelectionModel().getSelection()[0];
      if (selection) {
   	  if(CheckOperation('arc.edit')!=0){
        Ext.Msg.show({
            title:  'Удалить?',
            msg:    'Удалить строку из базы данных?',
        	buttons: Ext.Msg.YESNO,
            icon:   Ext.window.MessageBox.QUESTION,
        	fn: function(btn,text,opt){
        		if(btn=='yes'){
        			ChildOnDeleteConfirm(opt.selectedRow);
        	    }
        	},
            caller: grid_arc_chanel,
            selectedRow: selection
        });
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Удаление строк не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
      }
    };
    function ChildOnAddClick(){
    if( grid_arc_chanel.parentid=='{00000000-0000-0000-0000-000000000000}') {return;}
   	if(CheckOperation('arc.edit')!=0){
                var edit = Ext.create('EditWindow_arc_chaneladm');
                grid_arc_chanel.store.insert(0, new model_arc_chanel());
                record= grid_arc_chanel.store.getAt(0);
                record.set('parentid',grid_arc_chanel.parentid);
                edit.getComponent(0).setActiveRecord(record,grid_arc_chanel.instanceid,grid_arc_chanel.parentid);
                edit.show();
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Создание строк не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
    };
     function ChildOnRefreshClick(){
        if( grid_arc_chanel.parentid=='{00000000-0000-0000-0000-000000000000}') {return;}
            grid_arc_chanel.store.load({params:{parentid: grid_arc_chanel.parentid}});
    };
    function ChildOnEditClick(){
    if( grid_arc_chanel.parentid=='{00000000-0000-0000-0000-000000000000}') {return;}
        var selection = grid_arc_chanel.getView().getSelectionModel().getSelection()[0];
        if (selection) {
   	     if(CheckOperation('arc.edit')!=0){
            var edit = Ext.create('EditWindow_arc_chaneladm');
            edit.getComponent(0).setActiveRecord(selection,grid_arc_chanel.instanceid,grid_arc_chanel.parentid);
            edit.show();
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Изменение строк не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
        }
    };
   grid_arc_chanel=
    new Ext.grid.Panel({
        itemId:  'grd_arc_chanel',
        minHeight: 200,
        maxHeight: 1200,
        iconCls:  'icon-grid',
        frame: true,
        parentid: '{00000000-0000-0000-0000-000000000000}',
        title: 'Каналы оповещения',
        scroll:'both',
        stateful:stateFulSystem,
        stateId:  'arc_chaneladm',
        store: {
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
            },
            listeners: {
                exception: function(proxy, response, operation){
                }
            }
        }
    },
        features: [groupingFeature_arc_chanel],
          dockedItems: [{
                xtype:  'toolbar',
                items: [
                {
                    scale: 'large',
                    iconCls:  'icon-application_form_add',
                    text:   TextIf('Создать'),
                    scope:  this,
                    handler : ChildOnAddClick
                    }, {
                    scale: 'large',
                    iconCls:  'icon-application_form_edit',
                    text:   TextIf('Изменить'),
                    scope:  this,
                    disabled: true,
                    itemId:  'edit',
                    handler : ChildOnEditClick
                    }, {
                    scale: 'large',
                    iconCls:  'icon-application_form_delete',
                    text:   TextIf('Удалить'),
                    disabled: true,
                    itemId:  'delete',
                    scope:  this,
                    handler : ChildOnDeleteClick
                    }, {
                    scale: 'large',
                    iconCls:  'icon-table_refresh',
                    text:   TextIf('Обновить'),
                    itemId:  'bRefresh',
                    scope:  this,
                    handler : ChildOnRefreshClick
                }]
            }],
        columns: [
{text: "Тип канала", width: WidthIf4(200), dataIndex: 'ch_taype_grid', sortable: true}
            ,
{text: "Параметры канала", width: WidthIf4(200), dataIndex: 'ch_param', sortable: true}
            ,
{text: "Канал включен", width:WidthIf4(80), dataIndex: 'ch_on_grid', sortable: true}
            ,
{text: "Авария", width:WidthIf4(80), dataIndex: 'msg_crash_grid', sortable: true}
            ,
{text: "Дежурные", width:WidthIf4(80), dataIndex: 'msg_current_grid', sortable: true}
            ,
{text: "Название", width: WidthIf4(200), dataIndex: 'chanelname', sortable: true}
            ,
{text: "Комментарий", width: WidthIf4(200), dataIndex: 'chanelcomment', sortable: true}
        ],
    listeners: {
        itemdblclick: function() { 
    	    ChildOnEditClick();
        },
          itemclick: function(view , record){
         grid_arc_chanel.down('#delete').setDisabled(false);
          grid_arc_chanel.down('#edit').setDisabled(false);
    },
    select: function( selmodel, record,  index,  eOpts ){
        grid_arc_chanel.down('#delete').setDisabled(false);
        grid_arc_chanel.down('#edit').setDisabled(false);
    }, 
    selectionchange: function(selModel, selections){
    	 grid_arc_chanel.down('#delete').setDisabled(selections.length === 0);
    	 grid_arc_chanel.down('#edit').setDisabled(selections.length === 0);
    }
    }
    }
    );
var groupingFeature_arc_md = Ext.create('Ext.grid.feature.Grouping',{
groupByText:  'Группировать по этому полю',
showGroupsText:  'Показать группировку'
});
var p1;
    function onDeleteConfirm(selection){
      if (selection) {
        Ext.Ajax.request({
            url:    rootURL+'index.php/c_arc_md/deleteRow',
            method:  'POST',
    		params: { 
    				arc_mdid: selection.get('arc_mdid')
    				}
    	});
    	p1.store.remove(selection);
      }
    };
    function onDeleteClick(){
      var selection = p1.getView().getSelectionModel().getSelection()[0];
      if (selection) {
   	  if(CheckOperation('arc.edit')!=0){
        Ext.Msg.show({
            title:  'Удалить?',
            msg:    'Удалить строку из базы данных?',
        	buttons: Ext.Msg.YESNO,
            icon:   Ext.window.MessageBox.QUESTION,
        	fn: function(btn,text,opt){
        		if(btn=='yes'){
        			onDeleteConfirm(opt.selectedRow);
        	    }
        	},
            caller: this,
            selectedRow: selection
        });
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Удаление строк не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
      }
    };
	
	function onVcallConfirm(selection){
      if (selection) {
			Ext.Ajax.request({
				url:    rootURL+'index.php/c_arc_md/VCall',
				method:  'POST',
				params: { 
						arc_mdid: selection.get('arc_mdid')
						}
			});
      }
    };
    function onVcallClick(){
      var selection = p1.getView().getSelectionModel().getSelection()[0];
      if (selection) {
   	 			Ext.Msg.show({
				title:  'Вызов?',
				msg:    'Осуществить вызов модуля?',
				buttons: Ext.Msg.YESNO,
				icon:   Ext.window.MessageBox.QUESTION,
				fn: function(btn,text,opt){
					if(btn=='yes'){
						onVcallConfirm(opt.selectedRow);
					}
				},
				caller: this,
				selectedRow: selection
			});
     
      }
    };
	
    function onAddClick(){
   	if(CheckOperation('arc.edit')!=0){
                var edit = Ext.create('EditWindow_arc_mdadm');
                p1.store.insert(0, new model_arc_md());
                record= p1.store.getAt(0);
                record.set('instanceid',p1.instanceid);
                edit.getComponent(0).setActiveRecord(record,p1.instanceid);
                edit.show();
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Создание строк не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
    };
    function onRefreshClick(){
            p1.store.load({params:{instanceid: p1.instanceid}});
    };
    function onEditClick(){
        var selection = p1.getView().getSelectionModel().getSelection()[0];
        if (selection) {
   	    if(CheckOperation('arc.edit')!=0){
            var edit = Ext.create('EditWindow_arc_mdadm');
            edit.getComponent(0).setActiveRecord(selection,selection.get('instanceid'));
            edit.show();
        }else{
        		Ext.MessageBox.show({
                title:  'Контроль прав.',
                msg:    'Изменение строк не разрешено!',
                buttons: Ext.MessageBox.OK,
               icon:   Ext.MessageBox.WARNING
        		});
        }
        }
    };
 p1=   new Ext.grid.Panel({
        itemId: id,
        store:  mystore,
        frame: true,
        instanceid: '',
        scroll:'both',
        autoScroll:true,
        width:WidthIf(600),
        features: [groupingFeature_arc_md],
          dockedItems: [{
                xtype:  'toolbar',
                items: [
                {
                    scale: 'large',
                    iconCls:  'icon-application_form_add',
                    text:   TextIf('Создать'),
                    scope:  this,
                    handler : onAddClick
                    }, {
                    scale: 'large',
                    iconCls:  'icon-application_form_edit',
                    text:   TextIf('Изменить'),
                    scope:  this,
                    disabled: true,
                    itemId:  'edit',
                    handler : onEditClick
                    }, {
                    scale: 'large',
                    iconCls:  'icon-application_form_delete',
                    text:   TextIf('Удалить'),
                    disabled: true,
                    itemId:  'delete',
                    scope:  this,
                    handler : onDeleteClick
                    },{
scale: 'large',
			iconCls:  'icon-bell',
                    text:   TextIf('Вызов'),
                    disabled: true,
                    itemId:  'vcall',
                    scope:  this,
                    handler : onVcallClick
                    }, {
scale: 'large',                    
iconCls:  'icon-table_refresh',
                    text:   TextIf('Обновить'),
                    itemId:  'bRefresh',
                    scope:  this,
                    handler : onRefreshClick
                    }]
            }],
        columns: [
{text: "Модуль", width:WidthIf4(200), dataIndex: 'mymodule_grid', sortable: true}
            ,
{text: "Серийный номер модуля", width: WidthIf4(200), dataIndex: 'moduleserial', sortable: true }
            ,
{text: "Название", width: WidthIf4(200), dataIndex: 'name', sortable: true }
            ,
{text: "Тип оборудование", width: WidthIf4(200), dataIndex: 'deivetype', sortable: true }
            ,
{text: "Адрес", width: WidthIf4(200), dataIndex: 'theaddress', sortable: true }
            ,
{text: "Ответственное лицо", width: WidthIf4(200), dataIndex: 'master_fio', sortable: true }
            ,
{text: "Крышка NO", width:WidthIf4(60), dataIndex: 'roof_no_grid', sortable: true}
            ,
{text: "Поплавок NO", width:WidthIf4(60), dataIndex: 'pop_no_grid', sortable: true}
            ,
{text: "Питание NO", width:WidthIf4(60), dataIndex: 'power_no_grid', sortable: true}
        ]
,
	bbar:grid_arc_chanel, 
    listeners: {
        resize: function ( tree, width, height, oldWidth, oldHeight, eOpts ){
        		grid_arc_chanel.setHeight( height * 0.5 );
        },
        render : function(grid){
                grid.store.on('load', function(store, records, options){
                        if(store.count() > 0) grid.getSelectionModel().select(0);      
                }); 
         },
        itemdblclick: function() { 
    	    onEditClick();
        }
        ,itemclick: function(view,record) { 
           p1.down('#delete').setDisabled(false);
		    p1.down('#vcall').setDisabled(false);
           p1.down('#edit').setDisabled(false);
           grid_arc_chanel.instanceid=p1.instanceid;
           grid_arc_chanel.parentid=record.get('arc_mdid');
           grid_arc_chanel.store.load({params:{ parentid:record.get('arc_mdid')} })
        },
        selectionchange: function(selModel, selections){
        p1.down('#delete').setDisabled(selections.length === 0);
		p1.down('#vcall').setDisabled(selections.length === 0);
        p1.down('#edit').setDisabled(selections.length === 0);
        var selection = selections[0];
        if (selection) {
           p1.down('#grd_arc_chanel').instanceid=p1.instanceid;
           p1.down('#grd_arc_chanel').parentid=selection.get('arc_mdid');
           p1.down('#grd_arc_chanel').store.load({params:{ parentid:selection.get('arc_mdid')} })
        }
       }
    }
    }
    );
return p1;
};
function DefineForms_arc_md_adm(){


Ext.define('Form_arc_mdadm', {
extend:  'Ext.form.Panel',
alias: 'widget.f_arc_mdadm',
initComponent: function(){
    //this.addEvents('create');
    Ext.apply(this,{
        activeRecord: null,
        defaultType:  'textfield',
        id:'arc_md',
        x: 0, 
        fieldDefaults: {
         labelAlign:  'top' //,
        },
        items: [
        { 
        xtype:'panel', 
        closable:false,
        title:'',
        preventHeader:true,
        id:'arc_md-0',
        layout:'absolute', 
        border:false, 
        items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 0, 

xtype:  'combobox',
trigger1Cls:        'x-form-clear-trigger', 
trigger2Cls:        'x-form-select-trigger', 
hideTrigger1:false, 
hideTrigger2:false, 
onTrigger1Click : function(){
		this.collapse();
		this.clearValue();
		this.up('form' ).activeRecord.set('mymodule',null );
},
onTrigger2Click : function(){ 
		if(this.isExpanded) {
			this.collapse(); 
		}else{ 
			if(this.store.count(false)==0) this.store.load();
			this.expand();
		}
},
editable: false,
listeners:{  select: function ( combo, records, eOpts ) {combo.up('form' ).activeRecord.set('mymodule', records.get('id'));}  },
store: cmbstore_armd_info,
valueField:     'brief',
displayField:   'brief',
//typeAhead: true,
emptyText:      '',
name:   'mymodule_grid',
itemId:   'mymodule_grid',
fieldLabel:  'Модуль',
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 55, 

xtype:  'textfield',
value:  '',
name:   'moduleserial',
itemId:   'moduleserial',
fieldLabel:  'Серийный номер модуля',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 110, 

xtype:  'textfield',
value:  '',
name:   'name',
itemId:   'name',
fieldLabel:  'Название',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 165, 

xtype:  'textfield',
value:  '',
name:   'deivetype',
itemId:   'deivetype',
fieldLabel:  'Тип оборудование',
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 220, 

xtype:  'textfield',
value:  '',
name:   'theaddress',
itemId:   'theaddress',
fieldLabel:  'Адрес',
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 275, 

xtype:  'textfield',
value:  '',
name:   'master_fio',
itemId:   'master_fio',
fieldLabel:  'Ответственное лицо',
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
       ], width: WidthIf(770,10),
       height: 350 
        }
,
        { 
        xtype:'panel', 
        id:'arc_md-1',
        title:      'Конфигурация датчиков',
        defaultType:  'textfield',
        closable:false,
        collapsible:true,
        titleCollapse : true,
        layout:'absolute', 
        x: 0, 
            items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 0, 

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
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'roof_no_grid',
itemId:   'roof_no_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('roof_no', record.get('value'));}  },
fieldLabel:  'Крышка NO',
allowBlank:true
       ,labelWidth:WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 55, 

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
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'pop_no_grid',
itemId:   'pop_no_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('pop_no', record.get('value'));}  },
fieldLabel:  'Поплавок NO',
allowBlank:true
       ,labelWidth:WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 110, 

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
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'power_no_grid',
itemId:   'power_no_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('power_no', record.get('value'));}  },
fieldLabel:  'Питание NO',
allowBlank:true
       ,labelWidth:WidthIf(120,10)
}
       ], width: WidthIf(760),
       height: 235 
        } //group
          ],//items = part panel
        instanceid:'',
        dockedItems: [{
            xtype:  'toolbar',
            dock:   'bottom',
            ui:     'footer',
                items: ['->', {
                    scale: 'large',
                    iconCls:  'icon-accept',
                    itemId:  'save',
                    text:   'Сохранить',
                    disabled: true,
                    scope:  this,
                    handler : this.onSave
                }
               , {
                    scale: 'large',
                    iconCls:  'icon-cancel',
                    text:   'Закрыть',
                    scope:  this,
                    handler : this.onReset
                }
              ]
            }] // dockedItems
        }); //Ext.apply
        this.callParent();
    }, //initComponent 
    setActiveRecord: function(record,instid){
        this.activeRecord = record;
        this.instanceid = instid;
        if (record) {
            this.down('#save').enable();
            this.getForm().loadRecord(record);
        } else {
            this.down('#save').disable();
            this.getForm().reset();
        }
    },
    onSave: function(){
        var active = this.activeRecord,
            form = this.getForm();
        if (!active) {
            return;
        }
        if (form.isValid()) {
            form.updateRecord(active);
            // combobox patch
            // var form_values = form.getValues(); var field_name = '';  for(field_name in form_values){active.set(field_name, form_values[field_name]);}
        	StatusDB('Сохранение данных');
            Ext.Ajax.request({
                url: rootURL+'index.php/c_arc_md/setRow',
                method:  'POST',
                params: { 
                    instanceid: this.instanceid
                    ,arc_mdid: active.get('arc_mdid')
                    ,mymodule: active.get('mymodule') 
                    ,moduleserial: active.get('moduleserial') 
                    ,name: active.get('name') 
                    ,deivetype: active.get('deivetype') 
                    ,theaddress: active.get('theaddress') 
                    ,master_fio: active.get('master_fio') 
                    ,roof_no: active.get('roof_no') 
                    ,pop_no: active.get('pop_no') 
                    ,power_no: active.get('power_no') 
                }
                , success: function(response){
                var text = response.responseText;
                var res =Ext.decode(text);
	            if(res.success==false){
	       	        Ext.MessageBox.show({
	       		        title:  'Ошибка',
	       		        msg:    res.msg,
	       		        buttons: Ext.MessageBox.OK,
	       		        icon:   Ext.MessageBox.ERROR
	       	            });
        		    StatusErr( 'Ошибка. '+res.msg);
	            }else{
                    if(active.get('arc_mdid')==''){
               			active.set('arc_mdid',res.data['arc_mdid']);
                    }
        		    StatusReady('Изменения сохранены');
                form.owner.ownerCt.close();
                }
              }
            });
        }else{
        		Ext.MessageBox.show({
                title:  'Ошибка',
                msg:    'Не все обязательные поля заполнены!',
                buttons: Ext.MessageBox.OK,
                icon:   Ext.MessageBox.ERROR
        		});
        }
    },
    onReset: function(){
        if(this.activeRecord.get('arc_mdid')==''){
                this.activeRecord.store.reload();
        }
        this.setActiveRecord(null,null);
        this.ownerCt.close();
    }
}); // 'Ext.Define

Ext.define('EditWindow_arc_mdadm', {
    extend:  'Ext.window.Window',
    maxHeight: 735,
    maxWidth: 900,
    autoScroll:true,
    minWidth: WidthIf(750),
    width: WidthIf(800),
    minHeight:670,
    height:670,
    constrainHeader :AllowConstraint(),
    layout:  'absolute',
    autoShow: true,
    modal: true,
    closable: false,
    closeAction: 'destroy',
    iconCls:  'icon-application_form',
    title:  'Мои модули',
    items:[{
        xtype:  'f_arc_mdadm'
	}]
	});

Ext.define('Form_arc_chaneladm', {
extend:  'Ext.form.Panel',
alias: 'widget.f_arc_chaneladm',
initComponent: function(){
    //this.addEvents('create');
    Ext.apply(this,{
        activeRecord: null,
        defaultType:  'textfield',
        id:'arc_chanel',
        x: 0, 
        fieldDefaults: {
         labelAlign:  'top' //,
        },
        items: [
        { 
        xtype:'panel', 
        closable:false,
        title:'',
        preventHeader:true,
        id:'arc_chanel-0',
        layout:'absolute', 
        border:false, 
        items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 0, 

xtype:  'combobox',
trigger1Cls:        'x-form-select-trigger', 
hideTrigger1:false, 
onTrigger1Click : function(){ 
		if(this.isExpanded) {
			this.collapse(); 
		}else{ 
			if(this.store.count(false)==0) this.store.load();
			this.expand();
		}
},
editable: false,
listeners:{  select: function ( combo, records, eOpts ) {combo.up('form' ).activeRecord.set('ch_taype', records.get('id'));}  },
store: cmbstore_armd_chaneltype,
valueField:     'brief',
displayField:   'brief',
//typeAhead: true,
emptyText:      '',
name:   'ch_taype_grid',
itemId:   'ch_taype_grid',
fieldLabel:  'Тип канала',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 55, 

xtype:  'textfield',
value:  '',
name:   'ch_param',
itemId:   'ch_param',
fieldLabel:  'Параметры канала',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 110, 

xtype:          'combobox',
editable: false,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'ch_on_grid',
itemId:   'ch_on_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('ch_on', record.get('value'));}  },
fieldLabel:  'Канал включен',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(120,10)
}
       ], width: WidthIf(770,10),
       height: 185 
        }
,
        { 
        xtype:'panel', 
        id:'arc_chanel-1',
        title:      'Типы сообщений',
        defaultType:  'textfield',
        closable:false,
        collapsible:true,
        titleCollapse : true,
        layout:'absolute', 
        x: 0, 
            items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 0, 

xtype:          'combobox',
editable: false,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'msg_crash_grid',
itemId:   'msg_crash_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('msg_crash', record.get('value'));}  },
fieldLabel:  'Авария',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth:WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 55, 

xtype:          'combobox',
editable: false,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'msg_current_grid',
itemId:   'msg_current_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('msg_current', record.get('value'));}  },
fieldLabel:  'Дежурные',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth:WidthIf(120,10)
}
       ], width: WidthIf(760),
       height: 180 
        } //group
,
        { 
        xtype:'panel', 
        id:'arc_chanel-2',
        title:      'Информация',
        defaultType:  'textfield',
        closable:false,
        collapsible:true,
        titleCollapse : true,
        layout:'absolute', 
        x: 0, 
            items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10) , 
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 0, 

xtype:  'textfield',
value:  '',
name:   'chanelname',
itemId:   'chanelname',
fieldLabel:  'Название',
allowBlank:true
       ,labelWidth:WidthIf(120,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10) , 
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 55, 

xtype:  'textfield',
value:  '',
name:   'chanelcomment',
itemId:   'chanelcomment',
fieldLabel:  'Комментарий',
allowBlank:true
       ,labelWidth:WidthIf(120,10)
}
       ], width: WidthIf(760),
       height: 180 
        } //group
          ],//items = part panel
        instanceid:'',
        dockedItems: [{
            xtype:  'toolbar',
            dock:   'bottom',
            ui:     'footer',
                items: ['->', {
                    scale: 'large',
                    iconCls:  'icon-accept',
                    itemId:  'save',
                    text:   'Сохранить',
                    disabled: true,
                    scope:  this,
                    handler : this.onSave
                }
               , {
                    scale: 'large',
                    iconCls:  'icon-cancel',
                    text:   'Закрыть',
                    scope:  this,
                    handler : this.onReset
                }
              ]
            }] // dockedItems
        }); //Ext.apply
        this.callParent();
    }, //initComponent 
    setActiveRecord: function(record,instid,parentid){
        this.activeRecord = record;
        this.instanceid = instid;
        this.parentid = parentid;
        if (record) {
            this.down('#save').enable();
            this.getForm().loadRecord(record);
        } else {
            this.down('#save').disable();
            this.getForm().reset();
        }
    },
    onSave: function(){
        var active = this.activeRecord,
            form = this.getForm();
        if (!active) {
            return;
        }
        if (form.isValid()) {
            form.updateRecord(active);
            // combobox patch
            // var form_values = form.getValues(); var field_name = '';  for(field_name in form_values){active.set(field_name, form_values[field_name]);}
        	StatusDB('Сохранение данных');
            Ext.Ajax.request({
                url: rootURL+'index.php/c_arc_chanel/setRow',
                method:  'POST',
                params: { 
                    instanceid: this.instanceid,
                    parentid: this.parentid
                    ,arc_chanelid: active.get('arc_chanelid')
                    ,ch_taype: active.get('ch_taype') 
                    ,ch_param: active.get('ch_param') 
                    ,ch_on: active.get('ch_on') 
                    ,msg_crash: active.get('msg_crash') 
                    ,msg_current: active.get('msg_current') 
                    ,chanelname: active.get('chanelname') 
                    ,chanelcomment: active.get('chanelcomment') 
                }
                , success: function(response){
                var text = response.responseText;
                var res =Ext.decode(text);
	            if(res.success==false){
	       	        Ext.MessageBox.show({
	       		        title:  'Ошибка',
	       		        msg:    res.msg,
	       		        buttons: Ext.MessageBox.OK,
	       		        icon:   Ext.MessageBox.ERROR
	       	            });
        		    StatusErr( 'Ошибка. '+res.msg);
	            }else{
                    if(active.get('arc_chanelid')==''){
               			active.set('arc_chanelid',res.data['arc_chanelid']);
                    }
        		    StatusReady('Изменения сохранены');
                form.owner.ownerCt.close();
                }
              }
            });
        }else{
        		Ext.MessageBox.show({
                title:  'Ошибка',
                msg:    'Не все обязательные поля заполнены!',
                buttons: Ext.MessageBox.OK,
                icon:   Ext.MessageBox.ERROR
        		});
        }
    },
    onReset: function(){
        if(this.activeRecord.get('arc_chanelid')==''){
                this.activeRecord.store.reload();
        }
        this.setActiveRecord(null,null);
        this.ownerCt.close();
    }
}); // 'Ext.Define

Ext.define('EditWindow_arc_chaneladm', {
    extend:  'Ext.window.Window',
    maxHeight: 705,
    maxWidth: 900,
    autoScroll:true,
    minWidth: WidthIf(750),
    width: WidthIf(800),
    minHeight:655,
    height:665,
    constrainHeader :AllowConstraint(),
    layout:  'absolute',
    autoShow: true,
    modal: true,
    closable: false,
    closeAction: 'destroy',
    iconCls:  'icon-application_form',
    title:  'Каналы оповещения',
    items:[{
        xtype:  'f_arc_chaneladm'
	}]
	});
}