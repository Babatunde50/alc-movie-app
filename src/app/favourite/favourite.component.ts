import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  movies = [];
  fav = 'Remove Favourite';

  constructor() { }

  ngOnInit() {
    this.movies = JSON.parse(localStorage.getItem("favMovies"));
    if(!this.movies) {
      this.movies = [];
    }
    console.log(this.movies);
  }

  onRemoveFromFav(movie) {
    const initialFavMovies = JSON.parse(window.localStorage.getItem("favMovies"));
    const updatedFavMovies = initialFavMovies.filter(m => m.imdbID !== movie.imdbID);
    window.localStorage.setItem('favMovies', JSON.stringify(updatedFavMovies) )
    this.movies = updatedFavMovies;
    alert(movie.Title + ' has been removed from your favourite list successfully!')
  }
}
