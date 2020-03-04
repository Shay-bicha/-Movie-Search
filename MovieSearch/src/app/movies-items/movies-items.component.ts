import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../module/Movie';

@Component({
  selector: 'app-movies-items',
  templateUrl: './movies-items.component.html',
  styleUrls: ['./movies-items.component.css']
})
export class MoviesItemsComponent implements OnInit {
@Input() movie: Movie;
  constructor() { }

  ngOnInit() {
  }

}
