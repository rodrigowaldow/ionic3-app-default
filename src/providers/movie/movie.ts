import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3"
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=c9021b858b1d0f19694931270d284064");
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=c9021b858b1d0f19694931270d284064");
  }
}
