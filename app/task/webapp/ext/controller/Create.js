sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        create: function(oEvent) {
            // MessageToast.show("Custom handler invokedddddd.");
            debugger
            // this.refresh();
            this.loadFragment({
                id: "excelUploadDialog",
                name: "task.ext.fragment.Create",
                // controller: _onPress(this, 'plant')
            }).then(function (oDialog) {
                oDialog.open();
            // }).then(function (oDialog) {
            //     oDialog.close();
            });
            
        },

        



        }
    });
// 