import { NgModule } from "@angular/core";
import { StarshipsComponent } from "./starships.component";
import { SharedModule } from "../shared/shared.module";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations: [ StarshipsComponent ],
    exports: [ StarshipsComponent ],
    imports: [ SharedModule, HttpModule ]
})
export class StarShipModule{}