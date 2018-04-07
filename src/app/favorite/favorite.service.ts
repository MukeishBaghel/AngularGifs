import { Injectable } from '@angular/core';
import { Favorite } from './favorite.model';

@Injectable()
export class FavoriteService {
  Favorites: Array<String> = [
    'https://media3.giphy.com/media/Nx0rz3jtxtEre/giphy.gif',
    'https://media0.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif'
  ];
  constructor() { }
  GetFavs() {
    return this.Favorites;
  }
  AddFavs(link: string) {
    this.Favorites.push(link);
  }
  DeleteFav(i: number) {
    this.Favorites.splice(i, 1);
  }
}
