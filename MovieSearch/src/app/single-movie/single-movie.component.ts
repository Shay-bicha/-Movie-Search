import { Component, OnInit , Input } from '@angular/core';
import { Movie } from '../module/Movie';
@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  @Input() item: Movie;
  constructor() { }

  ngOnInit() {
  }

}
