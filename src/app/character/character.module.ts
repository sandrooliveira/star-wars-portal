import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';

import { CharactersComponent } from "./characters.component";
import { SharedModule } from "../shared/shared.module";
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { RouterModule } from '@angular/router';
import { CharactersService } from './characters.service';

@NgModule({
    declarations: [ CharactersComponent, CharacterDetailComponent ],
    exports: [ CharactersComponent ],
    imports: [ SharedModule, HttpModule, RouterModule,BrowserModule ],
    providers: [ CharactersService ]
})
export class CharacterModule{}