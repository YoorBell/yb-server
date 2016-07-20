"use strict";

class Tones {
    constructor( app ) {
        this.app = app;
        this.app.api( "/test", this.test.bind( this ) );
    }


    *test(r) {
        r.body = "hey";
    }
}

module.exports = Tones;
