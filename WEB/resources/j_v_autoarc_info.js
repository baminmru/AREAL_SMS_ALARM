

Ext.define('EditWindow_uw_password',{
    extend:  'Ext.window.Window',
    height: 140,
    width: 300,
    layout:  'fit',
    autoShow: true,
    modal: true,
    closeAction: 'destroy',
    iconCls:  'icon-user_key',
    title:  'Изменить пароль',
    items:[
		{
			xtype:'f_uw_password'
		}
	]
	}
);
//////////////////////////////////////////////////////




var groupingFeature_autoarc_info = Ext.create('Ext.grid.feature.Grouping',{
groupByText:  'Группировать по этому полю',
showGroupsText:  'Показать группировку'
});
var interval_autoarc_info;
Ext.define('grid_autoarc_info', {
    extend:  'Ext.grid.Panel',
    alias: 'widget.g_v_autoarc_info',
    requires: [
        'Ext.grid.*',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
    initComponent: function(){
        Ext.apply(this, {
        frame: false,
        store: store_v_autoarc_info,
        features: [groupingFeature_autoarc_info],
        defaultDockWeights : { top: 7, bottom: 5, left: 1, right: 3 },
        // viewConfig: {               enableTextSelection: true        },
        dockedItems: [{
                xtype:  'toolbar',
                     items: [{
                    iconCls:  'icon-application_form_add',
                    text:   TextIf('Создать'),
                    scope:  this,
                    handler : this.onAddClick
                    }, {
                    iconCls:  'icon-application_form_edit',
                    text:   TextIf('Изменить'),
                    itemId:  'edit',
                    disabled: true,
                    scope:  this,
                    handler : this.onEditClick
                    }, {
                    iconCls:  'icon-application_form_delete',
                    text:   TextIf('Удалить'),
                    disabled: true,
                    itemId:  'delete',
                    scope:  this,
                    handler : this.onDeleteClick
                    }, {
                    iconCls:  'icon-table_refresh',
                    text:   TextIf('Обновить'),
                    itemId:  'bRefresh',
                    scope:  this,
                    handler : this.onRefreshClick
                   }, {
                    iconCls:  'icon-user_key',
                    text:   'Изменить пароль',
                    disabled: true,
                    itemId:  'password',
                    scope:  this,
                    handler : this.onPassword
                    } , {
                    iconCls:  'icon-page_excel',
                    text:   TextIf('Экспорт'),
                    itemId:  'bExport',
                    scope:  this,
                    handler: this.onExportClick
                }]
            }],
        columns: [
            {text: "Фамилия", width:WidthIf4(133), dataIndex: 'arc_info_family', sortable: true}
            ,
            {text: "Имя", width:WidthIf4(133), dataIndex: 'arc_info_name', sortable: true}
            ,
            {text: "Организация", width:WidthIf4(133), dataIndex: 'arc_info_org', sortable: true}
            ,
            {text: "Телефон", width:WidthIf4(133), dataIndex: 'arc_info_phone', sortable: true}
            ,
            {text: "E-Mail", width:WidthIf4(133), dataIndex: 'arc_info_email', sortable: true}
            ,
            {text: "Логин", width:WidthIf4(133), dataIndex: 'arc_info_login', sortable: true}
        ]
        ,
        bbar: Ext.create('Ext.PagingToolbar', {
        store: store_v_autoarc_info,
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
					width:WidthIf3(200),
					minWidth:WidthIf3(200),
					autoScroll:true,
                    buttonAlign:  'center',
					layout: {
                    type:   'vbox',
                    align:  'stretch'
				},
                defaultType:  'textfield',
				items: [
{

value:  '',
name:   'arc_info_family',
itemId:   'arc_info_family',
fieldLabel:  '',
emptyText:      'Фамилия',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Фамилия'});}}
}
,
{

value:  '',
name:   'arc_info_name',
itemId:   'arc_info_name',
fieldLabel:  '',
emptyText:      'Имя',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Имя'});}}
}
,
{

value:  '',
name:   'arc_info_org',
itemId:   'arc_info_org',
fieldLabel:  '',
emptyText:      'Организация',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Организация'});}}
}
,
{

value:  '',
name:   'arc_info_phone',
itemId:   'arc_info_phone',
fieldLabel:  '',
emptyText:      'Телефон',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Телефон'});}}
}
,
{

value:  '',
name:   'arc_info_email',
itemId:   'arc_info_email',
fieldLabel:  '',
emptyText:      'E-Mail',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'E-Mail'});}}
}
,
{

value:  '',
name:   'arc_info_login',
itemId:   'arc_info_login',
fieldLabel:  '',
emptyText:      'Логин',
hideLabel:  true,
listeners: {render: function(e) {Ext.QuickTips.register({  target: e.getEl(), text: 'Логин'});}}
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
		this.down('#password').setDisabled(selections.length === 0);
    },
    listeners: {
        itemdblclick: function() { 
    	    this.onEditClick();
        }
        ,
        	added:function(){
        			//interval_autoarc_info= setInterval(function() {  
        			//	store_v_autoarc_info.load();
        			//}, 60000);
        		}
        	,
        	destroy:function(){
        		//clearInterval(interval_autoarc_info);
        }
    },
	onPassword:function(){
		  var selection = this.getView().getSelectionModel().getSelection()[0];
		  if (selection) {
				usr_instanceid = selection.get('instanceid');
				var changePassPanel;
				changePassPanel= new Ext.form.Panel(
				{			
					url:rootURL+'index.php/app/setSPPassword',
					layout:'absolute',
					
					items:[
					{
						labelAlign: 'top',
						xtype:  'textfield',
						fieldLabel:'Новый пароль',
						name:'newpassword',
						itemId:'newpassword',
						inputType:'password',
						allowBlank:false,
						value:'',
						x:5,
						y:5,
						labelWidth :170,
						minWidth: WidthIf(270,10),
						width: WidthIf(270,10),
						maxWidth: 270,
						minLength:8,
						minLengthText : 'Длинна пароля не менее 8 символов'
					},
					{
						labelAlign: 'top',
						xtype:  'textfield',
						fieldLabel:'Подтверждение пароля',
						name:'comppassword',
						itemId:'comppassword',
						inputType:'password',
						allowBlank:false,
						value:'',
						x:5,
						y:60,
						labelWidth :170,
						minWidth: WidthIf(270,10),
						width: WidthIf(270,10),
						maxWidth: 270,
						minLength:8,
						minLengthText : 'Длинна пароля не менее 8 символов'
					},
					{
						name:'instanceid',
						itemId:'instanceid',
						xtype:  'textfield',
						hidden:true
					}
						
					],
				   
					dockedItems: 
					[
						{
						xtype:  'toolbar',
						dock:   'bottom',
						ui:     'footer',
						items: ['->', 
							{
								scale:'large',
								iconCls:  'icon-accept',
								itemId:  'save',
								text:   'Сохранить',
								disabled: false,
								scope:  this,
								handler:function()
								{
									var form = changePassPanel.getForm();
									if(form.isValid()){
										if(form.getFields().items[0].getValue()==form.getFields().items[1].getValue())
										{
											form.getFields().items[2].setValue(usr_instanceid);
												form.submit(
												{
													url: 'index.php/app/AdminPassword',
													waitMsg: 'Сохранение...',
													success: function(f,response){
														var text = response.result.msg;
														//var res =Ext.decode(text);
														if(text=="OK"){
															Ext.MessageBox.show({
															title:  'Подтверждение',
															msg:    'Изменения сохранены',
															buttons: Ext.MessageBox.OK,
															icon:   Ext.MessageBox.INFO
															});
															var wn = this.form.owner.ownerCt;
															wn.close();
														}else{
															Ext.MessageBox.show({
																title:  'Ошибка',
																msg:    text,
																buttons: Ext.MessageBox.OK,
																icon:   Ext.MessageBox.ERROR
															});
														}
													}
													,
													
													failure: function(f,response) {
														var text = response.result.msg;
														Ext.MessageBox.show({
														title:  'Ошибка',
														msg:    text,
														buttons: Ext.MessageBox.OK,
														icon:   Ext.MessageBox.ERROR
														});
													}

												}
											);
										}else{
											Ext.MessageBox.show({
												title:  'Ошибка',
												msg:    'Новый пароль не совпадает с подтверждением пароля',
												buttons: Ext.MessageBox.OK,
												icon:   Ext.MessageBox.ERROR
												}); 
										}
									}
								}
							}, 
							{
								scale:'large',
								iconCls:  'icon-cancel',
								text:   'Закрыть',
								scope:  this,
								handler : function(){
								
									var wn = changePassPanel.form.owner.ownerCt;
									wn.close();
								} //this.onReset
							}
						]
						}
					] // dockedItems
				}
				);
		
		
		
				var edit  = new Ext.Window({
					title:'Смена пароля',
					itemId:'chpass_win',
					layout:'fit',
					constrainHeader:true,
					width:WidthIf(400),
					height:220,
					closable:true,
					modal:true,
					resizable:false,
					plain:true,
					border:false,
					items:[changePassPanel]
				});
				edit.show();
		}
		  
	
				
	},
    onDeleteConfirm:function(selection){
      if (selection) {
        Ext.Ajax.request({
            url:    rootURL+'index.php/c_v_autoarc_info/deleteRow',
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
   	    if(CheckOperation('arc.edit')!=0 && OTAllowDelete('arc')){
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
   	    if(CheckOperation('arc.edit')!=0 && OTAllowAdd('arc')){
            Ext.Ajax.request({
                url: rootURL+'index.php/c_v_autoarc_info/newRow',
                method:  'POST',
                params: { 
                },
                success: function(response){
                var text = response.responseText;
                var res =Ext.decode(text);
                var edit = Ext.create('iu.windowObjects');
                edit.prefix='c_v_autoarc_info';
                edit.setTitle('Создание документа:Клиент') ;
                var p=eval('arc_Panel_'+OTAddMode('arc')+'( res.data, false,null )') ;
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
   	    if(CheckOperation('arc.edit')!=0 ){
                var edit = Ext.create('iu.windowObjects');
                edit.prefix='c_v_autoarc_info';
                edit.setTitle('Редактирование документа: Клиент') ;
            var p=eval('arc_Panel_'+OTEditMode('arc')+'( selection.get(\'instanceid\'), false, selection )') ;
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
function arc_Jrnl(){ 

  var arc= Ext.create('Ext.form.Panel', {
       closable: true,
       id:     'arc_jrnl',
       title: 'Клиент',
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
            itemId:'gr_autoarc_info',
            xtype:'g_v_autoarc_info',
            stateful: stateFulSystem,
            stateId:'j_v_autoarc_info',
            layout: 'fit',
            flex: 1,
            store: store_v_autoarc_info
    }] // tabpanel
    }); //Ext.Create
    return arc;
}
Ext.define('ObjectWindow_arc', {
    extend:  'Ext.window.Window',
    maxHeight: 620,
    minHeight: 620,
    minWidth:WidthIf(800),
    maxWidth: WidthIf4(1024),
    constrainHeader :AllowConstraint(),
    layout:  'fit',
    autoShow: true,
    closeAction: 'destroy',
    modal: true,
    iconCls:  'icon-user',
    title:  'Клиент',
    items:[ ]
	});