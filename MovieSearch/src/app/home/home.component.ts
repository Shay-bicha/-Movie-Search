import { Component, OnInit } from '@angular/core';
import {GetMoviesService} from '../HttpCalls/get-movies.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 movieName : string = '';
  constructor(private httpx: GetMoviesService) { }

  ngOnInit(): void {
  
  }

  searchMovie = (value: string)=>{
     this.movieName = value;
     
  }

  handelClick = ()=>{
    this.httpx.getMovies(this.movieName);
  }
}
