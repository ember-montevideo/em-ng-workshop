import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Store {

  constructor(private http: Http) {}

  findAll() {
    return Observable.create(subscriber => {
      subscriber.next([]);

      this.http
        .get('/api/albums')
        .subscribe(response => {
          subscriber.next(response.json()['albums']);
        });
    });
  }

  findOne(albumId) {
    return Observable.create(subscriber => {
      // return empty album first
      subscriber.next({
        image: '/images/placeholder.png'
      });

      this
        .http
        .get(`/api/albums/${albumId}`)
        .subscribe(response => {
          subscriber.next(response.json()['album']);
        });
    });
  }
}
