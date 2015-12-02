import {bootstrap} from 'angular2/angular2';
import {MusicApp} from './app/music';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(MusicApp, [HTTP_PROVIDERS]);
