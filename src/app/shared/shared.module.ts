import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./list/item/Item.component"

import { ListByNamePipe } from './pipes/list-by-name.pipe';

@NgModule({
    imports: [ BrowserModule, RouterModule, FormsModule ],
    declarations: [ ListComponent, ItemComponent, ListByNamePipe ],
    exports: [ ListComponent, ItemComponent ]
})
export class SharedModule{}