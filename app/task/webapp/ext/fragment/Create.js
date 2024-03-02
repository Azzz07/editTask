sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller"
], function(MessageToast,Controller) {
    'use strict';

    return{  
    // return Controller.extend("task.ext.controller.Create",{
        onPress: function(oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");
            // onClose = function (oDialog) {
            //     oDialog.close();
        },
        handleClose: function (oEvent) {
                debugger
                this.refresh();
                var plant = oEvent.oSource.oParent.mAggregations.content[0].mProperties.value                // var sbg = sap.ui.getCore().byId("Create--_IDDialog").mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].mProperties.value
                var name = oEvent.oSource.oParent.mAggregations.content[1].mProperties.value
                // var sbu = sap.ui.getCore().byId("Create--_IDDialog").mAggregations.content[0].mAggregations.items[2].mAggregations.items[1].mProperties.value
                // data: JSON.stringify({ cid : plant }),
                // let cidNumber = parseInt(plant); 
                let testdata = JSON.stringify({ cid:plant , name : name });
                // let arrayData = [plant,sbg,sbu]
                 $.ajax({
                     url: '/odata/v4/ms/college',
                     type: 'POST',
                     contentType: 'application/json',
                      data: testdata,
                     success: function(data) {
                         debugger
                         // Handle success
                         console.log(data);
                         oEvent.oSource.getParent().destroy();        
                         MessageToast.show("SAVED........");
                        //  this.refresh();

                     },
                     error: function(jqXHR, textStatus, errorThrown) {
                         // Handle error
                         console.error(textStatus, errorThrown);
                         MessageToast.show(textStatus, errorThrown);
                         oEvent.oSource.getParent().destroy();
              }
                 })
            },

            cancel: function (oEvent) {
                debugger
                    oEvent.oSource.getParent().destroy();
                }
        }
        });
            // oEvent.oSource.getParent().getParent().getParent().close();
            // var oView = this.getView();
			// var oDialog = oView.byId("_IDDialog");
            // var oDialog = this.getView().byId("_IDDialog");
			// oEvnt.close();
			// oDialog.
            // this.close();




		// },

      
                // var oView = this.getView();
                // var oDialog = oView.byId("_IDDialog");
                // var oDialog = this.getView().byId("_IDDialog");
                // oEvnt.close();
                // oDialog.
                // this.close();
            // }
        //     // var oView = this.getView();
			// var oDialog = oView.byId("_IDDialog");
            // var oDialog = this.getView().byId("_IDDialog");
			// oEvnt.close();
			// oDialog.
            // this.close();
		// }
    // })

        //   onOk:  function (oDialog) {
        //         oDialog.close();
        // },
        // Create: function (oBindingContext, aSelectedContexts) {
        //     debugger
        //     this.loadFragment({
        //         id: "excelUploadDialog",
        //         name: "task.ext.fragment.Create",
        //         controller: _Create(this, 'plant')
        //     }).then(function (oDialog) {
        //         oDialog.open();
        
        // }
    // };
// });
