import { NgModule } from "@angular/core";
import { StarshipsComponent } from "./starships.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [ StarshipsComponent ],
    exports: [ StarshipsComponent ],
    imports: [ SharedModule ]
})
export class StarShipModule{}