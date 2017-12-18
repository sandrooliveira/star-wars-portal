import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./list/item/Item.component"

import { ListByNamePipe } from './pipes/list-by-name.pipe';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule ],
    declarations: [ ListComponent, ItemComponent, ListByNamePipe ],
    exports: [ ListComponent, ItemComponent ]
})
export class SharedModule{}