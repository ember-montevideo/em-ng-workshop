import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/angular2';
import {AlbumCover} from './album-cover';


describe('AlbumCover Component', () => {

  beforeEachProviders(() => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(AlbumCover).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
