import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllService } from './All.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AllService]
})

export class AppComponent implements OnInit  {
  title = 'movie-app';
  selected = 'all';
  details = null;
  search = this.getInitialSearchValue();
  response = null;
  movies = [];
  loading = false;
  
  constructor(private allService: AllService, private http: HttpClient,){}

  ngOnInit() {
    // Send an http request
    this.onGetMovies(this.search);
  }

  onGetMovies(search) {
    this.loading = true;
    this.http.get(`https://www.omdbapi.com/?s=${search}&apikey=7770e21c`)
      .subscribe(responseData  => {
        this.response = responseData;
        this.movies = this.response.Search;
        this.allService.movies = this.response.Search;
        this.loading = false;
      })
  }

  getInitialSearchValue() {
    const initialSearches = ['man', 'spider', 'death', 'bat', 'fast', 'furious', 'bond'];
    const searchIndex = Math.floor(Math.random() * 7);
    return initialSearches[searchIndex];
  }
  
  onNavigate(feature: string) {
    this.selected = feature;
  }

  ongetMovie(id) {
    this.selected = 'movie';
    this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=7770e21c`)
      .subscribe(responseData  => {
        this.details = responseData;
      })
  }

  onBack() {
    this.selected = 'all';
  }

  onHandleChange(event) {
    console.log(this.loading);
    this.search = event.target.value;
    this.onGetMovies(this.search);
  }

}
