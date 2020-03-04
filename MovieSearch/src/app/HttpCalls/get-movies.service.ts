import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GetMoviesService {
  movies: any = [];
  constructor(private http: HttpClient) {}

  getMovies = (movieName: string) => {
    this.http
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "3ea150464035bc92e08e1ecfd93b9557",
          query: movieName
        }
      })
      .subscribe((data: any) => {
        this.movies = data.results;
        console.log(this.movies);
      });
  };
}
