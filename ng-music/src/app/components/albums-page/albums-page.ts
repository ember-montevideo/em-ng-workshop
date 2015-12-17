import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {AlbumCover} from '../album-cover/album-cover';
import {Store} from '../../services/store/store';

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

  constructor(store: Store) {
    store.findAll().subscribe(albums => this.albums = albums);
  }
}
