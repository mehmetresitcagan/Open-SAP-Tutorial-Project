sap.ui.define(
    ["./BaseController"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.myorg.myui5app.controller.MainView", {
            onBeforeRendering: function() {
                jQuery.sap.log.error("A problem occurred!");
            },
            
            onInit: function () {},
        });
    },
);
