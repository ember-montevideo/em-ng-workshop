import {bootstrap} from 'angular2/platform/browser';
import {MusicApp} from './app/music';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Store} from './app/services/store/store';

bootstrap(MusicApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, Store]);
