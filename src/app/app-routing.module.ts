import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
   {path:'', redirectTo:"/characters", pathMatch:"full"},
   {path:'characters', loadChildren:'app/character/character.module#CharacterModule'},
   {path:'starships', loadChildren:'app/starships/starship.module#StarShipModule'}
   
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}