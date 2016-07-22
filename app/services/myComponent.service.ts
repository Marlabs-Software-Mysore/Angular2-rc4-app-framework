import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { myComponent } from '../models/myComponent';

import { CONFIG } from '../apiconfig';

let componentsUrl = CONFIG.baseUrls.components;

@Injectable()
export class myComponentService {
  constructor(private _http: Http) { }

  getComponents(): Promise<myComponent[]>{
     var myComponentsList = this._http.get(componentsUrl)
                                       .toPromise()
                                       .then(response => response.json().components)
                                       .catch();
     return myComponentsList;
  }
}
