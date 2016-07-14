'use strict';

class Modules {
    constructor() {
        this.modules = new Map();
    }

    init( config ) {
        // create all modules
        for ( var moduleConfig of config ) {
            this.initModule( moduleConfig );
        }

        // initialize module
        for ( var moduleConfig of config ) {
            let name = moduleConfig.name;
            this.modules.get( name ).init();
        }
    }

    // creates module instances
    initModule( config ) {
        var name = config.name;
        var moduleClass = require( './' + name );
        var moduleObj = new moduleClass( this, config );

        this.modules.set( name, moduleObj );
    }
}

module.exports = new Modules();
