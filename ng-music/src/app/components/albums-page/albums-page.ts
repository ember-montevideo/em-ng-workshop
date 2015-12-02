import {Component, NgFor} from 'angular2/angular2';
import {AlbumCover} from '../album-cover/album-cover';
import {Http} from 'angular2/http';

@Component({
  selector: 'albums-page',
  templateUrl: 'app/components/albums-page/albums-page.html',
  styleUrls: ['app/components/albums-page/albums-page.css'],
  providers: [],
  directives: [NgFor,AlbumCover],
  pipes: []
})
export class AlbumsPage {
  albums: any = [];

  constructor(http: Http) {
    http.get('/api/albums')
      .map(response => response.json()['albums'])
      .subscribe(albums => {
        console.log(albums);
        this.albums = albums;
      });
  }

}
