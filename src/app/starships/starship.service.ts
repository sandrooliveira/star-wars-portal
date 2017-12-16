import { Starship } from "./starship.model";

export class StarshipService{

    private starships: Starship[] = [
        new Starship("Nave 1"),
        new Starship("Nave 2"),
        new Starship("Nave 3")
    ];

    getStarships(){
        return this.starships.slice();
    }
}