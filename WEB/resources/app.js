
Ext.Loader.setConfig({
  enabled: true
 });
 

   
 
   Ext.require([
	'Ext.grid.*',
	'Ext.data.*',
	'Ext.util.*',
	'Ext.tab.*',
	'Ext.button.*',
	'Ext.form.*',
	'Ext.state.*',
	'Ext.layout.*',
	'Ext.Action',
	'Ext.resizer.Splitter',
	'Ext.fx.target.Element',
	'Ext.fx.target.Component',
	'Ext.window.Window',
	'Ext.selection.CellModel',
	'Ext.toolbar.Paging'

 ]);
 
 Ext.exclude([
		'Ext.ux.dashboard.*',
		'Ext.ux.dashboard.GoogleRssPart',
		'Ext.ux.dashboard.GoogleRssView',
		'Ext.ux.google.Api',
		'Ext.ux.google.Feeds'
	]);
 
 Ext.Loader.setConfig({enabled: true});

 
var menuPanel;
var leftPanel;
var contentPanel;
var stateFulSystem=true;
var isadmin=0;


Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
    
    // setup the state provider, all state information will be saved to a cookie

	try{
		Ext.state.Manager.setProvider(Ext.create('Ext.state.LocalStorageProvider'));
		stateFulSystem=true;
	}catch( ex ){
		//alert(ex);
		stateFulSystem=false;

	}
	UserLogin();
});

function EnableActions(){

	/*app_actions.each(function(record,idx){
	
	 var name=record.get('menucode'); 
	 var enableMenu = record.get('accesible'); 
	 var comp=null;
	 //console.log('code->'+name);
	 if(enableMenu==-1){
		comp=null;
		//startMenu.items[0].menu.down("#"+name)
		comp=menuPanel.down("#"+name);
		//console.log('comp->'+comp);
		if (comp!=null){
			comp.hidden=false;
			comp.disabled=false;
		    // var comp1=null
			// comp1=comp.up();
			//if(comp1!=null)
			//	if(comp1.hidden)
			//		comp1.show(); 
		}
	 }else{
		comp=null;
		comp=menuPanel.down("#"+name);
		//console.log('comp->'+comp);
		if (comp!=null){
			comp.disabled=true;
			comp.hidden=true;
			
		}
		
	 }
	 
	}
	
	
	
	); */
	//menuPanel.doLayout();
	

	//PrepareRoles();
	
	
};


function MakeExit(btn){
	if(btn=="yes"){
		Ext.Ajax.request(
				{
					url: rootURL+'index.php/app/logout',
					method:  'POST',
					success: function(response){
						document.location=document.location;
						
					}
				}
			);
		
	}
};

var actionEXIT = Ext.create('Ext.Action', {
	itemId:'actionEXIT',
	text: 'Выход',
	iconCls: 'icon-door',
	disabled:false,
	handler: function(){
		Ext.Msg.confirm('Выход из приложения?',
			'Завершить работу с приложением?',
			 MakeExit);
		
	}
});







///////////////// change password //////////////////////





