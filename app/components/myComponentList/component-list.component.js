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
var myComponent_service_1 = require('../../services/myComponent.service');
var searchByProp_1 = require('../../filters/searchByProp');
var myComponentListComponent = (function () {
    function myComponentListComponent(_myCompService) {
        this._myCompService = _myCompService;
        this.searchText = "";
    }
    myComponentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._myCompService.getComponents()
            .then(function (data) { return _this.myComponents = data; })
            .catch(function (err) { return _this.error = err; });
    };
    myComponentListComponent = __decorate([
        core_1.Component({
            selector: 'component-list',
            pipes: [searchByProp_1.SearchByPropPipe],
            templateUrl: 'app/components/myComponentList/component-list.component.html',
            providers: [myComponent_service_1.myComponentService]
        }), 
        __metadata('design:paramtypes', [myComponent_service_1.myComponentService])
    ], myComponentListComponent);
    return myComponentListComponent;
}());
exports.myComponentListComponent = myComponentListComponent;
//# sourceMappingURL=component-list.component.js.map