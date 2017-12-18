import { ListItem } from "../shared/list/item/model/item.model";
import { Specie } from "./specie.model";

export class Character implements ListItem {
    public id:number;
    public name:string;
    public height: string;
    public gender:string;
    public specie: Specie;
    public url: string;

    constructor(name:string){
        this.name = name;
    }
}