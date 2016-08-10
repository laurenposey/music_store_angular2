import { Component } from 'angular2/core'
import { AppComponent } from './app.component';
import { Album } from './album.model';

@Component({
  selector: "album-list",
  inputs: ["albumList"],
  template: `
  <album-display *ngFor="#album of albumList">Artist: {{ album.artist }}  Name of album: {{ album.name }} Album price: $ {{ album.price }}<br></album-display>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
}
