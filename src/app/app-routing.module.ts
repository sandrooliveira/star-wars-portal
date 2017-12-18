import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './character/characters.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { StarshipDetailComponent } from './starships/starship-detail/starship-detail/starship-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full'},
    { path: 'characters', component: CharactersComponent},
    { path: 'characters/:id', component: CharacterDetailComponent },
    { path: 'starships', component: StarshipsComponent, children:[
        {path: ':id', component: StarshipDetailComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}