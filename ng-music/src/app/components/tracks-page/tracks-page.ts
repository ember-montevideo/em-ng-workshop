import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Store} from '../../services/store/store';

@Component({
  selector: 'tracks-page',
  templateUrl: 'app/components/tracks-page/tracks-page.html',
  styleUrls: ['app/components/tracks-page/tracks-page.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class TracksPage {
  album: any;
  tracks: any = [];

  constructor(params: RouteParams, store: Store) {
    store.findOne(params.get('album_id')).subscribe(album => this.album = album);
  }

}
