import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <h1>Albums for Sale!</h1>
    <album-list [albumList]="albums"><album-list>
  `
})
export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Ben Kweller", "Sha Sha", "Singer Songwriter", 13),
      new Album("Lady GaGa", "Artpop", "Pop", 13)
    ];
  }
}
