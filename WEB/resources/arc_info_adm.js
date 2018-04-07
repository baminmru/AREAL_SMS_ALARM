
Ext.require([
'Ext.form.*'
]);

function DefineInterface_arc_info_adm(id,mystore,selection){

var p1 ; 
var p1_saved=false;
var p1_valid=false;
     function onSave(close_after_save,callaftersave){
        var active = p1.activeRecord,
        form = p1.getForm();
        if (!active) {
            return;
        }
        if (form.isValid()) {
            form.updateRecord(active);
            // combobox patch
            // var form_values = form.getValues(); var field_name = '';  for(field_name in form_values){active.set(field_name, form_values[field_name]);}
        	StatusDB('Сохранение данных');
            Ext.Ajax.request({
                url: rootURL+'index.php/c_arc_info/setRow',
                method:  'POST',
                params: { 
                    instanceid: p1.instanceid
                    ,arc_infoid: active.get('arc_infoid')
                    ,family: active.get('family') 
                    ,name: active.get('name') 
                    ,org: active.get('org') 
                    ,phone: active.get('phone') 
                    ,email: active.get('email') 
                    ,login: active.get('login') 
                    ,isadmin: active.get('isadmin') 
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
        		        StatusErr('Ошибка. '+res.msg);
                        p1_saved=false;
	            }else{
                    if(active.get('arc_infoid')==''){
               			active.set('arc_infoid',res.data['arc_infoid']);
                    }
        		   /* Ext.MessageBox.show({
                        title:  'Подтверждение',
                        msg:    'Изменения сохранены',
                        buttons: Ext.MessageBox.OK,
                        icon:   Ext.MessageBox.INFO
        		    }); */
        		    StatusReady('Изменения сохранены');
                    p1_saved=true;
                   if(selection){
                     Ext.Ajax.request({
                        url: rootURL+'index.php/c_v_autoarc_info/getRows?&filter=[{"property":"arc_infoid","value":"'+ active.get('arc_infoid') + '"}]',
                        method:     'GET',
                        success: function(response){
                            var data = Ext.decode(response.responseText);
                            selection.set(data.rows[0]);
                            selection.commit();
                        }
                     });
                   }
                    if (close_after_save) { if (typeof(callaftersave) == 'function') callaftersave();  p1.up('window').close(); }
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
    };
     function onSave1(aftersave){onSave(false,aftersave);}
     function onSave2(aftersave){onSave(true,aftersave);}
    function onReset(){
        p1.setActiveRecord(null,null);
    }
p1=new Ext.form.Panel(
{
            itemId: id+'',
            autoScroll:true,
            border:0, 
            layout: 'absolute',
            activeRecord: null,
            selection: selection,
            defaultType:  'textfield',
            doSave: onSave2,
            canClose: function(){
            	if( p1_valid){
            		if(! p1.getForm().isValid()  ) return true;
            		return true ;
            	}else{
            		if(! p1.getForm().isValid()  ) return false;
            		if(p1_saved) return  true;
            		return false;
            	}
            },
        fieldDefaults: {
         labelAlign:  'top',
         labelWidth: WidthIf(140)
        },
        items: [
        { 
        xtype:'fieldset', 
        id:'arc_info-0',
        y: 0, 
        x: 0, 
        border:1, 
        layout:'absolute', 
        items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 5, 
labelWidth:WidthIf(150,10),

xtype:  'textfield',
value:  '',
name:   'family',
itemId:   'family',
fieldLabel:  'Фамилия',
labelClsExtra:'x-item-mandatory',
allowBlank:false
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 60, 
labelWidth:WidthIf(150,10),

xtype:  'textfield',
value:  '',
name:   'name',
itemId:   'name',
fieldLabel:  'Имя',
labelClsExtra:'x-item-mandatory',
allowBlank:false
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 115, 
labelWidth:WidthIf(150,10),

xtype:  'textfield',
value:  '',
name:   'org',
itemId:   'org',
fieldLabel:  'Организация',
allowBlank:true
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 170, 
labelWidth:WidthIf(150,10),

xtype:  'textfield',
value:  '',
name:   'phone',
itemId:   'phone',
fieldLabel:  'Телефон',
allowBlank:true
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 225, 
labelWidth:WidthIf(150,10),

xtype:  'textfield',
value:  '',
name:   'email',
itemId:   'email',
fieldLabel:  'E-Mail',
allowBlank:true
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 280, 
labelWidth:WidthIf(150,10),

xtype:  'textfield',
value:  '',
name:   'login',
itemId:   'login',
fieldLabel:  'Логин',
labelClsExtra:'x-item-mandatory',
allowBlank:false
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: WidthIf(740,10),
        x: 5, 
        y: 335, 
labelWidth:WidthIf(150,10),

xtype:          'combobox',
editable: false,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'isadmin_grid',
itemId:   'isadmin_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('isadmin', record.get('value'));}  },
fieldLabel:  'Администратор',
labelClsExtra:'x-item-mandatory',
allowBlank:false
}
       ],
       height: 410 
        }
          ],//items = part panel
        instanceid:''
    ,setActiveRecord: function(record,instid){
        p1.activeRecord = record;
        p1.instanceid = instid;
        if (record) {
            p1.getForm().loadRecord(record);
            p1_valid =p1.getForm().isValid();
        } else {
            p1.getForm().reset();
        }
    }
}); // 'Ext.Define

return p1;
};
function DefineForms_arc_info_adm(){


Ext.define('Form_arc_infoadm', {
extend:  'Ext.form.Panel',
alias: 'widget.f_arc_infoadm',
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
        id:'arc_info-0',
        layout:'absolute', 
        border:false, 
        items: [
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 0, 

xtype:  'textfield',
value:  '',
name:   'family',
itemId:   'family',
fieldLabel:  'Фамилия',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(150,10)
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
name:   'name',
itemId:   'name',
fieldLabel:  'Имя',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(150,10)
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
name:   'org',
itemId:   'org',
fieldLabel:  'Организация',
allowBlank:true
       ,labelWidth: WidthIf(150,10)
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
fieldLabel:  'Телефон',
allowBlank:true
       ,labelWidth: WidthIf(150,10)
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
name:   'email',
itemId:   'email',
fieldLabel:  'E-Mail',
allowBlank:true
       ,labelWidth: WidthIf(150,10)
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
name:   'login',
itemId:   'login',
fieldLabel:  'Логин',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(150,10)
}
,
{
        minWidth: WidthIf(740,10),
        width: WidthIf(740,10),
        maxWidth: 740,
        x: 5, 
        y: 330, 

xtype:          'combobox',
editable: false,
store: enum_Boolean,
valueField:     'name',
displayField:   'name',
//typeAhead: true,
queryMode:      'local',
emptyText:      '',
name:   'isadmin_grid',
itemId:   'isadmin_grid',
listeners:{  select: function ( combo, record, eOpts ) {combo.up('form' ).activeRecord.set('isadmin', record.get('value'));}  },
fieldLabel:  'Администратор',
labelClsExtra:'x-item-mandatory',
allowBlank:false
       ,labelWidth: WidthIf(150,10)
}
       ], width: WidthIf(770,10),
       height: 405 
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
                url: rootURL+'index.php/c_arc_info/setRow',
                method:  'POST',
                params: { 
                    instanceid: this.instanceid
                    ,arc_infoid: active.get('arc_infoid')
                    ,family: active.get('family') 
                    ,name: active.get('name') 
                    ,org: active.get('org') 
                    ,phone: active.get('phone') 
                    ,email: active.get('email') 
                    ,login: active.get('login') 
                    ,isadmin: active.get('isadmin') 
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
                    if(active.get('arc_infoid')==''){
               			active.set('arc_infoid',res.data['arc_infoid']);
                    }
        		    StatusReady('Изменения сохранены');
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
        if(this.activeRecord.get('arc_infoid')==''){
                this.activeRecord.store.reload();
        }
        this.setActiveRecord(null,null);
        this.ownerCt.close();
    }
}); // 'Ext.Define

Ext.define('EditWindow_arc_infoadm', {
    extend:  'Ext.window.Window',
    maxHeight: 545,
    maxWidth: 900,
    autoScroll:true,
    minWidth: WidthIf(750),
    width: WidthIf(800),
    minHeight:495,
    height:505,
    constrainHeader :AllowConstraint(),
    layout:  'absolute',
    autoShow: true,
    modal: true,
    closable: false,
    closeAction: 'destroy',
    iconCls:  'icon-application_form',
    title:  'Информация',
    items:[{
        xtype:  'f_arc_infoadm'
	}]
	});
}