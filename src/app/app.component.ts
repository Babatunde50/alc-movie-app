import { Component, OnInit } from '@angular/core';
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
  
  constructor(private allService: AllService){}

  ngOnInit() {
    
  }

  
  onNavigate(feature: string) {
    this.selected = feature;
  }

}
