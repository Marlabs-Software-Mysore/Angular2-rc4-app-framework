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
var OrderByPropPipe = (function () {
    function OrderByPropPipe() {
    }
    OrderByPropPipe.prototype.transform = function (items, _a) {
        var prop = _a[0], direction = _a[1];
        if (items != null) {
            items.sort(function (a, b) {
                return (a[prop] > b[prop] ? 1 : -1);
            });
            if (direction == "DESC")
                items.reverse();
            return items;
        }
    };
    OrderByPropPipe = __decorate([
        core_1.Pipe({
            name: "orderByProp"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPropPipe);
    return OrderByPropPipe;
}());
exports.OrderByPropPipe = OrderByPropPipe;
//# sourceMappingURL=orderByProp.js.map