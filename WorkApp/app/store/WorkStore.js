Ext.define('WorkApp.store.WorkStore', {
    extend: 'Ext.data.Store',
    model: 'WorkApp.model.Work',
    autoLoad: true,
    autoSync: true,
    storeId: 'WorkStore',
    proxy: {
        type: 'rest',
        url: 'app/data/works.json',
        reader: {
            type: 'json',
            root: 'works'
            //successProperty: 'success'
        },
        writer: {
            type: 'json',
            root: 'works'
            //successProperty: 'success'
        }
    }
});
