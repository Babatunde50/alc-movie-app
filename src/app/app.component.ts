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
  
  constructor(private allService: AllService, private http: HttpClient,){}

  ngOnInit() {
    
  }
  
  onNavigate(feature: string) {
    this.selected = feature;
  }

  ongetMovie(id) {
    this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=7770e21c`)
      .subscribe(responseData  => {
        this.details = responseData;
        this.selected = 'movie';
      })
  }

  onBack() {
    this.selected = 'all';
  }

}
