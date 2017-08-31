
var actionarc = Ext.create('Ext.Action', {
    itemId:             'actionarc',
    text:               'Клиент',
    iconCls:            'icon-user',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
             handler: function(){
			var j=Ext.getCmp('arc_jrnl');
			if(j==null){
				j=arc_Jrnl();
				j.iconCls='icon-user';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
             }
});
var actionarlog = Ext.create('Ext.Action', {
    itemId:             'actionarlog',
    text:               'Протокол отсылки оповещений',
    iconCls:            'icon-brick',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
             handler: function(){
			var j=Ext.getCmp('arlog_jrnl');
			if(j==null){
				j=arlog_Jrnl();
				j.iconCls='icon-brick';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
             }
});
var actionarmd = Ext.create('Ext.Action', {
    itemId:             'actionarmd',
    text:               'Справочник',
    iconCls:            'icon-book',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
             handler: function(){
			var j=Ext.getCmp('armd_jrnl');
			if(j==null){
				j=armd_Jrnl();
				j.iconCls='icon-book';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
             }
});
var actionarsms = Ext.create('Ext.Action', {
    itemId:             'actionarsms',
    text:               'СМС',
    iconCls:            'icon-comments',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
             handler: function(){
			var j=Ext.getCmp('arsms_jrnl');
			if(j==null){
				j=arsms_Jrnl();
				j.iconCls='icon-comments';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
             }
});
var actionarlog = Ext.create('Ext.Action', {
        itemId:  'actionarlog',
        text:   'Протокол отсылки оповещений',
        iconCls:  'icon-brick',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
			handler: function(){
			var j=Ext.getCmp('arlog');
			if(j==null){
				j=eval('arlog_Panel_'+OTEditMode('arlog')+'(\'{416B7212-B9EF-4173-9A38-E215B75A2103}\', true)');
        j.iconCls=  'icon-brick';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
        }
    });
var actionarmd = Ext.create('Ext.Action', {
        itemId:  'actionarmd',
        text:   'Справочник',
        iconCls:  'icon-book',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
			handler: function(){
			var j=Ext.getCmp('armd');
			if(j==null){
				j=eval('armd_Panel_'+OTEditMode('armd')+'(\'{44FECC23-35B4-4907-A2B2-1FA0A5790A92}\', true)');
        j.iconCls= 'icon-book';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
        }
    });
var actionbpdi = Ext.create('Ext.Action', {
        itemId:  'actionbpdi',
        text:   'Интерфейс',
        iconCls:  'icon-application_side_tree',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
			handler: function(){
			var j=Ext.getCmp('bpdi');
			if(j==null){
				j=eval('bpdi_Panel_'+OTEditMode('bpdi')+'(\'{B2582636-EC8D-47A2-B57A-CD83E40E8916}\', true)');
        j.iconCls= 'icon-application_side_tree';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
        }
    });
var actionbpdr = Ext.create('Ext.Action', {
        itemId:  'actionbpdr',
        text:   'Роль сотрудника',
        iconCls:  'icon-chart_org_inverted',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
			handler: function(){
			var j=Ext.getCmp('bpdr');
			if(j==null){
				j=eval('bpdr_Panel_'+OTEditMode('bpdr')+'(\'{802E814A-98DC-4D27-AFD6-EC9AA85CFCE2}\', true)');
        j.iconCls= 'icon-chart_org_inverted';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
        }
    });
var actionMTZMetaModel = Ext.create('Ext.Action', {
        itemId:  'actionMTZMetaModel',
        text:   'Спец.: Метамодель системы',
        iconCls:  'icon-brick',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
			handler: function(){
			var j=Ext.getCmp('mtzmetamodel');
			if(j==null){
				j=eval('MTZMetaModel_Panel_'+OTEditMode('MTZMetaModel')+'(\'{88DEEBA4-69B1-454A-992A-FAE3CEBFBCA1}\', true)');
        j.iconCls=  'icon-brick';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
        }
    });
var actionMTZSystem = Ext.create('Ext.Action', {
        itemId:  'actionMTZSystem',
        text:   'Спец.: Системные данные',
        iconCls:  'icon-brick',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
			handler: function(){
			var j=Ext.getCmp('mtzsystem');
			if(j==null){
				j=eval('MTZSystem_Panel_'+OTEditMode('MTZSystem')+'(\'{74BDBFEF-BFEF-EFBD-BFBD-011DEFBFBD43}\', true)');
        j.iconCls=  'icon-brick';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
        }
    });
var actionMTZUsers = Ext.create('Ext.Action', {
        itemId:  'actionMTZUsers',
        text:   'Справочник: пользователи',
        iconCls:  'icon-brick',
			 disabled:defaultMenuDisabled,
			 hidden:defaultMenuHidden,
			handler: function(){
			var j=Ext.getCmp('mtzusers');
			if(j==null){
				j=eval('MTZUsers_Panel_'+OTEditMode('MTZUsers')+'(\'{5EBDBFEF-BFEF-EFBD-BFBD-0E052243EFBF}\', true)');
        j.iconCls=  'icon-brick';
				contentPanel.add(j);
				contentPanel.setActiveTab(j);
			}
			else{
				contentPanel.setActiveTab(j);
			}
        }
    });