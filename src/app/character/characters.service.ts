import { Character } from './characters.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class CharactersService {

    constructor(private http:Http){
        this.http = http;
    }

    getCharacters(){
       return this.http.get('http://swapi.co/api/people')
           .map(
               (response: Response) =>{
                   const data = response.json();
                   return data;
               }
           );
    }
}