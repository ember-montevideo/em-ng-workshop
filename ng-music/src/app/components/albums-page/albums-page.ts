import {Component} from 'angular2/angular2';
import {AlbumCover} from '../album-cover/album-cover';

@Component({
  selector: 'albums-page',
  templateUrl: 'app/components/albums-page/albums-page.html',
  styleUrls: ['app/components/albums-page/albums-page.css'],
  providers: [],
  directives: [AlbumCover],
  pipes: []
})
export class AlbumsPage {

  constructor() {}

}
