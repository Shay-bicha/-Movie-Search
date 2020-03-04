import { Component, OnInit } from "@angular/core";
import { GetMoviesService } from "../HttpCalls/get-movies.service";
import { Movie } from '../module/Movie';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {
  movieName: string = "";
  movies: Movie[];
  singleMovie: Movie;
  showAll: boolean = true;
  constructor(private httpx: GetMoviesService) {}


  ngOnInit(): void {}

  searchMovie = (value: string) => {
    this.movieName = value;
  };

  handelClick() {
    this.httpx.getMovies(this.movieName)
    .subscribe((data: any) => {
      this.movies = data.results;
      this.showAll = true;
    });
  }

  getMovie(idValue){
    this.httpx.showMovie(idValue)
    .subscribe((data: any) => {
      this.singleMovie = data;
      this.showAll = false;
    });
  }
}
