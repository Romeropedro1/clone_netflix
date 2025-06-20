import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private key = 'favoritePokemons';

  constructor() { }

  getFavorites(): string[] {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  addFavorite(name: string) {
    const favorites = this.getFavorites();
    if (!favorites.includes(name)) {
      favorites.push(name);
      localStorage.setItem(this.key, JSON.stringify(favorites));
    }
  }

  removeFavorite(name: string) {
    let favorites = this.getFavorites();
    favorites = favorites.filter(p => p !== name);
    localStorage.setItem(this.key, JSON.stringify(favorites));
  }

  isFavorite(name: string): boolean {
    const favorites = this.getFavorites();
    return favorites.includes(name);
  }
}
