import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs';
import { Artist } from '../lastfm.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private rank: number = 0;

  @Input()
  artist: Artist;

  @Input()
  set position(num: number) {
    this.rank = num;
    if (this.rank === 1) {
      this.onWinner.emit({ artist: this.artist });
    }
  }
  get position() {
    return this.rank;
  }

  @Output('remove')
  removeArtist = new EventEmitter();

  @Output('winner')
  onWinner = new EventEmitter();

  constructor() { }

  getClass() {
    let css: any = { dimmed: this.position > 1 };
    css[`d${this.position}`] = this.position !== 0;
    return css;
  }

  onRemove(artist) {
    this.removeArtist.emit(artist);
  }

  ngOnInit() {

  }

}
