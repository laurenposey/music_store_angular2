import { Component, EventEmitter} from 'angular2/core'
import { AppComponent } from './app.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';

@Component({
  selector: "album-list",
  inputs: ["albumList"],
  pipes: [GenrePipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="pop">Pop</option>
    <option value="singerSongwriter">Singer Songwriter</option>
  </select>
  <br>
  <album-display *ngFor="#album of albumList | genre:filterGenre">Artist: {{ album.artist }}  Name of album: {{ album.name }} Album price: $ {{ album.price }}<br></album-display>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre

  onChange(filterOption) {
    this.filterGenre = filterOption;
    console.log(this.filterGenre)
  }
}
