import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite/favorite.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  favorite_selector = true;
  favorites;
  constructor(private favoritesService: FavoriteService) { }

  ngOnInit() {
    this.favorites = this.favoritesService.GetFavs();
  }

}
