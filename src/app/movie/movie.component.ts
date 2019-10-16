import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  @Input() isFav;
  @Output() getMovie: EventEmitter<any> = new EventEmitter();
  @Output() addToFav: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.getMovie.emit(this.movie.imdbID);
  }

  onAdd() {
    this.addToFav.emit(this.movie)
  }

}
