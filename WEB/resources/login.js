var logged = false;
var login=null;
var regPanel=null;

function doLogin()
{
		var form=login.getForm();
		if (!form.isValid()) {
            return;
        }
		form.submit({
			method:'POST',
			waitTitle:'Соединение',
			waitMsg:'Отсылка данных...', 
			success:function () {
				logged = true;
				login.ownerCt.close();
				MyInit();
			},

			failure:function (form, action) {
				if (action.failureType == 'server') {
					//obj = Ext.util.JSON.decode(action.response.responseText);
					Ext.Msg.alert('Ошибка авторизации!', 'Неверный пароль или такой пользователь не найден.');
				} else {
					Ext.Msg.alert('Внимание!', 'Сервер недоступен : ' + action.response.responseText);
				}
				logged = false;
			}
		});
    
}


function doRegister()
{
		var form=regPanel.getForm();
		if (!form.isValid()) {
            return;
        }
		form.submit({
			method:'POST',
			waitTitle:'Соединение',
			waitMsg:'Отсылка данных...', 
			success:function () {
				logged = true;
				regPanel.ownerCt.close();
				MyInit();
			},

			failure:function (form, action) {
				if (action.failureType == 'server') {
					//obj = Ext.util.JSON.decode(action.response.responseText);
					Ext.Msg.alert('Ошибка регистрации!', action.response.responseText);
				} else {
					Ext.Msg.alert('Внимание!', 'Сервер недоступен : ' + action.response.responseText);
				}
				logged = false;
			}
		});
    
}



login = new Ext.FormPanel({
	
    labelWidth:WidthIf2(100),
    url:rootURL+'index.php/app/login',
    frame:true,
	bodyPadding: 10,
	x:5,
	y:5,
	width: WidthIf(400,30),
    title:'Вход',
    defaultType:'textfield',
	//region:'north',
    monitorValid:true,
	height:240,
	
	fieldDefaults: {
        labelAlign: 'top',
        labelWidth: 115,
        msgTarget: 'side'
    },
    // Specific attributes for the text fields for username / password.
    // The "name" attribute defines the name of variables sent to the server.
    items:[
		{
			 scale:'large',
			 xtype:'button',	
            text:'Войти',
			iconCls: 'icon-key_go',
            //formBind:false,
            // Function that fires when user clicks the button
            handler:doLogin
        },
		{
        xtype: 'fieldset',
        title: 'Параметры для входа',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
		items: [
		 
        {
            fieldLabel:'Пользователь',
            name:'loginUsername',
			emptyText: 'пользователь',
			width: WidthIf(380,10),
            allowBlank:false,
            value:''
			,listeners: {
				specialkey: function(field, e){
					if (e.getKey() == e.ENTER) {
						doLogin();
					}
				}
			}
        },
        {
            fieldLabel:'Пароль',
            name:'loginPassword',
            inputType:'password',
			emptyText: 'пароль',
            allowBlank:false,
			width: WidthIf(380,10),
            value:''
			,listeners: {
				specialkey: function(field, e){
					if (e.getKey() == e.ENTER) {
						doLogin();
					}
				}
			}
        }
		]
		}
		
    ]
});


regPanel = new Ext.FormPanel(
{
	labelWidth:100,
    url:rootURL+'index.php/app/register',
    frame: true,
	//region:'center',
	x:5,
	y:240,
    title: 'Регистрация',
    bodyPadding: 10,
    scrollable:false,
    width: WidthIf(400,30),
	height:630,


    fieldDefaults: {
        labelAlign: 'top',
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [
	{
		scale:'large',
		xtype:'button',	
        text: 'Регистрация',
        iconCls: 'icon-user_add',
        // Function that fires when user clicks the button
        handler:doRegister
    },
	{
        xtype: 'fieldset',
        title: 'Информация для входа',
        defaultType: 'textfield',
        defaults: {
           // anchor: '100%'
        },

        items: [
            { allowBlank:false, fieldLabel: 'Пользователь', name: 'user', emptyText: 'пользователь',  width: WidthIf(380,10) },
            { allowBlank:false, fieldLabel: 'Пароль', name: 'pass', emptyText: 'пароль', inputType: 'password' ,  width: WidthIf(380,10)},
            { allowBlank:false, fieldLabel: 'Подтверждение пароля', name: 'pass2', emptyText: 'пароль', inputType: 'password' ,  width: WidthIf(380,10)}
        ]
    }, {
        xtype: 'fieldset',
        title: 'Контактная информация',

        defaultType: 'textfield',
        defaults: {
           // anchor: '100%'
        },

        items: [{allowBlank:false,
            fieldLabel: 'Имя',
            emptyText: 'Имя',
            name: 'first'
        }, {allowBlank:false,
            fieldLabel: 'Фамилия',
            emptyText: 'Фамилия',
            name: 'last'
        }, {allowBlank:false,
            fieldLabel: 'Телефон',
			 emptyText: 'телефон',
            name: 'phone'
        }, {allowBlank:false,
            fieldLabel: 'E-mail',
            name: 'email',
            vtype: 'email',
			 emptyText: 'e-mail'
        } 
		]
    }
	
	]
});


// This just creates a window to wrap the login form.
// The login object is passed to the items collection.
var login_win = new Ext.Window({
    title:TextIf('AREAL SMS NOTIFIER. Добро пожаловать!','SMS NOTIFIER'),
	itemId:'login_win',
	layout: 'absolute',
    width: WidthIf(470),
    height: 920,
	y:0,
	x:(WidthIf(3000)-WidthIf(470))/2,
	constrainHeader:true, //AllowConstraint(),
    closable:false,
    modal:true,
    resizable:false,
    plain:true,
    border:true,
	//autoScroll:true,
    items:[login,regPanel]
});




function UserLogin(){
	//alert('Login win');
	login_win.show();
}



  
