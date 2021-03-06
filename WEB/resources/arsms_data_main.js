﻿
Ext.require([
'Ext.form.*'
]);

function DefineInterface_arsms_data_main(id,mystore){

var groupingFeature_arsms_data = Ext.create('Ext.grid.feature.Grouping',{
groupByText:  'Группировать по этому полю',
showGroupsText:  'Показать группировку'
});
 var p1;
    function onDeleteConfirm(selection){
      if (selection) {
        Ext.Ajax.request({
            url:    rootURL+'index.php/c_arsms_data/deleteRow',
            method:  'POST',
    		params: { 
    				arsms_dataid: selection.get('arsms_dataid')
    				}
    	});
    	p1.store.remove(selection);
      }
    };
    function onDeleteClick(){
      var selection = p1.getView().getSelectionModel().getSelection()[0];
      if (selection) {
   	  if(CheckOperation('arsms.edit')!=0){
        Ext.Msg.show({
            title:  'Удалить?',
            msg:    'Удалить строку из базы данных?',
        	buttons: Ext.Msg.YESNO,
        	icon:   Ext.MessageBox.QUESTION,
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
    function onAddClick(){
   	if(CheckOperation('arsms.edit')!=0){
                var edit = Ext.create('EditWindow_arsms_datamain');
                p1.store.insert(0, new model_arsms_data());
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
   	    if(CheckOperation('arsms.edit')!=0){
            var edit = Ext.create('EditWindow_arsms_datamain');
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
 p1=   new Ext.grid.Panel(
         {
        itemId:  id,
        store:  mystore,
        width:WidthIf(600),
        header:false,
        layout:'fit',
        scroll:'both',
      stateful:stateFulSystem,
       stateId:  'arsms_datamain',
        iconCls:  'icon-grid',
        frame: true,
        instanceid: '',
        features: [groupingFeature_arsms_data ],
          dockedItems: [{
                xtype:  'toolbar',
                items: [
                {
                    scale: 'large',
                    iconCls:  'icon-application_form_add',
                    text:   TextIf('Создать'),
                    scope:  this,
                hidden : true,
                    handler : onAddClick
                    }, {
                    scale: 'large',
                    iconCls:  'icon-application_form_edit',
                    text:   TextIf('Изменить'),
                    scope:  this,
                    disabled: true,
                    itemId:  'edit',
                hidden : true,
                    handler : onEditClick
                    }, {
                    scale: 'large',
                    iconCls:  'icon-application_form_delete',
                    text:   TextIf('Удалить'),
                    disabled: true,
                    itemId:  'delete',
                    scope:  this,
                   hidden : true,
                    handler : onDeleteClick
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
{text: "Дата и Время СМС", width:WidthIf4(110), dataIndex: 'smstime', sortable: true, xtype: 'datecolumn',    renderer:myDateRenderer}
            ,
{text: "Серийный номер", width: WidthIf4(200), dataIndex: 'serialno', sortable: true}
            ,
{text: "Температура", width:WidthIf4(60), dataIndex: 'temperature', sortable: true}
            ,
{text: "Поплавок-норма", width:WidthIf4(80), dataIndex: 'pop_ok_grid', sortable: true}
            ,
{text: "Крышка открыта", width:WidthIf4(80), dataIndex: 'roof_open_grid', sortable: true}
            ,
{text: "Питание в норме", width:WidthIf4(80), dataIndex: 'power_ok_grid', sortable: true}
        ]
       ,
    listeners: {
     render : function(grid){
                grid.store.on('load', function(store, records, options){
                        if(store.count() > 0) grid.getSelectionModel().select(0);      
                }); 
         },
        itemdblclick: function() { 
    	    onEditClick();
        },
          itemclick: function(view , record){
         p1.down('#delete').setDisabled(false);
         p1.down('#edit').setDisabled(false);
    },
    select: function( selmodel, record,  index,  eOpts ){
        p1.down('#delete').setDisabled(false);
        p1.down('#edit').setDisabled(false);
    }, 
    selectionchange: function(selModel, selections){
    	 p1.down('#delete').setDisabled(selections.length === 0);
    	 p1.down('#edit').setDisabled(selections.length === 0);
    }
    }
    }
    );
return p1;
};
function DefineForms_arsms_data_main(){


Ext.define('Form_arsms_datamain', {
extend:  'Ext.form.Panel',
alias: 'widget.f_arsms_datamain',
initComponent: function(){
    //this.addEvents('create');
    Ext.apply(this,{
        activeRecord: null,
        defaultType:  'textfield',
        id:'arsms_data',
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
        id:'arsms_data-0',
        layout:'absolute', 
        border:false, 
        items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 0, 

xtype:  'datefield',
format:'d/m/Y H:i:s',
submitFormat:'Y-m-d H:i:s',
hideTrigger: true,
editable: false,
readOnly: true,
value:  '',
name:   'smstime',
itemId:   'smstime',
fieldLabel:  'Дата и Время СМС',
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
,
{
xtype:  'hidden',
name:   'phone',
fieldLabel:  'Телефон отправителя'
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
name:   'serialno',
itemId:   'serialno',
fieldLabel:  'Серийный номер',
editable: false,
readOnly: true,
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
,
{
xtype:  'hidden',
name:   'opercode',
fieldLabel:  'Код оператора'
}
,
{
xtype:  'hidden',
name:   'controlcode',
fieldLabel:  'Контрольный код'
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 110, 

xtype:  'numberfield',
editable: false,
spinDownEnabled: false,
spinUpEnabled: false,
readOnly: true,
value:  '0',
name:   'temperature',
itemId:   'temperature',
fieldLabel:  'Температура',
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
       ], width: WidthIf(770,10),
       height: 185 
        }
,
        { 
        xtype:'panel', 
        id:'arsms_data-1',
        title:      'Флаги сообщения',
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
readOnly: true,
hideTrigger: true,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'pop_ok_grid',
itemId:   'pop_ok_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('pop_ok', record.get('value'));}  },
fieldLabel:  'Поплавок-норма',
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
readOnly: true,
hideTrigger: true,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'roof_open_grid',
itemId:   'roof_open_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('roof_open', record.get('value'));}  },
fieldLabel:  'Крышка открыта',
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
readOnly: true,
hideTrigger: true,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'power_ok_grid',
itemId:   'power_ok_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('power_ok', record.get('value'));}  },
fieldLabel:  'Питание в норме',
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
                url: rootURL+'index.php/c_arsms_data/setRow',
                method:  'POST',
                params: { 
                    instanceid: this.instanceid
                    ,arsms_dataid: active.get('arsms_dataid')
                    ,smstime:function() { if(active.get('smstime')) return active.get('smstime').toLocaleFormat('%Y-%m-%d %H:%M:%S'); else return null;}()
                    ,phone: active.get('phone') 
                    ,serialno: active.get('serialno') 
                    ,opercode: active.get('opercode') 
                    ,controlcode: active.get('controlcode') 
                    ,temperature: active.get('temperature') 
                    ,pop_ok: active.get('pop_ok') 
                    ,roof_open: active.get('roof_open') 
                    ,power_ok: active.get('power_ok') 
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
                    if(active.get('arsms_dataid')==''){
               			active.set('arsms_dataid',res.data['arsms_dataid']);
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
        if(this.activeRecord.get('arsms_dataid')==''){
                this.activeRecord.store.reload();
        }
        this.setActiveRecord(null,null);
        this.ownerCt.close();
    }
}); // 'Ext.Define

Ext.define('EditWindow_arsms_datamain', {
    extend:  'Ext.window.Window',
    maxHeight: 570,
    maxWidth: 900,
    autoScroll:true,
    minWidth: WidthIf(750),
    width:  WidthIf(800),
    minHeight:520,
    height:530,
    constrainHeader :AllowConstraint(),
    layout:  'absolute',
    autoShow: true,
    modal: true,
    closable: false,
    closeAction: 'destroy',
    iconCls:  'icon-application_form',
    title:  'Входящие СМС',
    items:[{
        xtype:  'f_arsms_datamain'
	}]
	});
}