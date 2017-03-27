# Band Fight

[Fight! Fight!](https://mikeybyker.github.io/band-fight/)

A random bunch of artists are displayed 3 at a time - dismiss your least favourite by clicking them. You don't get to see them actually fight. Keep going until you reach the last one. The winner!

This is an RxJS based app made with [angular](https://angular.io/). An exercise in reactive programming. There are lots of comments in the source.

The artist data comes via the [Last.fm](http://www.last.fm/) REST api.
The [example](https://mikeybyker.github.io/band-fight/) uses a node.js proxy (see index.js in /server) hosted on [now.sh](https://zeit.co/now) as an example of keeping the api key away from the front end. You can call Last.fm direct if you prefer - it's easier - a proxy isn't neccessary.

This project was generated with [angular-cli](https://github.com/angular/angular-cli).

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Version
0.2.0

#### For direct api access, add your [Last.fm](http://www.last.fm/api/account/create) API key to environments/environment.ts
#### If you prefer to use a proxy, then the API key can be added to server/index.js and hosted wherever you like - update the end point in environments/environment.ts

Mike

