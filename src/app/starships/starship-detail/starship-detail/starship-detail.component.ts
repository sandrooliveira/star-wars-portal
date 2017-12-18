import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StarshipService } from '../../starship.service';
import { Character } from '../../../character/characters.model';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  pilots: Character[] = [];
  error: string;

  constructor(private route: ActivatedRoute,
              private starshipService: StarshipService) { }

  ngOnInit() {
      this.route.params
                .subscribe( (params: Params) => {
                    this.starshipService.getDetails(params['id'])
                    .subscribe( 
                      (pilots: Character[]) => this.pilots = pilots,
                      (error) => {
                         this.pilots = [];
                         this.error = error.error;
                      }
                    );
                })
  }

}
