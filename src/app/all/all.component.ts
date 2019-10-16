import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllService } from '../All.service'

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {
  @Output() getMovie: EventEmitter<any> = new EventEmitter();
  movies: any[];
  response;
  fav = 'Add Favourite';

  constructor(private http: HttpClient, private allService: AllService) {}

  ngOnInit() {
    // Send an http request
    this.http.get(`https://www.omdbapi.com/?s=${this.getInitialSearchValue()}&apikey=7770e21c`)
      .subscribe(responseData  => {
        this.response = responseData;
        this.movies = this.response.Search;
        this.allService.movies = this.response.Search;
        console.log(this.movies);
      })
  }

  getInitialSearchValue() {
    const initialSearches = ['man', 'spider', 'death', 'bat', 'fast', 'furious', 'bond'];
    const searchIndex = Math.floor(Math.random() * 7);
    return initialSearches[searchIndex];
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
  }

}
