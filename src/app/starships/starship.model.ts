import { ListItem } from "../shared/list/item/model/item.model";

export class Starship implements ListItem{
    public name: string;
    public url: string;

    constructor(name: string){
        this.name = name;
    }
}