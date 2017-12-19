import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./list/item/Item.component"

import { ListByNamePipe } from './pipes/list-by-name.pipe';
import { UtilService } from "./services/util.service";

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule ],
    declarations: [ ListComponent, ItemComponent, ListByNamePipe ],
    exports: [ ListComponent, ItemComponent ],
    providers: [ UtilService ]
})
export class SharedModule{}