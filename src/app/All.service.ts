import { EventEmitter } from '@angular/core';

export class AllService {
    movies = [];

    getAll() {
        return this.movies.slice();
    }
}