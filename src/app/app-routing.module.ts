import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { BotpageComponent } from "./pages/botpage/botpage.component";
import { ChartsComponent } from "./pages/charts/charts.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: IndexComponent },
    { path: "bot", component: BotpageComponent },
    { path: "charts", component: ChartsComponent },

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: true
        })
    ],
    exports: []
})
export class AppRoutingModule { }
