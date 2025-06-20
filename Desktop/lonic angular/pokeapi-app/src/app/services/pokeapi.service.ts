import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getAllPokemons() {
    return this.http.get(`${this.baseUrl}/pokemon?limit=151`);
  }

  getPokemonDetails(name: string) {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}

