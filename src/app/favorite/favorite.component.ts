import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './favorite.service';
import { Favorite } from './favorite.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  constructor( private FavService: FavoriteService) { }
  Favorites;
  ngOnInit() {
    this.Favorites = this.FavService.GetFavs();
  }
  onAddFav(Fav: string) {
    this.FavService.AddFavs(Fav);
  }
  onDeleteFav(i: number) {
    this.FavService.DeleteFav(i);
  }

}
