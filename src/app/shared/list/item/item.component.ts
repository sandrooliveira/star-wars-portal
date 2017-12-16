import { Component, Input } from "@angular/core";
import { ListItem } from "./model/item.model";

@Component({
    selector: 'list-item',
    templateUrl: './item.component.html',
    styleUrls: [ './item.component.css' ]
})
export class ItemComponent{
    @Input() item: ListItem;
}