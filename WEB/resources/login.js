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



regPanel = new Ext.FormPanel(
{
	labelWidth:100,
    url:rootURL+'index.php/app/register',
    frame: true,
	region:'east',
    title: 'Регистрация',
    bodyPadding: 10,
    scrollable:true,
    width:320,

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: 'Информация для входа',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [
            { allowBlank:false, fieldLabel: 'Пользователь', name: 'user', emptyText: 'пользователь' },
            { allowBlank:false, fieldLabel: 'Пароль', name: 'pass', emptyText: 'пароль', inputType: 'password' },
            { allowBlank:false, fieldLabel: 'Подтверждение пароля', name: 'pass2', emptyText: 'пароль', inputType: 'password' }
        ]
    }, {
        xtype: 'fieldset',
        title: 'Контактная информация',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
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
        }]
    }],

    buttons: [{
        text: 'Регистрация',
       iconCls: 'icon-user_add',
        //formBind:true,
        // Function that fires when user clicks the button
        handler:doRegister
    }]
});

login = new Ext.FormPanel({
	
    labelWidth:100,
    url:rootURL+'index.php/app/login',
    frame:true,
	//height:'100%',
	 bodyPadding: 10,
	fit:1,
	width:250,
    title:'Вход',
    defaultType:'textfield',
	region:'center',
    monitorValid:true,
    // Specific attributes for the text fields for username / password.
    // The "name" attribute defines the name of variables sent to the server.
    items:[
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
    ],
    // All the magic happens after the user clicks the button
    buttons:[
        {
            text:'Войти',
			iconCls: 'icon-key_go',
            //formBind:true,
            // Function that fires when user clicks the button
            handler:doLogin
        }
    ]
	


});


// This just creates a window to wrap the login form.
// The login object is passed to the items collection.
var login_win = new Ext.Window({
    title:'AREAL SMS NOTIFIER. Добро пожаловать!',
	itemId:'login_win',
	layout: 'border',
    width: 640,
    height: 420,

	constrainHeader:true,

    closable:false,
    modal:true,
    resizable:true,
    plain:true,
    border:true,
    items:[login,regPanel]
});




function UserLogin(){
	//alert('Login win');
	login_win.show();
}



  
