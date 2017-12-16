import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./list/item/Item.component"

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ ListComponent, ItemComponent ],
    exports: [ ListComponent, ItemComponent ]
})
export class SharedModule{}