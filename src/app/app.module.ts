import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import {
  ArtistListComponent,
  Ratings
} from './artist-list/';

import { LastFM } from './lastfm.service';
import { LastFMConfig } from './lastfm.config';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistListComponent,
    Ratings
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    LastFM,
    LastFMConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
