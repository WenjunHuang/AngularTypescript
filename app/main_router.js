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
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            template: "<h1 class=\"home\">Home Component</h1>",
            styles: [".home {background: red}"]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
var ProductDetailComponent = (function () {
    function ProductDetailComponent() {
    }
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: "product",
            template: "<h1 class=\"product\">Product Details Component</h1>",
            styles: [".product {background: cyan}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
var routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: "product",
        component: ProductDetailComponent
    }
];
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.navigateToProductDetail = function () {
        this.router.navigate(["/product"]);
    };
    AppComponent.prototype.navigateToHome = function () {
        this.router.navigate([""]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "auction-application",
            template: "\n<a [routerLink] = \"['/']\">Home</a>\n<a [routerLink] = \"['/product']\">Product Details!!!</a>\n<input type=\"button\" value=\"Product Details\" (click)=\"navigateToProductDetail()\"/>\n<button (click)=\"navigateToHome()\">Home</button>\n<router-outlet></router-outlet>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_2.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes)],
            declarations: [AppComponent, HomeComponent, ProductDetailComponent],
            providers: [
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main_router.js.map