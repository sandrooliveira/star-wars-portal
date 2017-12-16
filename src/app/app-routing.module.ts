import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './character/characters.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/characters', pathMatch: 'full'},
    { path: 'characters', component: CharactersComponent},
    { path: 'starships', component: StarshipsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}