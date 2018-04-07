
Ext.require([
'Ext.form.*'
]);

function DefineInterface_arlog_data_(id,mystore){

var groupingFeature_arlog_data = Ext.create('Ext.grid.feature.Grouping',{
groupByText:  'Группировать по этому полю',
showGroupsText:  'Показать группировку'
});
 var p1;
    function onDeleteConfirm(selection){
      if (selection) {
        Ext.Ajax.request({
            url:    rootURL+'index.php/c_arlog_data/deleteRow',
            method:  'POST',
    		params: { 
    				arlog_dataid: selection.get('arlog_dataid')
    				}
    	});
    	p1.store.remove(selection);
      }
    };
    function onDeleteClick(){
      var selection = p1.getView().getSelectionModel().getSelection()[0];
      if (selection) {
   	  if(CheckOperation('arlog.edit')!=0){
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
   	if(CheckOperation('arlog.edit')!=0){
                var edit = Ext.create('EditWindow_arlog_data');
                p1.store.insert(0, new model_arlog_data());
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
   	    if(CheckOperation('arlog.edit')!=0){
            var edit = Ext.create('EditWindow_arlog_data');
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
       stateId:  'arlog_data',
        iconCls:  'icon-grid',
        frame: true,
        instanceid: '',
        features: [groupingFeature_arlog_data ],
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
{text: "СМС", width:WidthIf4(200), dataIndex: 'sms_grid', sortable: true}
            ,
{text: "Канал", width:WidthIf4(200), dataIndex: 'chanel_grid', sortable: true}
            ,
{text: "Время отсылки", width:WidthIf4(110), dataIndex: 'sendtime', sortable: true, xtype: 'datecolumn',    renderer:myDateRenderer}
            ,
{text: "Результат", width: WidthIf4(200), dataIndex: 'sendresult', sortable: true}
            ,
{text: "Номер попытки", width:WidthIf4(60), dataIndex: 'trynumber', sortable: true}
            ,
{text: "завершено", width:WidthIf4(80), dataIndex: 'finished_grid', sortable: true}
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
function DefineForms_arlog_data_(){


Ext.define('Form_arlog_data', {
extend:  'Ext.form.Panel',
alias: 'widget.f_arlog_data',
initComponent: function(){
    //this.addEvents('create');
    Ext.apply(this,{
        activeRecord: null,
        defaultType:  'textfield',
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
        id:'arlog_data-0',
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
listeners:{  select: function ( combo, records, eOpts ) {combo.up('form' ).activeRecord.set('sms', records.get('id'));}  },
store: cmbstore_arsms_data,
valueField:     'brief',
displayField:   'brief',
//typeAhead: true,
emptyText:      '',
name:   'sms_grid',
itemId:   'sms_grid',
fieldLabel:  'СМС',
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
listeners:{  select: function ( combo, records, eOpts ) {combo.up('form' ).activeRecord.set('chanel', records.get('id'));}  },
store: cmbstore_arc_chanel,
valueField:     'brief',
displayField:   'brief',
//typeAhead: true,
emptyText:      '',
name:   'chanel_grid',
itemId:   'chanel_grid',
fieldLabel:  'Канал',
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

xtype:  'datefield',
format:'d/m/Y H:i:s',
submitFormat:'Y-m-d H:i:s',
value:  '',
name:   'sendtime',
itemId:   'sendtime',
fieldLabel:  'Время отсылки',
allowBlank:true
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
name:   'sendresult',
itemId:   'sendresult',
fieldLabel:  'Результат',
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

xtype:  'numberfield',
value:  '0',
name:   'trynumber',
itemId:   'trynumber',
fieldLabel:  'Номер попытки',
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
name:   'finished_grid',
itemId:   'finished_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('finished', record.get('value'));}  },
fieldLabel:  'завершено',
allowBlank:true
       ,labelWidth: WidthIf(120,10)
}
       ], width: WidthIf(770,10),
       height: 350 
        }
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
                url: rootURL+'index.php/c_arlog_data/setRow',
                method:  'POST',
                params: { 
                    instanceid: this.instanceid
                    ,arlog_dataid: active.get('arlog_dataid')
                    ,sms: active.get('sms') 
                    ,chanel: active.get('chanel') 
                    ,sendtime:function() { if(active.get('sendtime')) return active.get('sendtime').toLocaleFormat('%Y-%m-%d %H:%M:%S'); else return null;}()
                    ,sendresult: active.get('sendresult') 
                    ,trynumber: active.get('trynumber') 
                    ,finished: active.get('finished') 
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
                    if(active.get('arlog_dataid')==''){
               			active.set('arlog_dataid',res.data['arlog_dataid']);
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
        if(this.activeRecord.get('arlog_dataid')==''){
                this.activeRecord.store.reload();
        }
        this.setActiveRecord(null,null);
        this.ownerCt.close();
    }
}); // 'Ext.Define

Ext.define('EditWindow_arlog_data', {
    extend:  'Ext.window.Window',
    maxHeight: 490,
    maxWidth: 900,
    autoScroll:true,
    minWidth: WidthIf(750),
    width: WidthIf(800),
    minHeight:440,
    height:450,
    constrainHeader :AllowConstraint(),
    layout:  'absolute',
    autoShow: true,
    modal: true,
    closable: false,
    closeAction: 'destroy',
    iconCls:  'icon-application_form',
    title:  'Протокол',
    items:[{
        xtype:  'f_arlog_data'
	}]
	});
}