var PouchDB = require( 'pouchdb' );

module.exports = class DBModule {
    constructor( mm, config ) {
        this.mm = mm;
        this.config = config;

        this.initDb();
    }


    initDb() {
        if ( this.config.db == null ) {
            throw new Error( "db module needs db setting in config" );
        }

        this.db = new PouchDB( this.config.db );
    }
    

    init() {
    }
}
