import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { Router, Routes, RouterModule } from "@angular/router";


@Component({
    selector: "home",
    template: `<h1 class="home">Home Component</h1>`,
    styles: [".home {background: red}"]
})
class HomeComponent {
}


@Component({
    selector: "product",
    template: `<h1 class="product">Product Details Component</h1>`,
    styles: [".product {background: cyan}"]
})
class ProductDetailComponent {
}

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: "product",
        component: ProductDetailComponent
    }
];
@Component({
    selector: "auction-application",
    template:  `
<a [routerLink] = "['/']">Home</a>
<a [routerLink] = "['/product']">Product Details!!!</a>
<input type="button" value="Product Details" (click)="navigateToProductDetail()"/>
<button (click)="navigateToHome()">Home</button>
<router-outlet></router-outlet>
`
})
class AppComponent {
    constructor(private router: Router) { }
    navigateToProductDetail() {
        this.router.navigate(["/product"]);
    }
    navigateToHome() {
        this.router.navigate([""]);
    }
}

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, HomeComponent, ProductDetailComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);