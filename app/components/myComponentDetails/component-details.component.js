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
var router_1 = require('@angular/router');
var myComponent_service_1 = require('../../services/myComponent.service');
var ComponentDetailsComponent = (function () {
    function ComponentDetailsComponent(_myCompService, route, router) {
        //   this.route.params.subscribe(params => {
        //         this.name = params["name"];
        //   });
        this._myCompService = _myCompService;
        this.route = route;
        this.router = router;
        this.name = this.route.snapshot.params['name'];
        if (this.name == "" || this.name == undefined) {
            router.navigate(['/my-components']);
        }
    }
    ComponentDetailsComponent.prototype.ngOnInit = function () {
        //   this._myCompService.getComponentByName(this.name)
        //                  .subscribe(
        //                    res => JsonToObject(res),
        //                    error =>  this.errorMessage = <any>error);
    };
    ComponentDetailsComponent = __decorate([
        core_1.Component({
            selector: 'component-details',
            templateUrl: './component-details.component.html'
        }), 
        __metadata('design:paramtypes', [myComponent_service_1.myComponentService, router_1.ActivatedRoute, router_1.Router])
    ], ComponentDetailsComponent);
    return ComponentDetailsComponent;
}());
exports.ComponentDetailsComponent = ComponentDetailsComponent;
//# sourceMappingURL=component-details.component.js.map