import { Component, Input } from '@angular/core';
import { Artist } from '../lastfm.service';

@Component({
  selector: 'ratings',
  template: `
    <ol>
      <li *ngFor="let artist of list; trackBy:trackByFn">{{artist.name}}</li>
    </ol>
  `
})
export class Ratings {
  @Input()
  list: Artist[];

  trackByFn(index, artist) {
    return artist.id;
  }
}
