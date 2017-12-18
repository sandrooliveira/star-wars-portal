import { CommonModule } from '@angular/common/';
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { StarshipsComponent } from "./starships.component";
import { SharedModule } from "../shared/shared.module";
import { StarshipDetailComponent } from './starship-detail/starship-detail/starship-detail.component';
import { StarshipsRoutingModule } from './starships.routing.module';

@NgModule({
    declarations: [ StarshipsComponent, StarshipDetailComponent ],
    exports: [ StarshipsComponent ],
    imports: [ SharedModule, HttpModule,CommonModule, StarshipsRoutingModule ]
})
export class StarShipModule{}