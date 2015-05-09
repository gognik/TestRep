Ext.require([
    'Ext.selection.CellModel',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*',
    'Ext.ux.CheckColumn'
])

function formatDate(value){
    return value ? Ext.Date.dateFormat(value, 'M d, Y') : '';
}

var Editing = Ext.create ('Ext.grid.plugin.RowEditing');

Ext.define('WorkApp.view.WorkList' ,{
    plugins: [Editing],
    extend: 'Ext.grid.Panel',
    alias: 'widget.WorkList',

    title: 'Дела',
    store: 'WorkStore',

    initComponent: function() {
        this.columns = [
            {header: 'Дело',  dataIndex: 'name', field:{xtype: 'textfield'}, flex: 1},
            {header: 'Дата создания',  dataIndex: 'dateCreate'},
            {header: 'Дата Окончания', dataIndex: 'dateCompleted',
                renderer: formatDate,
                editor: {
                    xtype: 'datefield',
                    format: 'm/d/y',
                    minValue: '01/01/06',
                    disabledDays: [0, 6]
                }
            },
            { header: 'Отметка о выполнении', dataIndex: 'completed',
                editor: new Ext.form.field.ComboBox({
                    typeAhead: true,
                    triggerAction: 'all',
                    selectOnTab: true,
                    store: [
                        ['Выполнено','Выполнено'],
                        ['Невыполнено','Невыполнено']
                    ],
                    lazyRender: true,
                    listClass: 'x-combo-list-small'
                })
            }
        ];

        this.tbar = [
            {
                text:'удалить',
                handler: function(){
                    var selection = this.getView().getSelectionModel().getSelection()[0];
                    // удаление строки из хранилища
                    if (selection) {this.store.remove(selection);}
                }

            }
        ];

        this.callParent(arguments);


    }

});
