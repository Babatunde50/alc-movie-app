import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';

  constructor(private http: HttpClient) {
    // Send an http request
    this.http.get('https://www.omdbapi.com/?s=man&apikey=7770e21c')
      .subscribe(responseData => {
        console.log(responseData);
      })
  }
}
