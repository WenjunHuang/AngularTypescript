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
var core_1 = require("@angular/core");
var product_service_1 = require("../../services/product-service");
var ApplicationComponent = (function () {
    function ApplicationComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.products = this.productService.getProducts();
    }
    ApplicationComponent = __decorate([
        core_1.Component({
            selector: "auction-application",
            templateUrl: "app/components/application/application.html",
            styleUrls: ["app/components/application/application.css"],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApplicationComponent;
//# sourceMappingURL=application.js.map