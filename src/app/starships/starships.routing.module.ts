import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { StarshipsComponent } from './starships.component';
import { RouterModule } from '@angular/router';
import { StarshipDetailComponent } from './starship-detail/starship-detail/starship-detail.component';

const appRoutes: Routes = [
    { path: '', component: StarshipsComponent, children:[
        {path: ':id', component: StarshipDetailComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class StarshipsRoutingModule {

}