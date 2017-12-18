import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { RouterModule } from '@angular/router';
import { StarshipDetailComponent } from './starships/starship-detail/starship-detail/starship-detail.component';

const appRoutes: Routes = [
  
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}