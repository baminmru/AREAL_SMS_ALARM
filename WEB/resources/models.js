

 Ext.define('model_arc_info',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'arc_infoid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'login', type: 'string'}
            ,{name:'org', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'family', type: 'string'}
            ,{name:'email', type: 'string'}
            ,{name:'phone', type: 'string'}
        ]
    });


 Ext.define('model_arc_md',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'arc_mdid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'master_fio', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'mymodule', type: 'string'}
            ,{name:'mymodule_grid', type: 'string'}
            ,{name:'deivetype', type: 'string'}
            ,{name:'theaddress', type: 'string'}
        ]
    });


 Ext.define('model_arc_chanel',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'arc_chanelid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'msg_current', type: 'int'}
            ,{name:'msg_current_grid', type: 'string'}
            ,{name:'ch_param', type: 'string'}
            ,{name:'msg_crash', type: 'int'}
            ,{name:'msg_crash_grid', type: 'string'}
            ,{name:'ch_taype', type: 'string'}
            ,{name:'ch_taype_grid', type: 'string'}
            ,{name:'ch_on', type: 'int'}
            ,{name:'ch_on_grid', type: 'string'}
        ]
    });


 Ext.define('model_armd_type',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armd_typeid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_armd_type',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armd_typeid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_armd_type_loaded=false;
    var cmbstore_armd_type = Ext.create('Ext.data.Store', {
        model:'cmbmodel_armd_type',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_armd_type/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_armd_type_loaded =true;}
       }
    });

 Ext.define('model_armd_chaneltype',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armd_chaneltypeid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_armd_chaneltype',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armd_chaneltypeid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_armd_chaneltype_loaded=false;
    var cmbstore_armd_chaneltype = Ext.create('Ext.data.Store', {
        model:'cmbmodel_armd_chaneltype',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_armd_chaneltype/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_armd_chaneltype_loaded =true;}
       }
    });

 Ext.define('model_armd_info',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armd_infoid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'serialno', type: 'string'}
            ,{name:'moduletype', type: 'string'}
            ,{name:'moduletype_grid', type: 'string'}
            ,{name:'phone', type: 'string'}
            ,{name:'makedate', type: 'date',dateFormat:'Y-m-d'}
        ]
    });

 Ext.define('cmbmodel_armd_info',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armd_infoid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_armd_info_loaded=false;
    var cmbstore_armd_info = Ext.create('Ext.data.Store', {
        model:'cmbmodel_armd_info',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_armd_info/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_armd_info_loaded =true;}
       }
    });

 Ext.define('model_arsms_data',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'arsms_dataid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'smstime', type: 'date',dateFormat:'Y-m-d H:i:s'}
            ,{name:'pop_ok', type: 'int'}
            ,{name:'pop_ok_grid', type: 'string'}
            ,{name:'roof_open', type: 'int'}
            ,{name:'roof_open_grid', type: 'string'}
            ,{name:'power_ok', type: 'int'}
            ,{name:'power_ok_grid', type: 'string'}
            ,{name:'serialno', type: 'string'}
            ,{name:'controlcode', type: 'string'}
            ,{name:'temperature', type: 'number'}
            ,{name:'opercode', type: 'string'}
            ,{name:'phone', type: 'string'}
        ]
    });


 Ext.define('model_bpc_info',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'bpc_infoid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_bpc_info',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'bpc_infoid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_bpc_info_loaded=false;
    var cmbstore_bpc_info = Ext.create('Ext.data.Store', {
        model:'cmbmodel_bpc_info',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_bpc_info/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_bpc_info_loaded =true;}
       }
    });

 Ext.define('model_iu_int_modules',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'iu_int_modulesid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'substructobjects', type: 'int'}
            ,{name:'substructobjects_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'visiblecontrol', type: 'int'}
            ,{name:'visiblecontrol_grid', type: 'string'}
            ,{name:'otherdocmode', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'allobjects', type: 'int'}
            ,{name:'allobjects_grid', type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'colegsobject', type: 'int'}
            ,{name:'colegsobject_grid', type: 'string'}
            ,{name:'mydocmode', type: 'string'}
            ,{name:'theicon', type: 'string'}
            ,{name:'controldocmode', type: 'string'}
            ,{name:'groupname', type: 'string'}
        ]
    });


 Ext.define('model_iu_crole',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'iu_croleid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'allowsetuser', type: 'int'}
            ,{name:'allowsetuser_grid', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_iu_crole',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'iu_croleid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_iu_crole_loaded=false;
    var cmbstore_iu_crole = Ext.create('Ext.data.Store', {
        model:'cmbmodel_iu_crole',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_iu_crole/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_iu_crole_loaded =true;}
       }
    });

 Ext.define('model_iu_rcfg_mod',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'iu_rcfg_modid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'controldocmode', type: 'string'}
            ,{name:'visiblecontrol', type: 'int'}
            ,{name:'visiblecontrol_grid', type: 'string'}
            ,{name:'allobjects', type: 'int'}
            ,{name:'allobjects_grid', type: 'string'}
            ,{name:'theicon', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'moduleaccessible', type: 'int'}
            ,{name:'moduleaccessible_grid', type: 'string'}
            ,{name:'colegsobject', type: 'int'}
            ,{name:'colegsobject_grid', type: 'string'}
            ,{name:'otherdocmode', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'mydocmode', type: 'string'}
            ,{name:'groupname', type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'substructobjects', type: 'int'}
            ,{name:'substructobjects_grid', type: 'string'}
        ]
    });


 Ext.define('model_iu_rcfg_docmode',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'iu_rcfg_docmodeid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'allowadd', type: 'int'}
            ,{name:'allowadd_grid', type: 'string'}
            ,{name:'editmode', type: 'string'}
            ,{name:'addmode', type: 'string'}
            ,{name:'the_document', type: 'string'}
            ,{name:'the_document_grid', type: 'string'}
            ,{name:'allowdelete', type: 'int'}
            ,{name:'allowdelete_grid', type: 'string'}
        ]
    });


 Ext.define('model_iu_rcfg_def',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'iu_rcfg_defid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'therole', type: 'string'}
            ,{name:'therole_grid', type: 'string'}
        ]
    });


 Ext.define('model_iu_u_def',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'iu_u_defid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thephone', type: 'string'}
            ,{name:'surname', type: 'string'}
            ,{name:'email', type: 'string'}
            ,{name:'sendtomail', type: 'int'}
            ,{name:'sendtomail_grid', type: 'string'}
            ,{name:'theclient', type: 'string'}
            ,{name:'theclient_grid', type: 'string'}
            ,{name:'login', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'lastname', type: 'string'}
            ,{name:'currole', type: 'string'}
            ,{name:'currole_grid', type: 'string'}
            ,{name:'freelancer', type: 'int'}
            ,{name:'freelancer_grid', type: 'string'}
        ]
    });


 Ext.define('model_mtzext_def',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'mtzext_defid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'exttype', type: 'int'}
            ,{name:'exttype_grid', type: 'string'}
            ,{name:'thedescription', type: 'string'}
        ]
    });


 Ext.define('model_mtzextrel',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'mtzextrelid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'theclassname', type: 'string'}
            ,{name:'theplatform', type: 'int'}
            ,{name:'theplatform_grid', type: 'string'}
            ,{name:'thelibraryname', type: 'string'}
        ]
    });


 Ext.define('model_filterfieldgroup',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'filterfieldgroupid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'name', type: 'string'}
            ,{name:'allowignore', type: 'int'}
            ,{name:'allowignore_grid', type: 'string'}
        ]
    });


 Ext.define('model_fileterfield',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fileterfieldid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'fieldsize', type: 'number'}
            ,{name:'reftotype', type: 'string'}
            ,{name:'reftotype_grid', type: 'string'}
            ,{name:'reftype', type: 'int'}
            ,{name:'reftype_grid', type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'fieldtype', type: 'string'}
            ,{name:'fieldtype_grid', type: 'string'}
            ,{name:'valuearray', type: 'int'}
            ,{name:'valuearray_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'reftopart', type: 'string'}
            ,{name:'reftopart_grid', type: 'string'}
        ]
    });


 Ext.define('model_filters',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'filtersid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thecaption', type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });


 Ext.define('model_journalcolumn',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'journalcolumnid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'columnalignment', type: 'int'}
            ,{name:'columnalignment_grid', type: 'string'}
            ,{name:'groupaggregation', type: 'int'}
            ,{name:'groupaggregation_grid', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'colsort', type: 'int'}
            ,{name:'colsort_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
        ]
    });


 Ext.define('model_jcolumnsource',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'jcolumnsourceid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'viewfield', type: 'string'}
            ,{name:'srcpartview', type: 'string'}
            ,{name:'srcpartview_grid', type: 'string'}
        ]
    });


 Ext.define('model_journalsrc',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'journalsrcid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'viewalias', type: 'string'}
            ,{name:'onrun', type: 'int'}
            ,{name:'onrun_grid', type: 'string'}
            ,{name:'openmode', type: 'string'}
            ,{name:'spartview', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_journalsrc',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'journalsrcid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_journalsrc_loaded=false;
    var cmbstore_journalsrc = Ext.create('Ext.data.Store', {
        model:'cmbmodel_journalsrc',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_journalsrc/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_journalsrc_loaded =true;}
       }
    });

 Ext.define('model_journal',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'journalid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'jrnliconcls', type: 'string'}
            ,{name:'the_alias', type: 'string'}
            ,{name:'usefavorites', type: 'int'}
            ,{name:'usefavorites_grid', type: 'string'}
        ]
    });


 Ext.define('model_genpackage',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'genpackageid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });


 Ext.define('model_generator_target',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'generator_targetid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'generatorstyle', type: 'int'}
            ,{name:'generatorstyle_grid', type: 'string'}
            ,{name:'queuename', type: 'string'}
            ,{name:'thedevelopmentenv', type: 'int'}
            ,{name:'thedevelopmentenv_grid', type: 'string'}
            ,{name:'generatorprogid', type: 'string'}
            ,{name:'targettype', type: 'int'}
            ,{name:'targettype_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_generator_target',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'generator_targetid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_generator_target_loaded=false;
    var cmbstore_generator_target = Ext.create('Ext.data.Store', {
        model:'cmbmodel_generator_target',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_generator_target/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_generator_target_loaded =true;}
       }
    });

 Ext.define('model_genreference',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'genreferenceid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'refclassid', type: 'string'}
            ,{name:'versionmajor', type: 'number'}
            ,{name:'name', type: 'string'}
            ,{name:'versionminor', type: 'number'}
        ]
    });


 Ext.define('model_genmanualcode',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'genmanualcodeid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'code', type: 'string'}
            ,{name:'the_alias', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });


 Ext.define('model_gencontrols',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'gencontrolsid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'versionminor', type: 'number'}
            ,{name:'versionmajor', type: 'number'}
            ,{name:'controlprogid', type: 'string'}
            ,{name:'controlclassid', type: 'string'}
        ]
    });


 Ext.define('model_localizeinfo',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'localizeinfoid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'langfull', type: 'string'}
            ,{name:'langshort', type: 'string'}
        ]
    });


 Ext.define('model_fieldtype',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldtypeid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'delayedsave', type: 'int'}
            ,{name:'delayedsave_grid', type: 'string'}
            ,{name:'typestyle', type: 'int'}
            ,{name:'typestyle_grid', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'gridsorttype', type: 'int'}
            ,{name:'gridsorttype_grid', type: 'string'}
            ,{name:'the_comment', type: 'string'}
            ,{name:'allowsize', type: 'int'}
            ,{name:'allowsize_grid', type: 'string'}
            ,{name:'allowlikesearch', type: 'int'}
            ,{name:'allowlikesearch_grid', type: 'string'}
            ,{name:'maximum', type: 'string'}
            ,{name:'minimum', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_fieldtype',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldtypeid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_fieldtype_loaded=false;
    var cmbstore_fieldtype = Ext.create('Ext.data.Store', {
        model:'cmbmodel_fieldtype',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_fieldtype/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_fieldtype_loaded =true;}
       }
    });

 Ext.define('model_enumitem',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'enumitemid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'nameincode', type: 'string'}
            ,{name:'namevalue', type: 'number'}
        ]
    });


 Ext.define('model_fieldtypemap',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldtypemapid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'fixedsize', type: 'number'}
            ,{name:'stoagetype', type: 'string'}
            ,{name:'target', type: 'string'}
            ,{name:'target_grid', type: 'string'}
        ]
    });


 Ext.define('model_sharedmethod',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'sharedmethodid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'the_comment', type: 'string'}
            ,{name:'returntype', type: 'string'}
            ,{name:'returntype_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_sharedmethod',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'sharedmethodid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_sharedmethod_loaded=false;
    var cmbstore_sharedmethod = Ext.create('Ext.data.Store', {
        model:'cmbmodel_sharedmethod',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_sharedmethod/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_sharedmethod_loaded =true;}
       }
    });

 Ext.define('model_script',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'scriptid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'code', type: 'string'}
            ,{name:'target', type: 'string'}
            ,{name:'target_grid', type: 'string'}
        ]
    });


 Ext.define('model_parameters',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'parametersid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'reftopart', type: 'string'}
            ,{name:'reftopart_grid', type: 'string'}
            ,{name:'outparam', type: 'int'}
            ,{name:'outparam_grid', type: 'string'}
            ,{name:'datasize', type: 'number'}
            ,{name:'name', type: 'string'}
            ,{name:'typeofparm', type: 'string'}
            ,{name:'typeofparm_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'referencetype', type: 'int'}
            ,{name:'referencetype_grid', type: 'string'}
            ,{name:'allownull', type: 'int'}
            ,{name:'allownull_grid', type: 'string'}
            ,{name:'reftotype', type: 'string'}
            ,{name:'reftotype_grid', type: 'string'}
        ]
    });


 Ext.define('model_objecttype',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'objecttypeid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'objiconcls', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'useownership', type: 'int'}
            ,{name:'useownership_grid', type: 'string'}
            ,{name:'ondelete', type: 'string'}
            ,{name:'ondelete_grid', type: 'string'}
            ,{name:'usearchiving', type: 'int'}
            ,{name:'usearchiving_grid', type: 'string'}
            ,{name:'replicatype', type: 'int'}
            ,{name:'replicatype_grid', type: 'string'}
            ,{name:'oncreate', type: 'string'}
            ,{name:'oncreate_grid', type: 'string'}
            ,{name:'commitfullobject', type: 'int'}
            ,{name:'commitfullobject_grid', type: 'string'}
            ,{name:'allowreftoobject', type: 'int'}
            ,{name:'allowreftoobject_grid', type: 'string'}
            ,{name:'package', type: 'string'}
            ,{name:'package_grid', type: 'string'}
            ,{name:'onrun', type: 'string'}
            ,{name:'onrun_grid', type: 'string'}
            ,{name:'the_comment', type: 'string'}
            ,{name:'chooseview', type: 'string'}
            ,{name:'chooseview_grid', type: 'string'}
            ,{name:'issingleinstance', type: 'int'}
            ,{name:'issingleinstance_grid', type: 'string'}
            ,{name:'allowsearch', type: 'int'}
            ,{name:'allowsearch_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_objecttype',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'objecttypeid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_objecttype_loaded=false;
    var cmbstore_objecttype = Ext.create('Ext.data.Store', {
        model:'cmbmodel_objecttype',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_objecttype/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_objecttype_loaded =true;}
       }
    });

 Ext.define('model_objstatus',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'objstatusid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'isarchive', type: 'int'}
            ,{name:'isarchive_grid', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'the_comment', type: 'string'}
            ,{name:'isstartup', type: 'int'}
            ,{name:'isstartup_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_objstatus',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'objstatusid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_objstatus_loaded=false;
    var cmbstore_objstatus = Ext.create('Ext.data.Store', {
        model:'cmbmodel_objstatus',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_objstatus/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_objstatus_loaded =true;}
       }
    });

 Ext.define('model_nextstate',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'nextstateid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thestate', type: 'string'}
            ,{name:'thestate_grid', type: 'string'}
        ]
    });


 Ext.define('model_objectmode',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'objectmodeid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'defaultmode', type: 'int'}
            ,{name:'defaultmode_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_objectmode',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'objectmodeid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_objectmode_loaded=false;
    var cmbstore_objectmode = Ext.create('Ext.data.Store', {
        model:'cmbmodel_objectmode',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_objectmode/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_objectmode_loaded =true;}
       }
    });

 Ext.define('model_structrestriction',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'structrestrictionid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'allowadd', type: 'int'}
            ,{name:'allowadd_grid', type: 'string'}
            ,{name:'allowdelete', type: 'int'}
            ,{name:'allowdelete_grid', type: 'string'}
            ,{name:'allowread', type: 'int'}
            ,{name:'allowread_grid', type: 'string'}
            ,{name:'struct', type: 'string'}
            ,{name:'struct_grid', type: 'string'}
            ,{name:'allowedit', type: 'int'}
            ,{name:'allowedit_grid', type: 'string'}
        ]
    });


 Ext.define('model_methodrestriction',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'methodrestrictionid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'isrestricted', type: 'int'}
            ,{name:'isrestricted_grid', type: 'string'}
            ,{name:'part', type: 'string'}
            ,{name:'part_grid', type: 'string'}
            ,{name:'method', type: 'string'}
            ,{name:'method_grid', type: 'string'}
        ]
    });


 Ext.define('model_fieldrestriction',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldrestrictionid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'mandatoryfield', type: 'int'}
            ,{name:'mandatoryfield_grid', type: 'string'}
            ,{name:'thefield', type: 'string'}
            ,{name:'thefield_grid', type: 'string'}
            ,{name:'thepart', type: 'string'}
            ,{name:'thepart_grid', type: 'string'}
            ,{name:'allowmodify', type: 'int'}
            ,{name:'allowmodify_grid', type: 'string'}
            ,{name:'allowread', type: 'int'}
            ,{name:'allowread_grid', type: 'string'}
        ]
    });


 Ext.define('model_typemenu',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'typemenuid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'tooltip', type: 'string'}
            ,{name:'ismenuitem', type: 'int'}
            ,{name:'ismenuitem_grid', type: 'string'}
            ,{name:'hotkey', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'istoolbarbutton', type: 'int'}
            ,{name:'istoolbarbutton_grid', type: 'string'}
            ,{name:'the_action', type: 'string'}
            ,{name:'the_action_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_typemenu',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'typemenuid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_typemenu_loaded=false;
    var cmbstore_typemenu = Ext.create('Ext.data.Store', {
        model:'cmbmodel_typemenu',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_typemenu/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_typemenu_loaded =true;}
       }
    });

 Ext.define('model_instancevalidator',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'instancevalidatorid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'target', type: 'string'}
            ,{name:'target_grid', type: 'string'}
            ,{name:'code', type: 'string'}
        ]
    });


 Ext.define('model_part',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name: 'parentrowid',type: 'string'}
            ,{name:'particoncls', type: 'string'}
            ,{name:'rulebrief', type: 'string'}
            ,{name:'integerpkey', type: 'int'}
            ,{name:'integerpkey_grid', type: 'string'}
            ,{name:'manualregister', type: 'int'}
            ,{name:'manualregister_grid', type: 'string'}
            ,{name:'ondelete', type: 'string'}
            ,{name:'ondelete_grid', type: 'string'}
            ,{name:'addbehaivor', type: 'int'}
            ,{name:'addbehaivor_grid', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'onsave', type: 'string'}
            ,{name:'onsave_grid', type: 'string'}
            ,{name:'oncreate', type: 'string'}
            ,{name:'oncreate_grid', type: 'string'}
            ,{name:'the_comment', type: 'string'}
            ,{name:'usearchiving', type: 'int'}
            ,{name:'usearchiving_grid', type: 'string'}
            ,{name:'onrun', type: 'string'}
            ,{name:'onrun_grid', type: 'string'}
            ,{name:'extenderobject', type: 'string'}
            ,{name:'extenderobject_grid', type: 'string'}
            ,{name:'nolog', type: 'int'}
            ,{name:'nolog_grid', type: 'string'}
            ,{name:'shablonbrief', type: 'string'}
            ,{name:'parttype', type: 'int'}
            ,{name:'parttype_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'isjormalchange', type: 'int'}
            ,{name:'isjormalchange_grid', type: 'string'}
            ,{name:'caption', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_part',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_part_loaded=false;
    var cmbstore_part = Ext.create('Ext.data.Store', {
        model:'cmbmodel_part',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_part/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_part_loaded =true;}
       }
    });

 Ext.define('model_partmenu',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partmenuid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'the_action', type: 'string'}
            ,{name:'the_action_grid', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'ismenuitem', type: 'int'}
            ,{name:'ismenuitem_grid', type: 'string'}
            ,{name:'istoolbarbutton', type: 'int'}
            ,{name:'istoolbarbutton_grid', type: 'string'}
            ,{name:'hotkey', type: 'string'}
            ,{name:'tooltip', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_partmenu',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partmenuid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_partmenu_loaded=false;
    var cmbstore_partmenu = Ext.create('Ext.data.Store', {
        model:'cmbmodel_partmenu',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_partmenu/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_partmenu_loaded =true;}
       }
    });

 Ext.define('model_partparammap',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partparammapid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'paramname', type: 'string'}
            ,{name:'fieldname', type: 'string'}
            ,{name:'noedit', type: 'int'}
            ,{name:'noedit_grid', type: 'string'}
        ]
    });


 Ext.define('model_partview',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partviewid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'filterfield2', type: 'string'}
            ,{name:'filterfield0', type: 'string'}
            ,{name:'the_alias', type: 'string'}
            ,{name:'forchoose', type: 'int'}
            ,{name:'forchoose_grid', type: 'string'}
            ,{name:'filterfield1', type: 'string'}
            ,{name:'filterfield3', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_partview',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partviewid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_partview_loaded=false;
    var cmbstore_partview = Ext.create('Ext.data.Store', {
        model:'cmbmodel_partview',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_partview/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_partview_loaded =true;}
       }
    });

 Ext.define('model_viewcolumn',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'viewcolumnid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'forcombo', type: 'int'}
            ,{name:'forcombo_grid', type: 'string'}
            ,{name:'frompart', type: 'string'}
            ,{name:'frompart_grid', type: 'string'}
            ,{name:'aggregation', type: 'int'}
            ,{name:'aggregation_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'the_alias', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'field', type: 'string'}
            ,{name:'field_grid', type: 'string'}
            ,{name:'expression', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_viewcolumn',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'viewcolumnid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_viewcolumn_loaded=false;
    var cmbstore_viewcolumn = Ext.create('Ext.data.Store', {
        model:'cmbmodel_viewcolumn',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_viewcolumn/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_viewcolumn_loaded =true;}
       }
    });

 Ext.define('model_partview_lnk',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'partview_lnkid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thejoindestination', type: 'string'}
            ,{name:'thejoindestination_grid', type: 'string'}
            ,{name:'handjoin', type: 'string'}
            ,{name:'seq', type: 'number'}
            ,{name:'thejoinsource', type: 'string'}
            ,{name:'thejoinsource_grid', type: 'string'}
            ,{name:'theview', type: 'string'}
            ,{name:'theview_grid', type: 'string'}
            ,{name:'reftype', type: 'int'}
            ,{name:'reftype_grid', type: 'string'}
        ]
    });


 Ext.define('model_validator',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'validatorid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'code', type: 'string'}
            ,{name:'target', type: 'string'}
            ,{name:'target_grid', type: 'string'}
        ]
    });


 Ext.define('model_uniqueconstraint',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'uniqueconstraintid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'perparent', type: 'int'}
            ,{name:'perparent_grid', type: 'string'}
        ]
    });


 Ext.define('model_constraintfield',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'constraintfieldid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thefield', type: 'string'}
            ,{name:'thefield_grid', type: 'string'}
        ]
    });


 Ext.define('model_extenderinterface',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'extenderinterfaceid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'theconfig', type: 'string'}
            ,{name:'targetplatform', type: 'string'}
            ,{name:'targetplatform_grid', type: 'string'}
            ,{name:'theobject', type: 'string'}
            ,{name:'thename', type: 'string'}
        ]
    });


 Ext.define('model_field',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'allownull', type: 'int'}
            ,{name:'allownull_grid', type: 'string'}
            ,{name:'themask', type: 'string'}
            ,{name:'reftopart', type: 'string'}
            ,{name:'reftopart_grid', type: 'string'}
            ,{name:'tabname', type: 'string'}
            ,{name:'thenumerator', type: 'string'}
            ,{name:'thenumerator_grid', type: 'string'}
            ,{name:'shablonbrief', type: 'string'}
            ,{name:'datasize', type: 'number'}
            ,{name:'caption', type: 'string'}
            ,{name:'fieldgroupbox', type: 'string'}
            ,{name:'thestyle', type: 'string'}
            ,{name:'zonetemplate', type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'reftotype', type: 'string'}
            ,{name:'reftotype_grid', type: 'string'}
            ,{name:'isbrief', type: 'int'}
            ,{name:'isbrief_grid', type: 'string'}
            ,{name:'fieldtype', type: 'string'}
            ,{name:'fieldtype_grid', type: 'string'}
            ,{name:'isautonumber', type: 'int'}
            ,{name:'isautonumber_grid', type: 'string'}
            ,{name:'referencetype', type: 'int'}
            ,{name:'referencetype_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
            ,{name:'internalreference', type: 'int'}
            ,{name:'internalreference_grid', type: 'string'}
            ,{name:'createrefonly', type: 'int'}
            ,{name:'createrefonly_grid', type: 'string'}
            ,{name:'istabbrief', type: 'int'}
            ,{name:'istabbrief_grid', type: 'string'}
            ,{name:'thenameclass', type: 'string'}
            ,{name:'numberdatefield', type: 'string'}
            ,{name:'numberdatefield_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_field',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_field_loaded=false;
    var cmbstore_field = Ext.create('Ext.data.Store', {
        model:'cmbmodel_field',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_field/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_field_loaded =true;}
       }
    });

 Ext.define('model_fldextenders',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fldextendersid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'theobject', type: 'string'}
            ,{name:'thename', type: 'string'}
            ,{name:'targetplatform', type: 'string'}
            ,{name:'targetplatform_grid', type: 'string'}
            ,{name:'theconfig', type: 'string'}
        ]
    });


 Ext.define('model_fieldsrcdef',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldsrcdefid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'connectionstring', type: 'string'}
            ,{name:'descriptionstring', type: 'string'}
            ,{name:'sortfield', type: 'string'}
            ,{name:'provider', type: 'string'}
            ,{name:'filterstring', type: 'string'}
            ,{name:'datasource', type: 'string'}
            ,{name:'dontshowdialog', type: 'int'}
            ,{name:'dontshowdialog_grid', type: 'string'}
            ,{name:'briefstring', type: 'string'}
            ,{name:'idfield', type: 'string'}
        ]
    });


 Ext.define('model_dinamicfilterscript',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'dinamicfilterscriptid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'target', type: 'string'}
            ,{name:'target_grid', type: 'string'}
            ,{name:'code', type: 'string'}
        ]
    });


 Ext.define('model_fieldexpression',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldexpressionid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'code', type: 'string'}
            ,{name:'target', type: 'string'}
            ,{name:'target_grid', type: 'string'}
        ]
    });


 Ext.define('model_fieldvalidator',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldvalidatorid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'code', type: 'string'}
            ,{name:'target', type: 'string'}
            ,{name:'target_grid', type: 'string'}
        ]
    });


 Ext.define('model_fieldmenu',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldmenuid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'hotkey', type: 'string'}
            ,{name:'tooltip', type: 'string'}
            ,{name:'actionid', type: 'string'}
            ,{name:'actionid_grid', type: 'string'}
            ,{name:'ismenuitem', type: 'int'}
            ,{name:'ismenuitem_grid', type: 'string'}
            ,{name:'istoolbarbutton', type: 'int'}
            ,{name:'istoolbarbutton_grid', type: 'string'}
        ]
    });


 Ext.define('model_fieldparammap',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'fieldparammapid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'noedit', type: 'int'}
            ,{name:'noedit_grid', type: 'string'}
            ,{name:'paramname', type: 'string'}
            ,{name:'fieldname', type: 'string'}
        ]
    });


 Ext.define('model_mtzapp',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'mtzappid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'dbname', type: 'string'}
            ,{name:'thecomment', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_mtzapp',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'mtzappid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_mtzapp_loaded=false;
    var cmbstore_mtzapp = Ext.create('Ext.data.Store', {
        model:'cmbmodel_mtzapp',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_mtzapp/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_mtzapp_loaded =true;}
       }
    });

 Ext.define('model_parentpackage',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'parentpackageid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'package', type: 'string'}
            ,{name:'package_grid', type: 'string'}
        ]
    });


 Ext.define('model_rptstruct',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'rptstructid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name: 'parentrowid',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'caption', type: 'string'}
        ]
    });


 Ext.define('model_rptfields',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'rptfieldsid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'fieldtype', type: 'string'}
            ,{name:'fieldtype_grid', type: 'string'}
            ,{name:'fieldsize', type: 'number'}
            ,{name:'caption', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });


 Ext.define('model_rptformula',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'rptformulaid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'platform', type: 'string'}
            ,{name:'platform_grid', type: 'string'}
            ,{name:'code', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });


 Ext.define('model_reports',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'reportsid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'preparemethod', type: 'string'}
            ,{name:'preparemethod_grid', type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'reporttype', type: 'int'}
            ,{name:'reporttype_grid', type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'reportfile', type: 'string'}
            ,{name:'reportfile_ext', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'reportview', type: 'string'}
            ,{name:'thereportext', type: 'string'}
            ,{name:'thereportext_grid', type: 'string'}
        ]
    });


 Ext.define('model_the_session',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'the_sessionid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'login', type: 'string'}
            ,{name:'userrole', type: 'string'}
            ,{name:'userrole_grid', type: 'string'}
            ,{name:'lastaccess', type: 'date',dateFormat:'Y-m-d H:i:s'}
            ,{name:'usersid', type: 'string'}
            ,{name:'usersid_grid', type: 'string'}
            ,{name:'closed', type: 'int'}
            ,{name:'closed_grid', type: 'string'}
            ,{name:'startat', type: 'date',dateFormat:'Y-m-d H:i:s'}
            ,{name:'closedat', type: 'date',dateFormat:'Y-m-d H:i:s'}
            ,{name:'applicationid', type: 'string'}
            ,{name:'applicationid_grid', type: 'string'}
            ,{name:'lang', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_the_session',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'the_sessionid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_the_session_loaded=false;
    var cmbstore_the_session = Ext.create('Ext.data.Store', {
        model:'cmbmodel_the_session',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_the_session/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_the_session_loaded =true;}
       }
    });

 Ext.define('model_sysrefcache',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'sysrefcacheid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'modulename', type: 'string'}
            ,{name:'objectownerid', type: 'string'}
            ,{name:'sessionid', type: 'string'}
            ,{name:'sessionid_grid', type: 'string'}
            ,{name:'cachetype', type: 'int'}
            ,{name:'cachetype_grid', type: 'string'}
        ]
    });


 Ext.define('model_syslog',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'syslogid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'the_resource', type: 'string'}
            ,{name:'verb', type: 'string'}
            ,{name:'loginstanceid', type: 'string'}
            ,{name:'logstructid', type: 'string'}
            ,{name:'thesession', type: 'string'}
            ,{name:'thesession_grid', type: 'string'}
        ]
    });


 Ext.define('model_users',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'usersid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'family', type: 'string'}
            ,{name:'login', type: 'string'}
            ,{name:'password', type: 'string'}
            ,{name:'email', type: 'string'}
            ,{name:'phone', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'domainame', type: 'string'}
            ,{name:'localphone', type: 'string'}
            ,{name:'surname', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_users',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'usersid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_users_loaded=false;
    var cmbstore_users = Ext.create('Ext.data.Store', {
        model:'cmbmodel_users',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_users/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_users_loaded =true;}
       }
    });

 Ext.define('model_groups',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'groupsid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'adgroup', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_groups',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'groupsid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_groups_loaded=false;
    var cmbstore_groups = Ext.create('Ext.data.Store', {
        model:'cmbmodel_groups',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_groups/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_groups_loaded =true;}
       }
    });

 Ext.define('model_groupuser',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'groupuserid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'theuser', type: 'string'}
            ,{name:'theuser_grid', type: 'string'}
        ]
    });


 Ext.define('model_armjournal',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armjournalid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thejournal', type: 'string'}
            ,{name:'thejournal_grid', type: 'string'}
        ]
    });


 Ext.define('model_armjrnlrep',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armjrnlrepid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'repname', type: 'string'}
            ,{name:'thereport', type: 'string'}
            ,{name:'thereport_grid', type: 'string'}
        ]
    });


 Ext.define('model_armjrnlrun',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armjrnlrunid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'theextention', type: 'string'}
            ,{name:'theextention_grid', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });


 Ext.define('model_armjrnladd',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armjrnladdid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'theextention', type: 'string'}
            ,{name:'theextention_grid', type: 'string'}
            ,{name:'name', type: 'string'}
        ]
    });


 Ext.define('model_entrypoints',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'entrypointsid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name: 'parentrowid',type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'allowprint', type: 'int'}
            ,{name:'allowprint_grid', type: 'string'}
            ,{name:'iconfile', type: 'string'}
            ,{name:'allowfilter', type: 'int'}
            ,{name:'allowfilter_grid', type: 'string'}
            ,{name:'thefilter', type: 'string'}
            ,{name:'thefilter_grid', type: 'string'}
            ,{name:'journalfixedquery', type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'report', type: 'string'}
            ,{name:'report_grid', type: 'string'}
            ,{name:'document', type: 'string'}
            ,{name:'document_grid', type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'theextention', type: 'string'}
            ,{name:'theextention_grid', type: 'string'}
            ,{name:'arm', type: 'string'}
            ,{name:'arm_grid', type: 'string'}
            ,{name:'objecttype', type: 'string'}
            ,{name:'objecttype_grid', type: 'string'}
            ,{name:'allowadd', type: 'int'}
            ,{name:'allowadd_grid', type: 'string'}
            ,{name:'journal', type: 'string'}
            ,{name:'journal_grid', type: 'string'}
            ,{name:'method', type: 'string'}
            ,{name:'method_grid', type: 'string'}
            ,{name:'allowedit', type: 'int'}
            ,{name:'allowedit_grid', type: 'string'}
            ,{name:'allowdel', type: 'int'}
            ,{name:'allowdel_grid', type: 'string'}
            ,{name:'astoolbaritem', type: 'int'}
            ,{name:'astoolbaritem_grid', type: 'string'}
            ,{name:'actiontype', type: 'int'}
            ,{name:'actiontype_grid', type: 'string'}
            ,{name:'sequence', type: 'number'}
        ]
    });


 Ext.define('model_epfilterlink',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'epfilterlinkid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'rowsource', type: 'string'}
            ,{name:'theexpression', type: 'string'}
            ,{name:'filterfield', type: 'string'}
        ]
    });


 Ext.define('model_workplace',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'workplaceid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'thecomment', type: 'string'}
            ,{name:'theversion', type: 'string'}
            ,{name:'caption', type: 'string'}
            ,{name:'theplatform', type: 'int'}
            ,{name:'theplatform_grid', type: 'string'}
        ]
    });

 Ext.define('cmbmodel_workplace',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'workplaceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
        ]
    });
    var cmbstore_workplace_loaded=false;
    var cmbstore_workplace = Ext.create('Ext.data.Store', {
        model:'cmbmodel_workplace',
        autoLoad: false,
        autoSync: false,
        proxy: {
            type:   'ajax',
                url:   rootURL+'index.php/c_workplace/getRows',
            reader: {
                type:   'json'
                ,rootProperty:  'data'
                ,successProperty:  'success'
                ,messageProperty:  'msg'
            }
        },
       listeners: {
       'load': function(){combo_workplace_loaded =true;}
       }
    });

 Ext.define('model_armtypes',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'armtypesid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'thedocumenttype', type: 'string'}
            ,{name:'thedocumenttype_grid', type: 'string'}
        ]
    });


 Ext.define('model_num_zones',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'num_zonesid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'zonemask', type: 'string'}
        ]
    });


 Ext.define('model_num_values',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'num_valuesid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'parentid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'the_value', type: 'number'}
            ,{name:'ownerrowid', type: 'string'}
            ,{name:'ownerpartname', type: 'string'}
        ]
    });


 Ext.define('model_num_head',{
            extend:'Ext.data.Model',
        fields: [
            {name: 'num_headid',type: 'string'}
            ,{name: 'id',type: 'string'}
            ,{name: 'instanceid',type: 'string'}
            ,{name: 'brief',type: 'string'}
            ,{name:'name', type: 'string'}
            ,{name:'shema', type: 'int'}
            ,{name:'shema_grid', type: 'string'}
        ]
    });