var actionChangePassword = Ext.create('Ext.Action', 
{
	itemId:'actionChangePassword',
	text: 'Сменить пароль',
	iconCls: 'icon-building_key',
	disabled:false,
	handler: function() {
		
		var changePassPanel;
		changePassPanel= new Ext.form.Panel(
		{			
			url:rootURL+'index.php/app/setSPPassword',
			layout:'absolute',
			
			items:[
			{
				xtype:  'textfield',
				fieldLabel:'Старый пароль',
				name:'oldPassword',
				itemId:'oldPassword',
				inputType:'password',
				allowBlank:false,
				value:'',
				x:5,
				y:5,
				labelWidth :170,
				minWidth: 270,
				width: 270,
				maxWidth: 270 //,
				//minLength:8,
				//minLengthText : 'Длинна пароля не менее 8 символов'
			}
				,
			{
				xtype:  'textfield',
				fieldLabel:'Новый пароль',
				name:'newPassword',
				itemId:'newPassword',
				inputType:'password',
				allowBlank:false,
				value:'',
				x:5,
				y:35,
				labelWidth :170,
				minWidth: 270,
				width: 270,
				maxWidth: 270,
				minLength:8,
				minLengthText : 'Длинна пароля не менее 8 символов'
			},
			{
				xtype:  'textfield',
				fieldLabel:'Подтверждение пароля',
				name:'compPassword',
				itemId:'compPassword',
				inputType:'password',
				allowBlank:false,
				value:'',
				x:5,
				y:70,
				labelWidth :170,
				minWidth: 270,
				width: 270,
				maxWidth: 270,
				minLength:8,
				minLengthText : 'Длинна пароля не менее 8 символов'
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
						iconCls:  'icon-accept',
						itemId:  'save',
						text:   'Сохранить',
						disabled: false,
						scope:  this,
						handler:function()
						{
							var form = changePassPanel.getForm();
							if(form.isValid()){
								if(form.getFields().items[2].getValue()==form.getFields().items[1].getValue()){
									form.submit(
										{
											url: rootURL+'index.php/app/setSPPassword',
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
													spData.load();
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
				width:400,
				height:300,
				closable:true,
				modal:true,
				resizable:false,
				plain:true,
				border:false,
				items:[changePassPanel]
			});
			edit.show();
		}
});



function MyInit(){

    /*
    combo_pbar = Ext.create('Ext.ProgressBar', {
        id:'combo_pbar',
        width:300,
        renderTo:'loading'
    });

	*/
    
	var app_info_loaded=false;
		app_info = Ext.create('Ext.data.Store', {
        model:'application_info',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/app/getSessionInfo',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){
		app_info_loaded =true;
		combo_StoreLoaded=true; 
		isadmin=app_info.getAt(0).get("isadmin");
		var comp=menuPanel.down("#sessionInfo"); 
	    comp.setValue('Пользователь: '+app_info.getAt(0).get("info") ); //+ '. (' + app_info.getAt(0).get("rolename") +') Л.С.:' + app_info.getAt(0).get("mailcount") );
		if(isadmin==-1){
			//menuPanel.down('#actionDict').setDisabled(false); 
			menuPanel.down('#actionDict').setVisible(true);
		}else{
			//menuPanel.down('#actionDict').setVisible(false);
		}
	   }
       }
    });
	
	app_info.load();
	
	/*
	combo_Stores.push(app_info);

	app_modes = Ext.create('Ext.data.Store', {
        model:'application_modes',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/app/getModes',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){ combo_StoreLoaded=true; }
       }
    });
	combo_Stores.push(app_modes);

	app_actions = Ext.create('Ext.data.Store', {
        model:'application_actions',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   'index.php/app/getActions',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){app_actions_loaded =true;combo_StoreLoaded=true; EnableActions();}
       }
    });
	combo_Stores.push(app_actions);
	
	
	*/
	
	
	
	var actionarc_my = Ext.create('Ext.Action', {
    itemId:             'actionarc',
    text:               'Настройки',
    iconCls:            'icon-user',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
             handler: function(){
			var j=Ext.getCmp('arc');
			if(j==null){
				j=eval('arc_Panel_main(\''+app_info.getAt(0).get("clientid")+'\', true)');
				j.iconCls='icon-user';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
			
			
			
             }
});

	//adminMenu

    menuPanel = new Ext.panel.Panel({
	    //title:' ',
		// hideHeaders:true,
        xtype:'panel',
        region:'north',
        dockedItems:{
            itemId:'toolbar',
            xtype:'toolbar',
            items:[ 
                {
					itemId:'actionFile',
				    text:'Файл',
                    iconCls:'icon-folder',
                    menu:[ actionChangePassword,actionEXIT] 
				
				}
				,
				{
					itemId:'actionDict',
				    text:'Справочники',
					hidden:true,
                    iconCls:'icon-book_open',
                    menu:[actionarmd,actionarc] 
				
				}
				,
				{
					itemId:'actionAds',
				    text:'Информация',
                    iconCls:'icon-box_picture',
                    menu:[actionarc_my,actionarsms ] 
				
				}
				
				,'->',
				,
				{
					itemId:'sessionInfo',
					xtype:'displayfield',
					iconCls:'icon-information' //,
					//menu:[ actionInfo]
				}
				
							
				
            ]
        }
    });
	
	
    contentPanel = new Ext.tab.Panel({
	    //title:' ',
		// hideHeaders:true,
        region:'center',
        xtype:'tabpanel', // TabPanel itself has no title
		splitter:true,
        activeTab:0      // First tab active by default
    });

	/*statusPanel = new Ext.Panel( {
	 region:'south',
     hideHeaders:true,
	 title:' ',
	 //layout:'hbox',
	 border:false,
	 bbar:
		 Ext.create('Ext.ux.StatusBar', {
			id: 'my-status',
			region:'south',
			// defaults to use when the status is cleared:
			defaultText: 'все хорошо',
			//defaultIconCls: 'icon-bullet_green',

			// values to set initially:
			text: 'Готово',
			//iconCls: 'icon-bullet_green',
			width:600

		})
	
	});
	*/
	
	

	

    var vPort = new Ext.container.Viewport({
            layout:'border',
            renderTo:Ext.getBody(),
            items:[ /*leftPanel,*/ menuPanel, 
                contentPanel] //,statusPanel]
        }
    );

	//combo_LoadNext();
	
	//setInterval(function() { app_info.load() }, 60000);
	
}

var defaultMenuDisabled=false;
var defaultMenuHidden=false;
//////////////////////////////////////////////////////