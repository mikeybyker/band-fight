import { Component, Input } from '@angular/core';
import { Artist } from '../lastfm.service';

@Component({
  selector: 'ratings',
  template: `
    <ol>
      <li *ngFor="let artist of list; trackBy:artist?.id">{{artist.name}}</li>
    </ol>
  `
})
export class Ratings {
  @Input()
  list: Artist[];
}