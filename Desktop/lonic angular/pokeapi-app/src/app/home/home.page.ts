import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = [];

  constructor(
    private pokeapi: PokeapiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pokeapi.getAllPokemons().subscribe((response: any) => {
      this.pokemons = response.results;
    });
  }

  openDetails(pokemon: any) {
    this.router.navigate(['/details', pokemon.name]);
  }

  getPokemonImageUrl(url: string): string {
  const id = url.split('/').filter(part => part).pop();  // Pega o último número da URL
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

}
