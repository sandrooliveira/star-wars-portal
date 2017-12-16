import { ListItem } from "../shared/list/item/model/item.model";

export class Character implements ListItem {
    public name:string;

    constructor(name:string){
        this.name = name;
    }
}