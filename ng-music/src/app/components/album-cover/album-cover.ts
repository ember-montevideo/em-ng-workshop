import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'album-cover',
  templateUrl: 'app/components/album-cover/album-cover.html',
  styleUrls: ['app/components/album-cover/album-cover.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: [],
  properties: ['album']
})
export class AlbumCover {
  album: any;

  constructor() {
  }

  onClick() {
    alert(this.album.name);
  }

}
