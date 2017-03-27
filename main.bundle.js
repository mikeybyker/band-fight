webpackJsonp([1,4],{

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 127;


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(81);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(197),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artist_artist_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artist_list___ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lastfm_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lastfm_config__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__artist_artist_component__["a" /* ArtistComponent */],
            __WEBPACK_IMPORTED_MODULE_5__artist_list___["a" /* ArtistListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__artist_list___["b" /* Ratings */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__lastfm_service__["a" /* LastFM */],
            __WEBPACK_IMPORTED_MODULE_7__lastfm_config__["a" /* LastFMConfig */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lastfm_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistListComponent = (function () {
    function ArtistListComponent(_lastFM) {
        var _this = this;
        this._lastFM = _lastFM;
        // Subjects to observe for button clicks and subscribe to artists
        this.subject1 = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.subject2 = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.subject3 = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // Subjects for artist calls to next()
        this.removeSlot1 = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.removeSlot2 = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.removeSlot3 = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        // The final position (first, second or third) in each slot
        this.positions = { 1: 0, 2: 0, 3: 0 };
        this.removedList = []; // each removed artist
        // remainingList: Artist[] = [];  // pool of remaining artists : debug
        // Lastfm options
        // Weird but... limit is per page, and page is number of pages! Not the nth page, but number of pages of (limit) artists!
        this.options = { limit: 100, page: 1 };
        this.complete = false;
        this.noop = function () { };
        this.artists = this._lastFM
            .Charts.getTopArtists(this.options); // ...could do a geo version...
        // Shuffle, make sure no duplicates or any with missing id, then grab 50
        this.distinct = this.artists
            .map(function (orig) {
            return _this.shuffle(orig);
        })
            .flatMap(function (artist) { return artist; })
            .filter(function (artist) { return !!artist.id; })
            .distinct(function (x) { return x.id; })
            .take(50).share(); // ** Must share so that the remainingList is the same
        // Create a list to update as artists are dismissed : This is for debug use
        /*this.distinct
          .subscribe((artist) => {
            this.remainingList = [artist, ...this.remainingList];
          }, this.noop, () => {
            // console.log('distinct COMPLETE', this.remainingList, this.remainingList.length);
          });*/
    }
    ArtistListComponent.prototype.shuffle = function (arr) {
        var a = arr.slice();
        for (var i = a.length; i; i--) {
            var j = Math.floor(Math.random() * i);
            _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    /**
     * I was picking a random limit for the data,
     * but last.fm is a little odd with limits/paging
     */
    ArtistListComponent.prototype.random = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    };
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
    ArtistListComponent.prototype.updateRemoved = function (removedArtist) {
        this.removedList = [removedArtist].concat(this.removedList);
    };
    /**
     * When we are down to last 3 and are placing third, second...first
     */
    ArtistListComponent.prototype.onPlace = function (id, place) {
        this.positions[id] = place;
        this["subject" + id].complete();
        // this[`removeSlot${id}`].complete();     // stops the info/data updating
        this["removeSlot" + id].unsubscribe(); // keeps the info/data updating, but errors out if called
    };
    /**
     * Notified by the winning artist
     */
    ArtistListComponent.prototype.onWinner = function (_a) {
        var artist = _a.artist;
        console.log('And the winner is...  ', artist.name);
        // this.updateRemaining(artist);
        this.updateRemoved(artist);
        this.complete = true;
        // The changed styles do not kick in (angular bug?) - unless you force it with something like:
        var timeoutId = setTimeout(function () {
            clearTimeout(timeoutId);
        }, 100);
    };
    /**
     * Find which slot the winner is in
     */
    ArtistListComponent.prototype.winnerPosition = function (positions) {
        for (var key in positions) {
            if (positions[key] === 0) {
                return parseInt(key);
            }
        }
        return 0;
    };
    ArtistListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Observables mapped to the slot number. Throttle to prevent all sorts of nonsense.
        var slot1$ = this.subject1.asObservable().startWith(null).map(function () { return 1; });
        var slot2$ = this.subject2.asObservable().startWith(null).map(function () { return 2; });
        var slot3$ = this.subject3.asObservable().startWith(null).map(function () { return 3; });
        // Observable for any button click. share() to make hot
        var anyButton$ = slot1$.merge(slot2$, slot3$).share();
        // ReplaySubject to allow the subscribers to get the intial item
        var view = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](1);
        // For each click, zip with distinct to get each artist in turn.
        var viewer = anyButton$
            .zip(this.distinct, function (button, artist) {
            return { button: button, artist: artist };
        });
        // So we can pause subscription to clicks
        var pauser = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        var pausable = pauser
            .switchMap(function (paused) {
            return paused ? __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].never() : anyButton$;
        });
        // Count clicks
        var initialData = { count: 3, button: 0 };
        var decrement = function (acc, button) {
            return { count: acc.count - 1, button: button };
        };
        var counter = pausable
            .startWith(initialData)
            .scan(decrement).share();
        // Subscribe to the clicks following dismissal of all but the last 3
        var thirdPlace = counter.skip(1).take(1);
        var secondPlace = counter.skip(1).take(1); // and winner...
        viewer.subscribe(view);
        // Template button actions
        // Could call just this.subject1 etc. > but we want to allow the info/data to updated after subject complete (see removeAny)
        this.removeSlot1
            .throttleTime(500)
            .subscribe(function (artist) {
            _this.subject1.next(artist);
        });
        this.removeSlot2
            .throttleTime(500)
            .subscribe(function (artist) {
            _this.subject2.next(artist);
        });
        this.removeSlot3
            .throttleTime(500)
            .subscribe(function (artist) {
            _this.subject3.next(artist);
        });
        this.artist1$ = view
            .filter(function (_a) {
            var button = _a.button, artist = _a.artist;
            return button === 1;
        })
            .map(function (_a) {
            var button = _a.button, artist = _a.artist;
            return artist;
        });
        this.artist2$ = view
            .filter(function (_a) {
            var button = _a.button, artist = _a.artist;
            return button === 2;
        })
            .map(function (_a) {
            var button = _a.button, artist = _a.artist;
            return artist;
        });
        this.artist3$ = view
            .filter(function (_a) {
            var button = _a.button, artist = _a.artist;
            return button === 3;
        })
            .map(function (_a) {
            var button = _a.button, artist = _a.artist;
            return artist;
        });
        // removeAny: subscribe during the click-to-dismiss part (once all artists have been displayed, this completes)
        var removeAny = this.subject1.merge(this.subject2, this.subject3);
        // pickAny: subscribe during the click-to-pick-top-3 part (which is paused until needed) *
        var pickAny = this.removeSlot1.merge(this.removeSlot2, this.removeSlot3);
        // * Could use this (without the pause) so long as we don't throttle - but we do (as such, things can go out of sync...)
        // Once all images shown, this completes, and unpauses subscription to click/counter
        view
            .subscribe(function (_a) {
            var button = _a.button, artist = _a.artist;
            // console.log('View : ', { button, artist });
        }, this.noop, function () {
            console.log('View complete');
            pauser.next(false);
        });
        thirdPlace
            .subscribe(function (_a) {
            var count = _a.count, button = _a.button;
            // console.log('thirdPlace : ', { count, button });
            _this.onPlace(button, 3);
        }, this.noop, function () {
            // console.log('thirdPlace complete');
        });
        secondPlace
            .subscribe(function (_a) {
            var count = _a.count, button = _a.button;
            // console.log('secondPlace : ', { count, button });
            _this.onPlace(button, 2);
            var win = _this.winnerPosition(_this.positions);
            _this.onPlace(win, 1);
        }, this.noop, function () {
            // console.log('secondPlace complete');
        });
        // Update the lists of remaining/removed
        // First, during the click-to-dismiss part
        removeAny
            .distinctUntilChanged() // safety : won't let the same artist come through (...as we can't complete, that prevents final update)
            .subscribe(function (removedArtist) {
            // console.log('Removed : ', removedArtist.name)
            // this.updateRemaining(removedArtist);
            _this.updateRemoved(removedArtist);
        });
        // Second, during the click-to-pick-top-3 part
        pickAny
            .skipUntil(pausable)
            .subscribe(function (removedArtist) {
            // console.log('Picked : ', removedArtist.name)
            // this.updateRemaining(removedArtist);
            _this.updateRemoved(removedArtist);
        });
        // Preload images - bit more speedy
        this.distinct
            .subscribe(function (artist) {
            if (artist.image && artist.image.extralarge) {
                var image = new Image();
                image.src = artist.image.extralarge;
            }
        });
    };
    /**
     * Meh. Mush the styles a little when complete.
     */
    ArtistListComponent.prototype.setClasses = function (id) {
        if (!this.complete) {
            return { 'col-sm-4': true };
        }
        var p = this.positions[id], isWinner = p === 1, isSecond = p === 2, isThird = p === 3;
        // If moved, can animate - just for a laugh
        var hasMoved = false;
        if ((id === 1 && !isSecond) || (id === 2 && !isWinner) || (id === 3 && !isThird)) {
            hasMoved = true;
        }
        var classes = {
            'col-sm-4': !this.complete,
            'col-sm-3': this.complete && !isWinner,
            'col-sm-6': this.complete && isWinner,
            'flex-sm-last': this.complete && isThird,
            'flex-sm-first': this.complete && isSecond,
            'anim': this.complete && hasMoved
        };
        return classes;
    };
    return ArtistListComponent;
}());
ArtistListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-artist-list',
        template: __webpack_require__(198),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lastfm_service__["a" /* LastFM */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lastfm_service__["a" /* LastFM */]) === "function" && _a || Object])
], ArtistListComponent);

