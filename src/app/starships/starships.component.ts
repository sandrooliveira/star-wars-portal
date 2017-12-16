import { Component, OnInit } from '@angular/core';
import { Starship } from './starship.model';
import { StarshipService } from './starship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css'],
  providers: [ StarshipService ]
})
export class StarshipsComponent implements OnInit {

  starships: Starship[];
  
    constructor(private starshipService: StarshipService) {}
  
    ngOnInit() {
        this.starships = this.starshipService.getStarships();
    }
}
