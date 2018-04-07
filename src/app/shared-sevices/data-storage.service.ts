import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataStoregeService {
  api_url = 'https://api.giphy.com/v1/gifs/search?';
  api_key = 'api_key=tbWWAjeimxWHCULl2AuOiYGIZdoZwW3F&q=';
  query = 'rainbow';
  api_url2 = '&limit=20&offset=';
  offset = 0;
  api_url3 = '&rating=R&lang=en';
  // trending_url = 'https://api.giphy.com/v1/gifs/trending?api_key=tbWWAjeimxWHCULl2AuOiYGIZdoZwW3F&limit=24&rating=R&offset=';
  // down the api of tenor
  trending_url = 'https://api.tenor.com/v1/trending?key=4LR5XSL0NY3V&anon_id=3a76e56901d740da9e59ffb22b988242';
  tenor_search_url1 = 'https://api.tenor.com/v1/search?q=';
  tenor_search_url2 = 'excited&key=4LR5XSL0NY3V&limit=20&anon_id=3a76e56901d740da9e59ffb22b988242';
  pos = '&pos=';
  constructor( private http: Http) {}
  Getdata() {
    return this.http.get(this.tenor_search_url1 + this.query + this.tenor_search_url2);
    // .subscribe(
    //   (response: Response) => {}
    // );
  }
  SearchData(search_query: string) {
    this.query = search_query;
    return this.http.get(this.tenor_search_url1 + this.query + this.tenor_search_url2);
  }
  NextData(next: string , search_query: string) {
      // this.offset = this.offset + +offst;
      // return this.http.get(this.api_url + this.api_key + search_query + this.api_url2 + this.offset + this.api_url3);
      this.query = search_query;
      console.log(next , search_query);
      return this.http.get(this.tenor_search_url1 + this.query + this.tenor_search_url2 + this.pos + next);
  }
  NextTrending(next: string) {
    // this.offset = this.offset + +offst;
    // return this.http.get(this.trending_url + this.offset);
    return this.http.get(this.trending_url + this.pos + next);
  }
  Trending() {
    return this.http.get(this.trending_url);
  }
}
