import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { DataStoregeService } from '../shared-sevices/data-storage.service';
// import { ElementRef } from '@angular/core/src/linker/element_ref';
import { FavoriteService } from '../favorite/favorite.service';
import { Session } from 'selenium-webdriver';
// import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  giphy;
  nextData;
  next_selector: boolean;
  offset;
  moreLoader = false;
  loader = true;
  Search_Query = 'Trending';
  modal = false;
  modlaImage: string;
  constructor(private http: Http,
              private datastorageservice: DataStoregeService,
              private FavService: FavoriteService) {}
  ngOnInit() {
   this.datastorageservice.Trending()
   .subscribe(
      (res: Response) => {
        this.giphy = res.json();
        console.log(this.giphy);
        this.loader = false;
       }
    );
    this.next_selector = true;
  }

  onAddFavorites(link: string) {
    this.FavService.AddFavs(link);
  }

  onSearch(q: HTMLInputElement) {
    this.offset = 0;
    this.loader = true;
    this.giphy = undefined;
    console.log(q.value);
    this.datastorageservice.SearchData(q.value)
      .subscribe(
        (res: Response) => {
          this.giphy = res.json();
          console.log(this.giphy);
          this.loader = false;
        }
      );
      this.next_selector = false;
      this.Search_Query = 'Results for: ' + q.value;
  }
  onGetdata() {
    this.offset = 0;
    this.datastorageservice.Trending().subscribe(
      (response: Response) =>  {
        this.giphy = response.json();
        console.log(this.giphy);
      }
    );
  }
  onNext(q: HTMLInputElement) {
    console.log(this.giphy.next);
    this.moreLoader = true;
    if (this.next_selector === true) {
      this.datastorageservice.NextTrending(this.giphy.next)
      .subscribe(
        (res: Response) => {
          this.nextData = res.json();
          for (let i in this.nextData.results ) {
            this.giphy.results.push(this.nextData.results[i]);
          }
          this.moreLoader = false;
          console.log('next');
          console.log(this.nextData.results);
        }
      );
    }
    else {
      this.datastorageservice.NextData(this.giphy.next, q.value)
      .subscribe(
        (res: Response) => {
          this.nextData = res.json();
          for (let i in this.nextData.results ) {
            this.giphy.results.push(this.nextData.results[i]);
          }
          this.moreLoader = false;
          console.log('next');
          console.log(this.nextData.results);
        }
      );
    }

  }

  openModal(imageURl: string) {
    this.modlaImage = imageURl;
    this.modal = true;
  }
  closeModal() {
    this.modal = false;
  }
}
