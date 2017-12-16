import { NgModule } from "@angular/core";
import { CharactersComponent } from "./characters.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [ CharactersComponent ],
    exports: [ CharactersComponent ],
    imports: [ SharedModule ]
})
export class CharacterModule{}