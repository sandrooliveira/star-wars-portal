import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';
import { Character } from './characters.model';
import { Response } from '@angular/http';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css'],
    providers: [ CharactersService ]
})
export class CharactersComponent implements OnInit{
    characters: Character[];

    constructor(private charactersService: CharactersService) {}

    ngOnInit() {
        this.charactersService.getCharacters()
        .subscribe( (charactersReturn: Character[]) => {
            this.characters = charactersReturn
        });
    }
}