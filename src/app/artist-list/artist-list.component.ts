import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable,
  Subject,
  ReplaySubject
} from 'rxjs';

import {
  LastFM,
  Artist
} from '../lastfm.service';

interface RankData {
  button: number;
  artist: Artist;
}

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Observable<Artist[]>;
  distinct: Observable<Artist>;  // On occassion we get duplicated, which is no good. So we create a distinct version

  // Subjects to observe for button clicks and subscribe to artists
  subject1: Subject<Artist> = new Subject<Artist>();
  subject2: Subject<Artist> = new Subject<Artist>();
  subject3: Subject<Artist> = new Subject<Artist>();

  // The artist to display in each slot
  artist1$: Observable<Artist>;
  artist2$: Observable<Artist>;
  artist3$: Observable<Artist>;

  // Subjects for artist calls to next()
  removeSlot1: Subject<Artist> = new Subject<Artist>();
  removeSlot2: Subject<Artist> = new Subject<Artist>();
  removeSlot3: Subject<Artist> = new Subject<Artist>();

  // The final position (first, second or third) in each slot
  positions = { 1: 0, 2: 0, 3: 0 };

  removedList: Artist[] = [];    // each removed artist
  // remainingList: Artist[] = [];  // pool of remaining artists : debug

  // Lastfm options
  // Weird but... limit is per page, and page is number of pages! Not the nth page, but number of pages of (limit) artists!
  options = { limit: 100, page: 1 };
  complete: boolean = false;

  noop = () => { };

  shuffle(arr) {
    let a = [...arr];
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }

  /**
   * I was picking a random limit for the data, 
   * but last.fm is a little odd with limits/paging
   */
  random(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }

  constructor(private _lastFM: LastFM) {

    this.artists = this._lastFM
      .Charts.getTopArtists(this.options); // ...could do a geo version...


    // Shuffle, make sure no duplicates or any with missing id, then grab 50
    this.distinct = this.artists
      .map((orig) => {
        return this.shuffle(orig);
      })
      .flatMap((artist) => artist)
      .filter((artist) => !!artist.id)
      .distinct((x, y) => { return x.id === y.id; })
      .take(50).share(); // ** Must share so that the remainingList is the same

    // Create a list to update as artists are dismissed : This is for debug use
    /*this.distinct
      .subscribe((artist) => {
        this.remainingList = [artist, ...this.remainingList];
      }, this.noop, () => {
        // console.log('distinct COMPLETE', this.remainingList, this.remainingList.length);
      });*/
  }

  /**
   * Update the list of remaining artists
   */
  // updateRemaining(removedArtist) {
  //   const index = this.remainingList.findIndex((artist) => {
  //     return artist.id === removedArtist.id;
  //   });
  //   if (index !== -1) {
  //     this.remainingList = [...this.remainingList.slice(0, index), ...this.remainingList.slice(index + 1)];
  //   }
  // }

  /**
   * Update the list of removed artists
   */
  updateRemoved(removedArtist) {
    this.removedList = [removedArtist, ...this.removedList];
  }

  /**
   * When we are down to last 3 and are placing third, second...first
   */
  onPlace(id, place) {
    this.positions[id] = place;
    this[`subject${id}`].complete();
    // this[`removeSlot${id}`].complete();     // stops the info/data updating
    this[`removeSlot${id}`].unsubscribe();  // keeps the info/data updating, but errors out if called
  }

  /**
   * Notified by the winning artist
   */
  onWinner({artist}) {
    console.log('And the winner is...  ', artist.name);
    // this.updateRemaining(artist);
    this.updateRemoved(artist);
    this.complete = true;
    // The changed styles do not kick in (angular bug?) - unless you force it with something like:
    let timeoutId = setTimeout(() => {
      clearTimeout(timeoutId);
    }, 100);
  }

  /**
   * Find which slot the winner is in
   */
  winnerPosition(positions) {
    for (let key in positions) {
      if (positions[key] === 0) {
        return parseInt(key);
      }
    }
    return 0;
  }

  ngOnInit() {

    // Observables mapped to the slot number. Throttle to prevent all sorts of nonsense.
    const slot1$: Observable<number> = this.subject1.asObservable().startWith(null).map(() => 1);
    const slot2$: Observable<number> = this.subject2.asObservable().startWith(null).map(() => 2);
    const slot3$: Observable<number> = this.subject3.asObservable().startWith(null).map(() => 3);

    // Observable for any button click. share() to make hot
    const anyButton$: Observable<number> = slot1$.merge(slot2$, slot3$).share();

    // ReplaySubject to allow the subscribers to get the intial item
    const view: ReplaySubject<any> = new ReplaySubject(1);
    // For each click, zip with distinct to get each article in turn.
    const viewer: Observable<RankData> = anyButton$
      .zip(this.distinct, (button, artist) => {
        return { button, artist };
      });

    // So we can pause subscription to clicks
    const pauser: Subject<{}> = new Subject();
    const pausable: Observable<any> = pauser
      .switchMap(paused => {
        return paused ? Observable.never() : anyButton$;
      });

    // Count clicks
    const initialData = { count: 3, button: 0 };
    const decrement = (acc, button) => {
      return { count: acc.count - 1, button: button };
    }
    const counter: Observable<any> = pausable
      .startWith(initialData)
      .scan(decrement).share();

    // Subscribe to the clicks following dismissal of all but the last 3
    const thirdPlace: Observable<any> = counter.skip(1).take(1);
    const secondPlace: Observable<any> = counter.skip(1).take(1); // and winner...

    viewer.subscribe(view);

    // Template button actions
    // Could call just this.subject1 etc. > but we want to allow the info/data to updated after subject complete (see removeAny)
    this.removeSlot1
      .throttleTime(500)
      .subscribe((artist) => {
        this.subject1.next(artist);
      });
    this.removeSlot2
      .throttleTime(500)
      .subscribe(artist => {
        this.subject2.next(artist);
      });
    this.removeSlot3
      .throttleTime(500)
      .subscribe(artist => {
        this.subject3.next(artist);
      });

    this.artist1$ = view
      .filter(({button, artist}) => button === 1)
      .map(({button, artist}) => artist);
    this.artist2$ = view
      .filter(({button, artist}) => button === 2)
      .map(({button, artist}) => artist);
    this.artist3$ = view
      .filter(({button, artist}) => button === 3)
      .map(({button, artist}) => artist);

    // removeAny: subscribe during the click-to-dismiss part (once all artists have been displayed, this completes)
    const removeAny: Observable<Artist> = this.subject1.merge(this.subject2, this.subject3);
    // pickAny: subscribe during the click-to-pick-top-3 part (which is paused until needed) *
    const pickAny: Observable<Artist> = this.removeSlot1.merge(this.removeSlot2, this.removeSlot3);
    // * Could use this (without the pause) so long as we don't throttle - but we do (as such, things can go out of sync...)

    // Once all images shown, this completes, and unpauses subscription to click/counter
    view
      .subscribe(({button, artist}) => {
        // console.log('View : ', { button, artist });
      }, this.noop, () => {
        console.log('View complete');
        pauser.next(false);
      });

    thirdPlace
      .subscribe(({count, button}) => {
        // console.log('thirdPlace : ', { count, button });
        this.onPlace(button, 3);
      }, this.noop, () => {
        // console.log('thirdPlace complete');
      });
    secondPlace
      .subscribe(({count, button}) => {
        // console.log('secondPlace : ', { count, button });
        this.onPlace(button, 2);
        const win = this.winnerPosition(this.positions);
        this.onPlace(win, 1);
      }, this.noop, () => {
        // console.log('secondPlace complete');
      });

    // Update the lists of remaining/removed
    // First, during the click-to-dismiss part
    removeAny
      .distinctUntilChanged() // safety : won't let the same artist come through (...as we can't complete, that prevents final update)
      .subscribe((removedArtist) => {
        // console.log('Removed : ', removedArtist.name)
        // this.updateRemaining(removedArtist);
        this.updateRemoved(removedArtist);
      });

    // Second, during the click-to-pick-top-3 part
    pickAny
      .skipUntil(pausable)
      .subscribe((removedArtist) => {
        // console.log('Picked : ', removedArtist.name)
        // this.updateRemaining(removedArtist);
        this.updateRemoved(removedArtist);
      });

    // Preload images - bit more speedy
    this.distinct
      .subscribe((artist) => {
        if (artist.image && artist.image.extralarge) {
          let image = new Image()
          image.src = artist.image.extralarge
        }
      });
  }

  /**
   * Meh. Mush the styles a little when complete.
   */
  setClasses(id) {
    if (!this.complete) {
      return { 'col-xs-4': true };
    }
    const p = this.positions[id],
      isWinner = p === 1,
      isSecond = p === 2,
      isThird = p === 3;

    // If moved, can animate - just for a laugh
    let hasMoved = false;
    if ((id === 1 && !isSecond) || (id === 2 && !isWinner) || (id === 3 && !isThird)) {
      hasMoved = true;
    }
    let classes: any = {
      'col-xs-4': !this.complete,
      'col-xs-3': this.complete && !isWinner,
      'col-xs-6': this.complete && isWinner,
      'flex-xs-last': this.complete && isThird,    // move 3rd choice to last slot
      'flex-xs-first': this.complete && isSecond,  // move 2nd choice to first slot
      'anim': this.complete && hasMoved
    };
    return classes;
  }

}
