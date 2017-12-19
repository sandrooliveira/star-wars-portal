import { Component, Input, OnInit } from "@angular/core";
import { ListItem } from "./item/model/item.model";
import { UtilService } from "../services/util.service";

@Component({
    selector:'shared-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
    @Input() title: string;
    private _items: ListItem[];
    private _reverseList: boolean = false;
    private filteredName = '';

    constructor(private utilService: UtilService){}
    ngOnInit(){
    }

    orderList(){
        this._reverseList = !this._reverseList;
        this._items = this.utilService.orderList(this._items,'name',this._reverseList);
    }

    @Input('items')
    set items(items: ListItem[]){
        this._items = this.utilService.orderList(items,'name',this._reverseList);
    }

    get items(): ListItem[]{
        return this._items;
    }

}