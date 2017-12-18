import { CommonModule } from '@angular/common/';
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';

import { CharactersComponent } from "./characters.component";
import { SharedModule } from "../shared/shared.module";
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersService } from './characters.service';
import { CharacterRoutingModule } from './characters.routing.module';

@NgModule({
    declarations: [ CharactersComponent, CharacterDetailComponent ],
    exports: [ CharactersComponent ],
    imports: [ SharedModule, HttpModule, CommonModule, CharacterRoutingModule ],
    providers: [ CharactersService ]
})
export class CharacterModule{}