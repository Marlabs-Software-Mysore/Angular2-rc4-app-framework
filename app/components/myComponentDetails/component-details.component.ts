import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { myComponentService } from '../../services/myComponent.service';

@Component({
  selector: 'component-details',
  templateUrl: './component-details.component.html'
})
export class ComponentDetailsComponent implements OnInit {
  //CompDetails:Observable<UsedComponent>;
  name:string;
  errorMessage:string;

  constructor(private _myCompService: myComponentService, private route: ActivatedRoute, private router: Router ) { 
    //   this.route.params.subscribe(params => {
    //         this.name = params["name"];
    //   });

      this.name = this.route.snapshot.params['name'];

      if(this.name == "" || this.name == undefined){
          router.navigate(['/my-components']);
      }
  }

  ngOnInit() {
    //   this._myCompService.getComponentByName(this.name)
    //                  .subscribe(
    //                    res => JsonToObject(res),
    //                    error =>  this.errorMessage = <any>error);
  }
}
