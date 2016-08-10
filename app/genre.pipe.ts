import { Pipe, PipeTransform} from 'angular2/core'
import { Album } from './album.model';

@Pipe ({
  name: "genre",
  pure: false

})
export class GenrePipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredAlbumGenre = args[0];
    if(desiredAlbumGenre === "Pop") {
      return input.filter(album => (album.genre === "Pop"));
    } else if(desiredAlbumGenre === "Singer Songwriter")  {
      return input.filter(album => (album.genre === "Singer Songwriter"));
    } else {
      return input;
    }
  }
}
