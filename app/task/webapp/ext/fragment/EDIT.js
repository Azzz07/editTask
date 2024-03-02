// sap.ui.define([
//     "sap/m/MessageToast",
//     "sap/ui/core/mvc/Controller",
// 	"sap/m/Dialog",
// 	"sap/m/List",
// 	"sap/m/StandardListItem",
// 	"sap/m/Button"
// ], function(MessageToast,Controller, Dialog, List, StandardListItem, Button) {
//     'use strict';

//     return {
//         onPress: function(oEvent) {
//             // MessageToast.show("Custom handler invoked.");
//                 // MessageToast.show("Custom handler invokedddddd.");
//                 debugger
//                 // this.loadFragment({
//                 //     id: "excelUploadDialog",
//                 //     name: "task.ext.fragment.Create",
//                 //     // controller: _onPress(this, 'plant')
//                 // }).then(function (oDialog) {
//                 //     oDialog.open();
//                 // // }).then(function (oDialog) {
//                 // //     oDialog.close();
//                 // });
//                 // var oView = this.getView();
//                 // if (!oView || !oView.addDependent) {
//                 //     console.error("addDependent method is not available on the view.");
//                 //     return;
//                 // }
//                 var id = oEvent.oSource.getParent().getCells()[0].getText();
//                 if (!this.oFixedSizeDialog) {
//                     this.oFixedSizeDialog = new Dialog({
//                         title: "edit",
//                         contentWidth: "550px",
//                         contentHeight: "300px",
//                         // content: new List({
//                         //     items: {
//                         //         // path: "/college",
//                         //         // template: new StandardListItem({
//                         //             title: id,
//                         //             description: "id"
//                         //         // })
//                         //     }
//                         // }),
                        
//                         endButton: new Button({
//                             text: "Close",
//                             press: function () {
//                                 this.oFixedSizeDialog.close();
//                             }.bind(this)
//                         })
//                     });
//                     debugger
//                     //to get access to the controller's model
//                     // this.getView().addDependent(this.oFixedSizeDialog);
//                     // oView.addDependent(this.oFixedSizeDialog);
//                     // var id = oEvent.oSource.getParent().getCells()[0].getText();
//                     // sap.ui.getCore().addDependent(this.oFixedSizeDialog);
//                     sap.ui.getCore().addDependent(Controller.FixedSizeDialog);


//                 }
    
//                 this.oFixedSizeDialog.open();
    
//             },
//         }
//     // };
// });
sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: function(oEvent) {
            debugger
            this.loadFragment({
                id: "edit",
                name: "task.ext.fragment.edit",
            }
        ).then(function (oDialog) {
            debugger
            var value1 =oEvent.getSource().getParent().getCells()[0].getText();
            var value2 =oEvent.getSource().getParent().getCells()[1].getText();
            // var value3 =oEvent.getSource().getParent().getCells()[2].getText();
            // sap.ui.getCore().byId("edit--_IDDialog").mAggregations.content[0].setValue(value1);
            sap.ui.getCore().byId("edit--_IDDialog").mAggregations.content[0].setValue(value1).setEditable(false);
            sap.ui.getCore().byId("edit--_IDDialog").mAggregations.content[1].setValue(value2);
            // sap.ui.getCore().byId("edit--edit").mAggregations.content[5].setValue(value3);
            oDialog.open();
        }) 
    },
    handleclose: function(oEvent) {
        debugger;
        var Dialog =oEvent.oSource.getParent().close();
        Dialog.destroy();
    },
    handlesave: function(oEvent) {
        debugger;
        this.refresh();
            var id = oEvent.oSource.oParent.mAggregations.content[0].mProperties.value
            var name= oEvent.oSource.oParent.mAggregations.content[1].mProperties.value
            // var address= oEvent.oSource.oParent.mAggregations.content[5].mProperties.value
            let testdata = JSON.stringify({ cid:id, name:name });
            var url = '/odata/v4/ms/college/' + id;
            $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: testdata, 
                success: function(data) {
                    debugger
                    // Handle success
                    console.log(data);
                    
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                }
            })
        var Dialog =oEvent.oSource.getParent().close();
        Dialog.destroy();

    }
    };
});