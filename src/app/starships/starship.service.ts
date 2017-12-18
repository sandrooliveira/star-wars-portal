import { Starship } from "./starship.model";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { mergeMap } from "rxjs/operators/mergeMap";
import { forkJoin } from "rxjs/observable/forkJoin";
import { Observable } from "rxjs/Observable";
import { Character } from "../character/characters.model";
import { map } from "rxjs/operator/map";

@Injectable()
export class StarshipService{

    constructor(private http: Http){};

    private convertUrlIntoPromise(urls:string[]){
        return urls.map(url => this.http.get(url));
    };

    getStarships(){
        return this.http.get('https://swapi.co/api/starships/')
        .map( (response:Response) =>{
           const starships: Starship[] = response.json().results;
           starships.map(starship => starship.url = starship.url.match('[0-9]+')[0]);
           return starships;
        })
    }

    getDetails(id: Number){
        return this.http.get('https://swapi.co/api/starships/' + id + '/')
        .pipe( 
            mergeMap( (starship:Response) => {
                let pilotPromisses = this.convertUrlIntoPromise(starship.json().pilots);
                if(pilotPromisses.length === 0){
                    throw Observable.throw("This starship does not have pilots!");
                }

                return forkJoin(pilotPromisses)
                        .map( results => {
                            const pilots: Character[] = results.map(result => result.json());
                            pilots.map(pilot => pilot.url = "/characters/" + pilot.url.match('[0-9]+')[0]);
                            return pilots;
                        });
            })
         )
    }
}