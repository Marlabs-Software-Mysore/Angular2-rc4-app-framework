import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { myComponent } from '../../models/myComponent';

@Component({
    selector: 'add-component',
    templateUrl: 'app/components/myNewComponent/addMyComponent.component.html'
})
export class addNewComponent implements OnInit {
    myNewComp: myComponent;
    statusMsg:string;
    status:boolean;

    constructor() { 
        this.myNewComp = new myComponent();
        this.status = false;
    }

    ngOnInit() { }


    addNewCompnent(){
        if(this.myNewComp.Name!="" || this.myNewComp.ShortDescription!=""){
            console.log(this.myNewComp);
            this.myNewComp = new myComponent();
            this.statusMsg = "Successfully added new component";
            this.status = true;
        }
    }
}