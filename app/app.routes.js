"use strict";
var router_1 = require('@angular/router');
var component_list_component_1 = require('./components/myComponentList/component-list.component');
var addMyComponent_component_1 = require('./components/myNewComponent/addMyComponent.component');
var component_details_component_1 = require('./components/myComponentDetails/component-details.component');
var routes = [
    { path: 'component-view/:name', component: component_details_component_1.ComponentDetailsComponent },
    { path: 'add-new-component', component: addMyComponent_component_1.addNewComponent },
    { path: '', component: component_list_component_1.myComponentListComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map