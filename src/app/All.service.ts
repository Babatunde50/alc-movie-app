export class AllService {
    movies = [];

    getAll() {
        return this.movies.slice();
    }
}