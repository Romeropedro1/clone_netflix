import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokeapiService } from './../services/pokeapi.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokeapi: PokeapiService
  ) {}

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokeapi.getPokemonDetails(name).subscribe(data => {
        this.pokemon = data;
      });
    }
  }
}
