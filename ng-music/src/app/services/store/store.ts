import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class Store {

  constructor(private http: Http) {}

  findAll() {
    return this.http
      .get('/api/albums')
      .map(response => response.json()['albums']);
  }

  findOne(albumId) {
    return this.http.get('/api/albums/' + albumId).map(response => response.json()['album']);
  }
}
