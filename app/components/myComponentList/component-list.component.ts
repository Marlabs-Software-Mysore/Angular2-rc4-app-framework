import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { myComponentService } from '../../services/myComponent.service';
import { SearchByPropPipe } from '../../filters/searchByProp';

import { myComponent } from '../../models/myComponent';

@Component({
  selector: 'component-list',
  pipes:[SearchByPropPipe],
  templateUrl: 'app/components/myComponentList/component-list.component.html',
  providers: [myComponentService] 
})
export class myComponentListComponent implements OnInit {
  myComponents: myComponent[];
  searchText:string = "";
  error: any;
  
  constructor(private _myCompService: myComponentService) { }

  ngOnInit() {
      this._myCompService.getComponents()
        .then(data => this.myComponents = data)
        .catch(err => this.error = err);
  }
}
