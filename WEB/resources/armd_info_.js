
Ext.require([
'Ext.form.*'
]);

function DefineInterface_armd_info_(id,mystore){

var groupingFeature_armd_info = Ext.create('Ext.grid.feature.Grouping',{
groupByText:  'Группировать по этому полю',
showGroupsText:  'Показать группировку'
});
 var p1;
    function onDeleteConfirm(selection){
      if (selection) {
        Ext.Ajax.request({
            url:    rootURL+'index.php/c_armd_info/deleteRow',
            method:  'POST',
    		params: { 
    				armd_infoid: selection.get('armd_infoid')
    				}
    	});
    	p1.store.remove(selection);
      }
    };
    function onDeleteClick(){
      var selection = p1.getView().getSelectionModel().getSelection()[0];
      if (selection) {
   	  if(CheckOperation('armd.edit')!=0){
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
   	if(CheckOperation('armd.edit')!=0){
                var edit = Ext.create('EditWindow_armd_info');
                p1.store.insert(0, new model_armd_info());
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
   	    if(CheckOperation('armd.edit')!=0){
            var edit = Ext.create('EditWindow_armd_info');
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
       stateId:  'armd_info',
        iconCls:  'icon-grid',
        frame: true,
        instanceid: '',
        features: [groupingFeature_armd_info ],
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
{text: "Модель", width:WidthIf4(200), dataIndex: 'moduletype_grid', sortable: true}
            ,
{text: "Серийный номер", width: WidthIf4(200), dataIndex: 'serialno', sortable: true}
            ,
{text: "Дата изготовления", width:WidthIf4(90), dataIndex: 'makedate', sortable: true, xtype: 'datecolumn',   renderer:myDateOnlyRenderer }
            ,
{text: "Номер телефона", width: WidthIf4(200), dataIndex: 'phone', sortable: true}
            ,
{text: "Крышка NO", width:WidthIf4(80), dataIndex: 'roof_no_grid', sortable: true}
            ,
{text: "Поплавок NO", width:WidthIf4(80), dataIndex: 'pop_no_grid', sortable: true}
            ,
{text: "Питание NO", width:WidthIf4(80), dataIndex: 'power_no_grid', sortable: true}
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
function DefineForms_armd_info_(){


Ext.define('Form_armd_info', {
extend:  'Ext.form.Panel',
alias: 'widget.f_armd_info',
initComponent: function(){
    //this.addEvents('create');
    Ext.apply(this,{
        activeRecord: null,
        defaultType:  'textfield',
        id:'armd_info',
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
        id:'armd_info-0',
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
listeners:{  select: function ( combo, records, eOpts ) {combo.up('form' ).activeRecord.set('moduletype', records.get('id'));}  },
store: cmbstore_armd_type,
valueField:     'brief',
displayField:   'brief',
//typeAhead: true,
emptyText:      '',
name:   'moduletype_grid',
itemId:   'moduletype_grid',
fieldLabel:  'Модель',
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
name:   'serialno',
itemId:   'serialno',
fieldLabel:  'Серийный номер',
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
format:'d/m/Y',
submitFormat:'Y-m-d H:i:s',
value:  '',
name:   'makedate',
itemId:   'makedate',
fieldLabel:  'Дата изготовления',
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
name:   'phone',
itemId:   'phone',
fieldLabel:  'Номер телефона',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(120,10)
}
       ], width: WidthIf(770,10),
       height: 240 
        }
,
        { 
        xtype:'panel', 
        id:'armd_info-1',
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
                url: rootURL+'index.php/c_armd_info/setRow',
                method:  'POST',
                params: { 
                    instanceid: this.instanceid
                    ,armd_infoid: active.get('armd_infoid')
                    ,moduletype: active.get('moduletype') 
                    ,serialno: active.get('serialno') 
                    ,makedate:function() { if(active.get('makedate')) return active.get('makedate').toLocaleFormat('%Y-%m-%d %H:%M:%S'); else return null;}()
                    ,phone: active.get('phone') 
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
                    if(active.get('armd_infoid')==''){
               			active.set('armd_infoid',res.data['armd_infoid']);
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
        if(this.activeRecord.get('armd_infoid')==''){
                this.activeRecord.store.reload();
        }
        this.setActiveRecord(null,null);
        this.ownerCt.close();
    }
}); // 'Ext.Define

Ext.define('EditWindow_armd_info', {
    extend:  'Ext.window.Window',
    maxHeight: 625,
    maxWidth: 900,
    autoScroll:true,
    minWidth: WidthIf(750),
    width:  WidthIf(800),
    minHeight:575,
    height:585,
    constrainHeader :AllowConstraint(),
    layout:  'absolute',
    autoShow: true,
    modal: true,
    closable: false,
    closeAction: 'destroy',
    iconCls:  'icon-application_form',
    title:  'Модуль',
    items:[{
        xtype:  'f_armd_info'
	}]
	});
}