import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

// import 'rxjs/add/observable/fromPromise';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/observable/if';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/withLatestFrom';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/toArray';
// import 'rxjs/add/operator/zip';
// import 'rxjs/add/operator/zipAll';
// import 'rxjs/add/operator/distinct';
// import 'rxjs/add/operator/concatMap';
// import 'rxjs/add/operator/count';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
