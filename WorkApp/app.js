Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'WorkApp',
    appFolder: 'app',
    controllers: ['Works'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'WorkList'
            }
        });
    }
});
