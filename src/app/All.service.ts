import { EventEmitter } from '@angular/core';

export class AllService {
  searchUpdated = new EventEmitter<string>(); 
}
