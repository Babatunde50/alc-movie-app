import { Component } from '@angular/core';
import { AllService } from './All.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AllService]
})

export class AppComponent {
  
  constructor(private allService: AllService, private router: Router){}


  onHandleChange(event) {
    this.router.navigate(['/movies'])
    this.allService.searchUpdated.emit(event.target.value);
  }

}
