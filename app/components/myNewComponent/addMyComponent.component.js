"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var myComponent_1 = require('../../models/myComponent');
var addNewComponent = (function () {
    function addNewComponent() {
        this.myNewComp = new myComponent_1.myComponent();
        this.status = false;
    }
    addNewComponent.prototype.ngOnInit = function () { };
    addNewComponent.prototype.addNewCompnent = function () {
        if (this.myNewComp.Name != "" || this.myNewComp.ShortDescription != "") {
            console.log(this.myNewComp);
            this.myNewComp = new myComponent_1.myComponent();
            this.statusMsg = "Successfully added new component";
            this.status = true;
        }
    };
    addNewComponent = __decorate([
        core_1.Component({
            selector: 'add-component',
            templateUrl: 'app/components/myNewComponent/addMyComponent.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], addNewComponent);
    return addNewComponent;
}());
exports.addNewComponent = addNewComponent;
//# sourceMappingURL=addMyComponent.component.js.map