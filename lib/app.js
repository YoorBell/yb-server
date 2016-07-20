"use strict";

var koa = require( "koa" );
var PouchDB = require( 'pouchdb' );
var _ = require( "koa-route" );

var Tones = require( './tones' );

class App {
    constructor( config ) {
        this.config = config;

        this.initWeb();
    }


    initWeb() {
        if ( this.config.web == null || this.config.web.port == null )
            throw new Error( "Web module needs config with port field." );

        this.app = koa();
        this.tones = new Tones( this );
        this.app.listen( this.config.web.port );
    }


    getDb( name, options ) {
        return new PouchDB( name );
    }


    api( url, cb ) {
        this.app.use( _.get( url, function *() {
            yield* cb( this );
        } ) );
    }
}

module.exports = App;
