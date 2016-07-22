import { provideRouter, RouterConfig }  from '@angular/router';

import { myComponentListComponent } from './components/myComponentList/component-list.component';
import { addNewComponent } from './components/myNewComponent/addMyComponent.component';
import { ComponentDetailsComponent } from './components/myComponentDetails/component-details.component';

const routes: 
RouterConfig = [
    { path: 'component-view/:name', component: ComponentDetailsComponent },
    { path: 'add-new-component', component: addNewComponent },
    { path: '', component: myComponentListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];