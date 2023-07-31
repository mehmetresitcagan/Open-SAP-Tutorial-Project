//@ui5-bundle com/myorg/myui5app/Component-preload.js
sap.ui.require.preload({
	"com/myorg/myui5app/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/myorg/myui5app/model/models"],function(e,i,t){"use strict";return e.extend("com.myorg.myui5app.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"com/myorg/myui5app/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.myorg.myui5app.controller.App",{onInit(){}})});
},
	"com/myorg/myui5app/controller/BaseController.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","com/myorg/myui5app/model/formatter"],function(e,t,o,n){"use strict";return e.extend("com.myorg.myui5app.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){const e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"com/myorg/myui5app/controller/MainView.controller.js":function(){
sap.ui.define(["./BaseController"],function(n){"use strict";return n.extend("com.myorg.myui5app.controller.MainView",{onInit:function(){}})});
},
	"com/myorg/myui5app/i18n/i18n.properties":'# This is the resource bundle for com.myorg.myui5app\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Title of com.myorg.myui5app\n\n#YDES: Application description\nappDescription=Description of com.myorg.myui5app\n#XTIT: Main view title\ntitle=Title of com.myorg.myui5app',
	"com/myorg/myui5app/manifest.json":'{"_version":"1.42.0","sap.app":{"id":"com.myorg.myui5app","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap-ux/fiori-freestyle-writer:basic","version":"0.14.9"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.102.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.myorg.myui5app.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.myorg.myui5app.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMainView","pattern":":?query:","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"MainView","viewName":"MainView"}}},"rootView":{"viewName":"com.myorg.myui5app.view.App","type":"XML","async":true,"id":"App"}}}',
	"com/myorg/myui5app/model/formatter.js":function(){
sap.ui.define([],function(){"use strict";return{}});
},
	"com/myorg/myui5app/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){const i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/myorg/myui5app/view/App.view.xml":'<mvc:View controllerName="com.myorg.myui5app.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"com/myorg/myui5app/view/MainView.view.xml":'<mvc:View controllerName="com.myorg.myui5app.controller.MainView"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
