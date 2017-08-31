
Ext.require([
'Ext.form.*'
]);

function DefineInterface_arsms_data_adm(id,mystore){

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
                var edit = Ext.create('EditWindow_arsms_dataadm');
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
            var edit = Ext.create('EditWindow_arsms_dataadm');
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
        width:600,
        header:false,
        layout:'fit',
        scroll:'both',
      stateful:stateFulSystem,
       stateId:  'arsms_dataadm',
        iconCls:  'icon-grid',
        frame: true,
        instanceid: '',
        features: [groupingFeature_arsms_data ],
          dockedItems: [{
                xtype:  'toolbar',
                items: [
                {
                    iconCls:  'icon-application_form_add',
                    text:   'Создать',
                    scope:  this,
                    handler : onAddClick
                    }, {
                    iconCls:  'icon-application_form_edit',
                    text:   'Изменить',
                    scope:  this,
                    disabled: true,
                    itemId:  'edit',
                    handler : onEditClick
                    }, {
                    iconCls:  'icon-application_form_delete',
                    text:   'Удалить',
                    disabled: true,
                    itemId:  'delete',
                    scope:  this,
                    handler : onDeleteClick
                    }, {
                    iconCls:  'icon-table_refresh',
                    text:   'Обновить',
                    itemId:  'bRefresh',
                    scope:  this,
                    handler : onRefreshClick
                }]
            }],
        columns: [
{text: "Дата и Время СМС", width:110, dataIndex: 'smstime', sortable: true, xtype: 'datecolumn',    renderer:myDateRenderer}
            ,
{text: "Телефон отправителя", width: 200, dataIndex: 'phone', sortable: true}
            ,
{text: "Серийный номер", width: 200, dataIndex: 'serialno', sortable: true}
            ,
{text: "Код оператора", width: 200, dataIndex: 'opercode', sortable: true}
            ,
{text: "Контрольный код", width: 200, dataIndex: 'controlcode', sortable: true}
            ,
{text: "Температура", width:60, dataIndex: 'temperature', sortable: true}
            ,
{text: "Поплавок-норма", width:80, dataIndex: 'pop_ok_grid', sortable: true}
            ,
{text: "Крышка открыта", width:80, dataIndex: 'roof_open_grid', sortable: true}
            ,
{text: "Питание в норме", width:80, dataIndex: 'power_ok_grid', sortable: true}
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
function DefineForms_arsms_data_adm(){


Ext.define('Form_arsms_dataadm', {
extend:  'Ext.form.Panel',
alias: 'widget.f_arsms_dataadm',
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
        minWidth: 740,
        width: 740,
        maxWidth: 740,
        x: 5, 
        y: 0, 

xtype:  'datefield',
format:'d/m/Y H:i:s',
submitFormat:'Y-m-d H:i:s',
value:  '',
name:   'smstime',
itemId:   'smstime',
fieldLabel:  'Дата и Время СМС',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: 120
}
,
{
        minWidth: 740,
        width: 740,
        maxWidth: 740,
        x: 5, 
        y: 55, 

xtype:  'textfield',
value:  '',
name:   'phone',
itemId:   'phone',
fieldLabel:  'Телефон отправителя',
allowBlank:true
       ,labelWidth: 120
}
,
{
        minWidth: 740,
        width: 740,
        maxWidth: 740,
        x: 5, 
        y: 110, 

xtype:  'textfield',
value:  '',
name:   'serialno',
itemId:   'serialno',
fieldLabel:  'Серийный номер',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: 120
}
,
{
        minWidth: 740,
        width: 740,
        maxWidth: 740,
        x: 5, 
        y: 165, 

xtype:  'textfield',
value:  '',
name:   'opercode',
itemId:   'opercode',
fieldLabel:  'Код оператора',
allowBlank:true
       ,labelWidth: 120
}
,
{
        minWidth: 740,
        width: 740,
        maxWidth: 740,
        x: 5, 
        y: 220, 

xtype:  'textfield',
value:  '',
name:   'controlcode',
itemId:   'controlcode',
fieldLabel:  'Контрольный код',
allowBlank:true
       ,labelWidth: 120
}
,
{
        minWidth: 740,
        width: 740,
        maxWidth: 740,
        x: 5, 
        y: 275, 

xtype:  'numberfield',
value:  '0',
name:   'temperature',
itemId:   'temperature',
fieldLabel:  'Температура',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: 120
}
       ], width: 770,
       height: 350 
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
        minWidth: 740,
        width: 740,
        maxWidth: 740,
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
name:   'pop_ok_grid',
itemId:   'pop_ok_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('pop_ok', record.get('value'));}  },
fieldLabel:  'Поплавок-норма',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: 120
}
,
{
        minWidth: 740,
        width: 740,
        maxWidth: 740,
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
name:   'roof_open_grid',
itemId:   'roof_open_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('roof_open', record.get('value'));}  },
fieldLabel:  'Крышка открыта',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: 120
}
,
{
        minWidth: 740,
        width: 740,
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
name:   'power_ok_grid',
itemId:   'power_ok_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('power_ok', record.get('value'));}  },
fieldLabel:  'Питание в норме',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: 120
}
       ], width: 760,
       height: 235 
        } //group
          ],//items = part panel
        instanceid:'',
        dockedItems: [{
            xtype:  'toolbar',
            dock:   'bottom',
            ui:     'footer',
                items: ['->', {
                    iconCls:  'icon-accept',
                    itemId:  'save',
                    text:   'Сохранить',
                    disabled: true,
                    scope:  this,
                    handler : this.onSave
                }
               , {
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

Ext.define('EditWindow_arsms_dataadm', {
    extend:  'Ext.window.Window',
    maxHeight: 735,
    maxWidth: 900,
    autoScroll:true,
    minWidth: 750,
    width: 800,
    minHeight:670,
    height:670,
    constrainHeader :true,
    layout:  'absolute',
    autoShow: true,
    modal: true,
    closable: false,
    closeAction: 'destroy',
    iconCls:  'icon-application_form',
    title:  'Входящие СМС',
    items:[{
        xtype:  'f_arsms_dataadm'
	}]
	});
}