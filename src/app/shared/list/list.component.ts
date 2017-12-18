import { Component, Input } from "@angular/core";
import { ListItem } from "./item/model/item.model";

@Component({
    selector:'shared-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent{
    @Input() title: string;
    @Input() items: ListItem[];
    filteredName = '';
}