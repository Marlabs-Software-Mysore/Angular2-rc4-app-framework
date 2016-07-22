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
var http_1 = require('@angular/http');
var apiconfig_1 = require('../apiconfig');
var componentsUrl = apiconfig_1.CONFIG.baseUrls.components;
var myComponentService = (function () {
    function myComponentService(_http) {
        this._http = _http;
    }
    myComponentService.prototype.getComponents = function () {
        var myComponentsList = this._http.get(componentsUrl)
            .toPromise()
            .then(function (response) { return response.json().components; })
            .catch();
        return myComponentsList;
    };
    myComponentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], myComponentService);
    return myComponentService;
}());
exports.myComponentService = myComponentService;
//# sourceMappingURL=myComponent.service.js.map