import { Character } from './characters.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import { Specie } from './specie.model';

@Injectable()
export class CharactersService {

    species: Observable<{}>;
   
    constructor(private http:Http){
        this.http = http;
    }

    getCharacters(){
       return this.http.get('https://swapi.co/api/people/')
           .map( (response: Response) =>{
                    const characters: Character[] = response.json().results;
                    characters.map(character => character.url = character.url.match('[0-9]+')[0]);
                    return characters;
               }
           );
    }

    getDetails(id: number){
        return this.http.get('https://swapi.co/api/people/' + id + '/')
                        .pipe(
                            mergeMap( (characterResponse: Response) => { 
                                    return this.http.get(characterResponse.json().species[0])
                                                    .map ( (specieResponse: Response) =>{
                                                            const character: Character = characterResponse.json();             
                                                            character.specie = specieResponse.json();
                                                        return character;
                                                    })
                            }));
    }
}