import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";

import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";

const routes: Routes = [
    { path: "", component: IndexComponent },
    { path: "bot", component: ProfilepageComponent },
    { path: "charts", component: RegisterpageComponent },
    { path: "**", component: IndexComponent },

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false,
            enableTracing: true
        })
    ],
    exports: []
})
export class AppRoutingModule { }