var _a;
//# sourceMappingURL=artist-list.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__artist_list_component__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__artist_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ratings_component__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ratings_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ratings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ratings = (function () {
    function Ratings() {
    }
    return Ratings;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Array)
], Ratings.prototype, "list", void 0);
Ratings = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ratings',
        template: "\n    <ol>\n      <li *ngFor=\"let artist of list; trackBy:artist?.id\">{{artist.name}}</li>\n    </ol>\n  "
    })
], Ratings);

//# sourceMappingURL=ratings.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lastfm_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArtistComponent = (function () {
    function ArtistComponent() {
        this.rank = 0;
        this.removeArtist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.onWinner = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    Object.defineProperty(ArtistComponent.prototype, "position", {
        get: function () {
            return this.rank;
        },
        set: function (num) {
            this.rank = num;
            if (this.rank === 1) {
                this.onWinner.emit({ artist: this.artist });
            }
        },
        enumerable: true,
        configurable: true
    });
    ArtistComponent.prototype.getClass = function () {
        var css = { dimmed: this.position > 1 };
        css["d" + this.position] = this.position !== 0;
        return css;
    };
    ArtistComponent.prototype.onRemove = function (artist) {
        this.removeArtist.emit(artist);
    };
    ArtistComponent.prototype.ngOnInit = function () {
    };
    return ArtistComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lastfm_service__["b" /* Artist */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lastfm_service__["b" /* Artist */]) === "function" && _a || Object)
], ArtistComponent.prototype, "artist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ArtistComponent.prototype, "position", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])('remove'),
    __metadata("design:type", Object)
], ArtistComponent.prototype, "removeArtist", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])('winner'),
    __metadata("design:type", Object)
], ArtistComponent.prototype, "onWinner", void 0);
ArtistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-artist',
        template: __webpack_require__(199),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [])
], ArtistComponent);

