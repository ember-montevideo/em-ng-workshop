import {Component} from 'angular2/angular2';


@Component({
  selector: 'album-cover',
  templateUrl: 'app/components/album-cover/album-cover.html',
  styleUrls: ['app/components/album-cover/album-cover.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class AlbumCover {
  album: any;

  constructor() {
    this.album = {
      image: "/images/ramones-ramones.jpg",
      name: "Ramones"
    };
  }

  onClick() {
    alert(this.album.name);
  }

}
