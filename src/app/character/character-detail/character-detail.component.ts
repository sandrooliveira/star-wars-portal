import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CharactersService } from '../characters.service';
import { Specie } from '../specie.model';
import { Character } from '../characters.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;

  constructor(private route: ActivatedRoute,
              private characterService: CharactersService,
              private location: Location) { }

  ngOnInit() {
     this.route.params
       .subscribe(
         (params: Params) => {
           this.characterService.getDetails(params['id'])
           .subscribe( (character:Character) =>{
              this.character = character 
            });
         }
       );
  }

  goBack(){
    this.location.back();
  }

}
