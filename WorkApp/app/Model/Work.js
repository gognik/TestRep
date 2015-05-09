Ext.define('WorkApp.model.Work', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'workID', type: 'int'},
        {name:'name', type:'string'},
        {name:'dateCreate', type:'string'},
        {name:'dateCompleted', type:'date'},
        {name:'completed', type:'string'}
           ]
});

