import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';

import { CharactersComponent } from "./characters.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [ CharactersComponent ],
    exports: [ CharactersComponent ],
    imports: [ SharedModule, HttpModule ]
})
export class CharacterModule{}