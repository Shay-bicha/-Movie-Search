import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class GetMoviesService {
  constructor(private http: HttpClient) {}

  getMovies(movieName: string) {
    return this.http.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: "3ea150464035bc92e08e1ecfd93b9557",
        query: movieName
      }
    });
  }

  
  showMovie(idValue){
    return this.http.get("https://api.themoviedb.org/3/movie/"+idValue+"?", {
      params: {
        api_key: "3ea150464035bc92e08e1ecfd93b9557"
      }
    });
  }
}
