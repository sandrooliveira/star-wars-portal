import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const characterRoutes: Routes = [
    { path: '', component: CharactersComponent},
    { path: ':id', component: CharacterDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(characterRoutes)],
    exports: [RouterModule]
})
export class CharacterRoutingModule {

}