var _a;
//# sourceMappingURL=artist.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastFMConfig; });

var LastFMConfig = [
    {
        provide: 'LastFMConfig',
        useValue: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */]
    }
];
//# sourceMappingURL=lastfm.config.js.map

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"artist-list.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, ".description\r\n{\r\n  height: 70px;\r\n  overflow: hidden;\r\n}\r\n.image,\r\n.image button\r\n{\r\n  position: relative;\r\n}\r\n\r\n.image button\r\n{\r\n  width: 100%;\r\n  height: 100%; \r\n  background: none !important;\r\n  border: none; \r\n  padding: 0!important;\r\n  font: inherit;\r\n  border: none; \r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n  .image button:focus\r\n  {\r\n    outline:0;\r\n  }\r\n\r\n  .image.dimmed button:after\r\n  {\r\n    content: \" \";  \r\n    display: -webkit-box;  \r\n    display: -ms-flexbox;  \r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: absolute;\r\n    height: 100%;\r\n    z-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    font-size: 48px;\r\n    color: #fff;\r\n    text-align: center;\r\n    cursor: default;\r\n  }\r\n  .image.dimmed.d2 button:after\r\n  {\r\n    content: \"2\";\r\n  }\r\n  .image.dimmed.d3 button:after\r\n  {\r\n    content: \"3\";\r\n  }\r\n  .image.d1 button\r\n  {\r\n    border: solid #C20000 4px;\r\n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\r\n    cursor: default;\r\n  }\r\n.header\r\n{\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n", "", {"version":3,"sources":["D:/Development/angular/angular2/band-fight/src/app/artist/artist.component.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,iBAAiB;CAClB;AACD;;;EAGE,mBAAmB;CACpB;;AAED;;EAEE,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,cAAc;CACf;EACC;;IAEE,UAAU;GACX;;EAED;;IAEE,aAAa;IACb,qBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,0BAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,yBAAwB;QAAxB,sBAAwB;YAAxB,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,OAAO;IACP,QAAQ;IACR,SAAS;IACT,+BAA+B;IAC/B,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;GACjB;EACD;;IAEE,aAAa;GACd;EACD;;IAEE,aAAa;GACd;EACD;;IAEE,0BAA0B;IAC1B,+CAA+C;IAC/C,gBAAgB;GACjB;AACH;;EAEE,aAAa;EACb,iBAAiB;CAClB","file":"artist.component.css","sourcesContent":[".description\r\n{\r\n  height: 70px;\r\n  overflow: hidden;\r\n}\r\n.image,\r\n.image button\r\n{\r\n  position: relative;\r\n}\r\n\r\n.image button\r\n{\r\n  width: 100%;\r\n  height: 100%; \r\n  background: none !important;\r\n  border: none; \r\n  padding: 0!important;\r\n  font: inherit;\r\n  border: none; \r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n  .image button:focus\r\n  {\r\n    outline:0;\r\n  }\r\n\r\n  .image.dimmed button:after\r\n  {\r\n    content: \" \";  \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    height: 100%;\r\n    z-index: 10;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    font-size: 48px;\r\n    color: #fff;\r\n    text-align: center;\r\n    cursor: default;\r\n  }\r\n  .image.dimmed.d2 button:after\r\n  {\r\n    content: \"2\";\r\n  }\r\n  .image.dimmed.d3 button:after\r\n  {\r\n    content: \"3\";\r\n  }\r\n  .image.d1 button\r\n  {\r\n    border: solid #C20000 4px;\r\n    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);\r\n    cursor: default;\r\n  }\r\n.header\r\n{\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar sticky-top navbar-inverse bg-inverse\">\r\n  <div class=\"navbar-text\">\r\n    <a href=\"./ \" class=\"navbar-brand mr-auto \">Band Fight</a>\r\n    <a href=\"https://github.com/mikeybyker/band-fight \" class=\"navbar-brand float-right \">Github</a>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"jumbotron text-sm-center \">\r\n  <div class=\"container \">\r\n    <h1 class=\"jumbotron-heading \">Fight! Fight!</h1>\r\n    <p class=\"lead text-muted \">\r\n      Click to reject...until you have a winner\r\n    </p>\r\n  </div>\r\n</section>\r\n\r\n<app-artist-list></app-artist-list>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"album text-muted\">\r\n  <div class=\"container\">\r\n    <div class=\"row cards\" [class.active]=\"(artist1$ | async)?.name\">\r\n      <div class=\"col-sm-4 \" [ngClass]=\"setClasses(1) \">\r\n        <app-artist id=\"option1 \" class=\"card \" (winner)=\"onWinner($event) \" [artist]=\"artist1$ | async \" (remove)=\"removeSlot1.next($event) \"\r\n          [position]=\"positions[1] \">\r\n        </app-artist>\r\n      </div>\r\n      <div class=\"col-sm-4 \" [ngClass]=\"setClasses(2) \">\r\n        <app-artist id=\"option2 \" class=\"card \" (winner)=\"onWinner($event) \" [artist]=\"artist2$ | async \" (remove)=\"removeSlot2.next($event) \"\r\n          [position]=\"positions[2] \">\r\n        </app-artist>\r\n      </div>\r\n      <div class=\"col-sm-4 \" [ngClass]=\"setClasses(3) \">\r\n        <app-artist id=\"option3 \" class=\"card \" (winner)=\"onWinner($event) \" [artist]=\"artist3$ | async \" (remove)=\"removeSlot3.next($event) \"\r\n          [position]=\"positions[3] \">\r\n        </app-artist>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"artists | async; else loading\">\r\n    </div>\r\n    <ng-template #loading>Loading artist pool...</ng-template>\r\n\r\n    <div class=\"row \">\r\n      <div class=\"col-sm-12 \" *ngIf=\"complete \">\r\n        <h3>Your Ratings</h3>\r\n        <ratings [list]='removedList'></ratings>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"image\" *ngIf=\"artist\" [ngClass]=\"getClass()\">\r\n  <button (click)=\"onRemove(artist)\" [disabled]=\"position !== 0\">\r\n    <img src=\"{{artist?.image.extralarge}}\" alt=\"\">\r\n  </button>\r\n</div>\r\n<div class=\"content\">\r\n  <div class=\"header\">\r\n    {{artist?.name}}\r\n  </div>\r\n</div>"

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* unused harmony export Album */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Artist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LastFM; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// Convert last.fm array for easier use
var getImages = function (image, specified) {
    if (specified === void 0) { specified = null; }
    // image is the array of images from last fm
    // small, medium, large, extralarge, mega
    // let [small, medium, large, extralarge, mega] = image;
    // return {
    //     small,
    //     medium,
    //     large,
    //     extralarge,
    //     mega,
    // }
    var o = {};
    image
        .filter(function (o) { return o['#text']; })
        .forEach(function (element, index, array) { return o[element.size] = element['#text']; });
    if (specified && o[specified]) {
        return _a = {}, _a[specified] = o[specified], _a;
    }
    return o;
    var _a;
};
var Album = (function () {
    function Album(image, // Gets mutated by getImages
        listeners, mbid, name, playcount, tags, tracks, url, wiki) {
        if (image === void 0) { image = []; }
        if (listeners === void 0) { listeners = ''; }
        if (mbid === void 0) { mbid = ''; }
        if (name === void 0) { name = ''; }
        if (playcount === void 0) { playcount = ''; }
        if (tags === void 0) { tags = {}; }
        if (tracks === void 0) { tracks = {}; }
        if (url === void 0) { url = ''; }
        if (wiki === void 0) { wiki = {}; }
        this.image = image;
        this.listeners = listeners;
        this.mbid = mbid;
        this.name = name;
        this.playcount = playcount;
        this.tags = tags;
        this.tracks = tracks;
        this.url = url;
        this.wiki = wiki;
        this.image = this.image ? getImages(this.image) : {};
    }
    Album.fromJSON = function (json) {
        var artist = Object.create(Album.prototype);
        return Object.assign(artist, json, {
            image: json.image ? getImages(json.image) : {}
        });
    };
    return Album;
}());

var Artist = (function () {
    function Artist(image, // Gets mutated by getImages
        mbid, id, // Copy of mbid
        name) {
        if (image === void 0) { image = []; }
        if (mbid === void 0) { mbid = ''; }
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        this.image = image;
        this.mbid = mbid;
        this.id = id;
        this.name = name;
        this.image = this.image ? getImages(this.image, 'extralarge') : {};
        // this.similar = this.similar ? Artist.createSimilarArtists(this.similar) : [];
    }
    Artist.fromJSON = function (json) {
        var artist = Object.create(Artist.prototype);
        return Object.assign(artist, json, {
            image: json.image ? getImages(json.image, 'extralarge') : {},
            // similar: json.similar ? Artist.createSimilarArtists(json.similar) : [],
            id: json.mbid,
            // Just blanking out the rest
            bio: '',
            listeners: '',
            ontour: '',
            similar: null,
            stats: null,
            streamable: '',
            tags: null,
            url: ''
        });
    };
    Artist.createSimilarArtists = function (similar) {
        if (!similar || !similar.artist) {
            return [];
        }
        return similar.artist
            .map(function (artist) {
            return Artist.fromJSON(artist);
        });
    };
    return Artist;
}());

var LastFM = (function () {
    function LastFM(config, http) {
        this.config = config;
        this.http = http;
        this.mbidPattern = /^[a-fA-F0-9]{8}(-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}$/;
        this.Album = {
            getInfo: this.getAlbumInfo.bind(this),
            getTopTags: this.getAlbumTopTags.bind(this),
            search: this.searchAlbum.bind(this),
            _getInfo: this._getAlbumInfo.bind(this),
            _getTopTags: this._getAlbumTopTags.bind(this),
            _search: this._searchAlbum.bind(this)
        };
        this.Artist = {
            getInfo: this.getArtistInfo.bind(this),
            getSimilar: this.getSimilar.bind(this),
            getTopAlbums: this.getTopAlbums.bind(this),
            getTopTags: this.getArtistTopTags.bind(this),
            getTopTracks: this.getTopTracks.bind(this),
            search: this.searchArtists.bind(this),
            _getInfo: this._getArtistInfo.bind(this),
            _getSimilar: this._getSimilar.bind(this),
            _getTopAlbums: this._getTopAlbums.bind(this),
            _getTopTags: this._getArtistTopTags.bind(this),
            _getTopTracks: this._getTopTracks.bind(this),
            _search: this._searchArtists.bind(this)
        };
        this.Charts = {
            getTopArtists: this.getTopArtists.bind(this),
            getTopTags: this.getChartsTopTags.bind(this),
            getTopTracks: this.getChartsTopTracks.bind(this),
            _getTopArtists: this._getTopArtists.bind(this),
            _getTopTags: this._getChartsTopTags.bind(this),
            _getTopTracks: this._getChartsTopTracks.bind(this)
        };
        this.Geo = {
            getTopArtists: this.getTopGeoArtists.bind(this),
            getTopTracks: this.getTopGeoTracks.bind(this),
            _getTopArtists: this._getTopGeoArtists.bind(this),
            _getTopTracks: this._getTopGeoTracks.bind(this)
        };
        this.Track = {
            getInfo: this.getTrackInfo.bind(this),
            getSimilar: this.getSimilarTrack.bind(this),
            getTopTags: this.getTrackTopTags.bind(this),
            search: this.searchTrack.bind(this),
            _getInfo: this._getTrackInfo.bind(this),
            _getSimilar: this._getSimilarTrack.bind(this),
            _getTopTags: this._getTrackTopTags.bind(this),
            _search: this._searchTrack.bind(this)
        };
        config.endPoint || (config.endPoint = 'http://ws.audioscrobbler.com/2.0/');
        config.format || (config.format = 'json');
        var assign = function (common, options, settings) { return Object.assign({}, common, options, settings); };
        // this.assignParams = this.curry(assign, { format: config.format, api_key: config.apiKey });
        var setup = { format: config.format };
        // If not api_key is sent in, assume it is a proxy (eg. keeping api_key secret and using a proxy) 
        if (config.apiKey) {
            setup.api_key = config.apiKey;
        }
        this.assignParams = this.curry(assign, setup);
    }
    LastFM.prototype.curry = function (fn) {
        var args1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args1[_i - 1] = arguments[_i];
        }
        return function () {
            var args2 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args2[_i] = arguments[_i];
            }
            return fn.apply(void 0, args1.concat(args2));
        };
    };
    LastFM.prototype.getApiKey = function () {
        return this.config.apiKey;
    };
    LastFM.prototype.getSearchParams = function (params) {
        var search = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* URLSearchParams */]();
        // Really?! No method to accept object?!
        for (var key in params) {
            search.set(key, params[key]);
        }
        return search;
    };
    LastFM.prototype.createParams = function (settings, options) {
        if (settings === void 0) { settings = {}; }
        if (options === void 0) { options = {}; }
        var params = this.assignParams(options, settings);
        return this.getSearchParams(params);
    };
    /**
    *   error.json() : any
    *   Attempts to return body as parsed JSON object, or raises an exception.
    */
    LastFM.prototype.handleError = function (error) {
        var o = error.json(), msg = o.message || error.statusText;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(msg || 'Server Error');
    };
    LastFM.prototype.isMbid = function (str) {
        return this.mbidPattern.test(str);
    };
    LastFM.prototype.updateSettings = function (settings, fieldName) {
        fieldName = fieldName || 'artist';
        if (this.isMbid(settings[fieldName])) {
            var newValues = { mbid: settings[fieldName] };
            newValues[fieldName] = '';
            var updated = Object.assign({}, settings, newValues);
            // or...delete the property. mbid takes precedence, regardless
            // delete updated[fieldName];
            return updated;
        }
        return settings;
    };
    LastFM.prototype.checkCanShow = function (results) {
        if (!results || !results.artistmatches) {
            return false;
        }
        // Having at least one potential to show from the results is nice...
        function hasImage(element, index, array) {
            return !!element['#text'];
        }
        return results.artistmatches.artist
            .some(function (element, index, array) { return element.mbid && element.image.some(hasImage); });
    };
    /**
     * Check there's an mbid and an image of specified size (default extralarge image source)
     */
    LastFM.prototype.checkUsableImage = function (result, size) {
        if (size === void 0) { size = 3; }
        if (result.mbid && result.image && result.image[size] && result.image[size]['#text'] !== '') {
            return true;
        }
        return false;
    };
    LastFM.prototype._http = function (settings, options) {
        if (settings === void 0) { settings = {}; }
        if (options === void 0) { options = {}; }
        var updated = this.updateSettings(settings), params = this.createParams(options, updated);
        return this.http.get(this.config.endPoint, { search: params })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    /**
     * @data : received from lastfm
     * @path : the path to the required data eg. 'results.artistmatches.artist'
     * @empty: what to return if there were no results
     */
    LastFM.prototype.validateData = function (data, path, empty) {
        if (data === void 0) { data = {}; }
        if (path === void 0) { path = ''; }
        if (empty === void 0) { empty = []; }
        if (data && data.error) {
            return data;
        }
        var value = path.split('.').reduce(function (a, b) { return a[b] || {}; }, data);
        return Object.keys(value).length === 0 ? empty : value;
    };
    // Album
    // Docs: http://www.last.fm/api/show/album.getInfo
    LastFM.prototype._getAlbumInfo = function (artistOrMbid, album, options) {
        if (album === void 0) { album = ''; }
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            album: album,
            method: 'album.getinfo'
            // mbid: mbid,
            // autocorrect: 1,
            // lang: 'de'
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getAlbumInfo = function (artistOrMbid, album, options) {
        var _this = this;
        if (album === void 0) { album = ''; }
        if (options === void 0) { options = {}; }
        return this._getAlbumInfo.apply(this, arguments)
            .map(function (data) {
            var validated = _this.validateData(data, 'album', null);
            if (!validated) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Album not found');
            }
            return validated;
        })
            .filter(function (album) { return !!album.artist; }) // make sure there is album data
            .map(function (album) { return Album.fromJSON(album); });
    };
    // Docs: http://www.last.fm/api/show/album.getTopTags
    /*
        Note: Docs say artist & album optional if mbid is used...
        That appers wrong - supplying mbid returns error artist/album missing.
    */
    LastFM.prototype._getAlbumTopTags = function (artistOrMbid, album, options) {
        if (album === void 0) { album = ''; }
        if (options === void 0) { options = {}; }
        var settings = {
            method: 'album.gettoptags',
            album: album,
            artist: artistOrMbid
            // mbid :mbid,
            // autocorrect: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getAlbumTopTags = function (artistOrMbid, album, options) {
        var _this = this;
        if (album === void 0) { album = ''; }
        if (options === void 0) { options = {}; }
        return this._getAlbumTopTags.apply(this, arguments)
            .map(function (data) { return _this.validateData(data, 'toptags.tag'); });
    };
    // Docs: http://www.last.fm/api/show/album.search
    LastFM.prototype._searchAlbum = function (album, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            album: album,
            method: 'album.search'
            // limit: 10,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.searchAlbum = function (artistOrMbid, album, options) {
        var _this = this;
        if (album === void 0) { album = ''; }
        if (options === void 0) { options = {}; }
        return this._searchAlbum.apply(this, arguments)
            .map(function (data) { return _this.validateData(data, 'results.albummatches.album'); })
            .map(function (albums) {
            return albums
                .map(function (album) { return Album.fromJSON(album); });
        });
    };
    // End Album
    // Artist
    // Docs: http://www.last.fm/api/show/artist.getInfo
    LastFM.prototype._getArtistInfo = function (artistOrMbid, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            method: 'artist.getinfo'
            // mbid: mbid,
            // autocorrect: 1,
            // lang: 'de'
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getArtistInfo = function (artistOrMbid, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getArtistInfo.apply(this, arguments)
            .map(function (data) {
            var validated = _this.validateData(data, 'artist', null);
            if (!validated) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Artist not found');
            }
            return validated;
        })
            .map(function (artist) { return Artist.fromJSON(artist); });
    };
    // Docs: http://www.last.fm/api/show/artist.getSimilar
    LastFM.prototype._getSimilar = function (artistOrMbid, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            method: 'artist.getsimilar'
            // mbid: mbid,
            // limit: 10,
            // autocorrect: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getSimilar = function (artistOrMbid, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getSimilar.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'similarartists.artist');
        })
            .map(function (artists) {
            return artists
                .map(function (artist) { return Artist.fromJSON(artist); });
        });
    };
    // Docs: http://www.last.fm/api/show/artist.getTopAlbums
    LastFM.prototype._getTopAlbums = function (artistOrMbid, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            method: 'artist.gettopalbums'
            // mbid: mbid,
            // limit: 10,
            // autocorrect: 1,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getTopAlbums = function (artistOrMbid, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getTopAlbums.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'topalbums.album');
        })
            .map(function (albums) {
            // albums is an array - *not* of Album objects, just objects...
            return albums
                .map(function (album) { return Album.fromJSON(album); });
        });
    };
    // Docs: http://www.last.fm/api/show/artist.getTopTags
    LastFM.prototype._getArtistTopTags = function (artistOrMbid, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            method: 'artist.gettoptags'
            // mbid: mbid,
            // autocorrect: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getArtistTopTags = function (artistOrMbid, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getArtistTopTags.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'toptags.tag');
        });
    };
    // Docs: http://www.last.fm/api/show/artist.getTopTracks
    LastFM.prototype._getTopTracks = function (artistOrMbid, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            method: 'artist.gettoptracks'
            // mbid: mbid,
            // limit: 10,
            // autocorrect: 1,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getTopTracks = function (artistOrMbid, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getTopTracks.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'toptracks.track');
        });
    };
    // Docs: http://www.last.fm/api/show/artist.search
    LastFM.prototype._searchArtists = function (artist, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artist,
            method: 'artist.search'
            // limit: 10,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.searchArtists = function (artist, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._searchArtists.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'results.artistmatches.artist', []);
        })
            .map(function (artists) {
            return artists
                .filter(function (artist) { return _this.checkUsableImage(artist); })
                .map(function (artist) { return Artist.fromJSON(artist); });
        });
    };
    // End Artist
    // Charts
    // Docs: http://www.last.fm/api/show/chart.getTopArtists
    LastFM.prototype._getTopArtists = function (options) {
        if (options === void 0) { options = {}; }
        var settings = {
            method: 'chart.gettopartists'
            // limit: 10,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getTopArtists = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getTopArtists.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'artists.artist');
        })
            .map(function (artists) {
            return artists
                .map(function (artist) { return Artist.fromJSON(artist); });
        });
    };
    // Docs: http://www.last.fm/api/show/chart.getTopTags
    LastFM.prototype._getChartsTopTags = function (options) {
        if (options === void 0) { options = {}; }
        var settings = {
            method: 'chart.gettoptags'
            // limit: 10,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getChartsTopTags = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getChartsTopTags.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'tags.tag');
        });
    };
    // Docs: http://www.last.fm/api/show/chart.getTopTrack
    LastFM.prototype._getChartsTopTracks = function (options) {
        if (options === void 0) { options = {}; }
        var settings = {
            method: 'chart.gettoptracks'
            // limit: 10,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getChartsTopTracks = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getChartsTopTracks.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'tracks.track');
        });
    };
    // End Charts
    // Geo
    // Docs: http://www.last.fm/api/show/chart.getTopArtists
    LastFM.prototype._getTopGeoArtists = function (country, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            country: country,
            method: 'geo.gettopartists'
            // limit: 10,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getTopGeoArtists = function (country, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getTopGeoArtists.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'topartists.artist');
        })
            .map(function (artists) {
            return artists
                .map(function (artist) { return Artist.fromJSON(artist); });
        });
    };
    // Docs: http://www.last.fm/api/show/geo.getTopTracks
    LastFM.prototype._getTopGeoTracks = function (country, options) {
        if (options === void 0) { options = {}; }
        var settings = {
            country: country,
            method: 'geo.gettoptracks'
            // limit: 10,
            // page: 1,
            // location: 'Manchester
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getTopGeoTracks = function (country, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this._getTopGeoTracks.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'tracks.track');
        });
    };
    // End Geo
    // Track
    // Docs: http://www.last.fm/api/show/track.getInfo
    LastFM.prototype._getTrackInfo = function (artistOrMbid, track, options) {
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            track: track,
            method: 'track.getInfo'
            // mbid: mbid,
            // autocorrect: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getTrackInfo = function (artistOrMbid, track, options) {
        var _this = this;
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        return this._getTrackInfo.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'track', {});
        });
    };
    // Docs: http://www.last.fm/api/show/track.getSimilar
    LastFM.prototype._getSimilarTrack = function (artistOrMbid, track, options) {
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            track: track,
            method: 'track.getsimilar'
            // mbid: mbid,
            // autocorrect: 1,
            // limit: 10
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getSimilarTrack = function (artistOrMbid, track, options) {
        var _this = this;
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        return this._getSimilarTrack.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'similartracks.track');
        });
    };
    // Docs: http://www.last.fm/api/show/track.getTopTags
    LastFM.prototype._getTrackTopTags = function (artistOrMbid, track, options) {
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        var settings = {
            artist: artistOrMbid,
            track: track,
            method: 'track.gettoptags'
            // mbid: mbid,
            // autocorrect: 1,
            // limit: 10
        };
        return this._http(settings, options);
    };
    LastFM.prototype.getTrackTopTags = function (artistOrMbid, track, options) {
        var _this = this;
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        return this._getTrackTopTags.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'toptags.tag');
        });
    };
    // Docs: http://www.last.fm/api/show/track.search
    LastFM.prototype._searchTrack = function (track, options) {
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        var settings = {
            track: track,
            method: 'track.search'
            // limit: 10,
            // page: 1
        };
        return this._http(settings, options);
    };
    LastFM.prototype.searchTrack = function (track, options) {
        var _this = this;
        if (track === void 0) { track = ''; }
        if (options === void 0) { options = {}; }
        return this._searchTrack.apply(this, arguments)
            .map(function (data) {
            return _this.validateData(data, 'results.trackmatches.track');
        });
    };
    return LastFM;
}());
LastFM = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Inject */])('LastFMConfig')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LastFM);

var _a;
//# sourceMappingURL=lastfm.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    // apiKey: YOUR_API_KEY,                          // OR USE A PROXY SERVER AND HAVE KEY THERE
    // endPoint: 'http://ws.audioscrobbler.com/2.0/', // DIRECT TO LASTFM : MUST HAVE apiKey SET TO USE THIS
    endPoint: 'http://localhost:3000/api',
    format: 'json'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[472]);
//# sourceMappingURL=main.bundle.js.map