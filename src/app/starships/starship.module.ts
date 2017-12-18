import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { StarshipsComponent } from "./starships.component";
import { SharedModule } from "../shared/shared.module";
import { StarshipDetailComponent } from './starship-detail/starship-detail/starship-detail.component';

@NgModule({
    declarations: [ StarshipsComponent, StarshipDetailComponent ],
    exports: [ StarshipsComponent ],
    imports: [ SharedModule, HttpModule, RouterModule,BrowserModule ]
})
export class StarShipModule{}