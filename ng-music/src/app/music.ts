import {Component, bootstrap} from 'angular2/angular2';
import {AlbumsPage} from './components/albums-page/albums-page';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
  {
    path: '/',
    component: AlbumsPage
  }
])
@Component({
  selector: 'music-app',
  providers: [],
  templateUrl: 'app/music.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class MusicApp {

  constructor() {}

}
