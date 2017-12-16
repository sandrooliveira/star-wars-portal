import { Character } from './characters.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class CharactersService {
   
    constructor(private http:Http){
        this.http = http;
    }

    getCharacters(){
       return this.http.get('https://swapi.co/api/people/')
           .map( (response: Response) =>{
                    const characters: Character[] = response.json().results;
                    return characters;
               }
           );
    }
}