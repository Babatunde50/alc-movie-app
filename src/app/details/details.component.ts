import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient ) { }

  ngOnInit() {
    this.loading = true;
    this.http.get(`http://www.omdbapi.com/?i=${this.route.snapshot.params['id']}&apikey=7770e21c`)
      .subscribe(responseData  => {
        this.details = responseData;
        this.loading = false;
      })
  }
  

}
