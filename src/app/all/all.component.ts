import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AllService } from '../All.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})

export class AllComponent implements OnInit {
  movies = [];
  @Output() getMovie: EventEmitter<any> = new EventEmitter();
  response;
  fav: string = 'Add Favourite';
  loading = false;

  constructor(private http: HttpClient, private allService: AllService){
    this.allService.searchUpdated.subscribe(
      (search: string) => {
        this.onGetMovies(search)
      }
    )
  }

  ngOnInit() {
    this.onGetMovies(this.getInitialSearchValue());
  }

  onGetMovies(search) {
    this.loading = true;
    this.http.get(`https://www.omdbapi.com/?s=${search}&apikey=7770e21c`)
      .subscribe(responseData  => {
        this.response = responseData;
        this.movies = this.response.Search;
        this.loading = false;
      })
  }

  getInitialSearchValue() {
    const initialSearches = ['man', 'spider', 'death', 'bat', 'fast', 'furious', 'bond'];
    const searchIndex = Math.floor(Math.random() * 7);
    return initialSearches[searchIndex];
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
