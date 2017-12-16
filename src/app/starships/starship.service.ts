import { Starship } from "./starship.model";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class StarshipService{

    constructor(private http: Http){};

    getStarships(){
        return this.http.get('https://swapi.co/api/starships/')
        .map( (response:Response) =>{
           const starships: Starship[] = response.json().results;
           return starships;
        })
    }
}