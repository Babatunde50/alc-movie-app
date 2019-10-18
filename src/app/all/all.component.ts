import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {
  @Input() search: string
  @Input() movies;
  @Output() getMovie: EventEmitter<any> = new EventEmitter();
  response;
  fav = 'Add Favourite';

  constructor() {}

  ngOnInit() {

  }

  ongetMovie(id) {
    this.getMovie.emit(id);
  }

  onaddToFav(movie) {
    const initialFavMovies = JSON.parse(window.localStorage.getItem("favMovies"));
    if(initialFavMovies) {
      window.localStorage.setItem("favMovies", JSON.stringify([...initialFavMovies, movie ]) )
    } else {
      window.localStorage.setItem("favMovies", JSON.stringify([movie]))
    }
    alert(`${movie.Title} has been added to your favourite movie list.`)
  }

}
