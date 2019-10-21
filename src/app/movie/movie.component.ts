import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  @Output() removeFromFav: EventEmitter<any> = new EventEmitter();

  constructor( private router: Router, private route: ActivatedRoute  ) { }

  ngOnInit() {
  }

  onSelected() {
    this.getMovie.emit(this.movie.imdbID);
    this.router.navigate([ '/movies', this.movie.imdbID ]);
  }

  onAdd() {
    this.addToFav.emit(this.movie);
  }

  onRemove() {
    this.removeFromFav.emit(this.movie);
  }

}
