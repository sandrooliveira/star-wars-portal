import { Character } from './characters.model';

export class CharactersService {

    private characters: Character[] = [
        new Character('Darth Vader'),
        new Character('Yoda'),
        new Character('Luke Skywalker')     
    ];

    getCharacters(){
        return this.characters.slice();
    }
}