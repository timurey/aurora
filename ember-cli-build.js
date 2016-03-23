/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
        lessOptions: {
            paths: [
                'bower_components/bootstrap-timepicker/css'
            ],
            sourceMap: 'assets/aurora.map',
        }
    });
    app.import("bower_components/jquery/dist/jquery.min.js");
    app.import('bower_components/AdminLTE/bootstrap/css/bootstrap.css');
    app.import('bower_components/AdminLTE/plugins/timepicker/bootstrap-timepicker.min.css');
    app.import('bower_components/AdminLTE/dist/css/AdminLTE.css');
    app.import('bower_components/AdminLTE/dist/css/skins/_all-skins.css');
    // app.import('bower_components/AdminLTE/plugins/jQuery/jQuery-2.2.0.min.js');

    app.import('bower_components/AdminLTE/plugins/jQueryUI/jquery-ui.min.js')
    app.import('bower_components/AdminLTE/bootstrap/js/bootstrap.min.js');
    app.import('bower_components/AdminLTE/plugins/fastclick/fastclick.js');
    app.import('bower_components/bootstrap-timepicker/js/bootstrap-timepicker.js');
    app.import('bower_components/AdminLTE/dist/js/app.js');

    app.import('bower_components/components-font-awesome/css/font-awesome.min.css');
    // app.import('bower_components/components-font-awesome/fonts/FontAwesome.otf', {
    //     destDir: 'fonts'
    // });
    // app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.eot', {
    //     destDir: 'fonts'
    // });
    // app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.svg', {
    //     destDir: 'fonts'
    // });
    app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.ttf', {
        destDir: 'fonts'
    });
    app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.woff', {
        destDir: 'fonts'
    });
    app.import('bower_components/components-font-awesome/fonts/fontawesome-webfont.woff2', {
        destDir: 'fonts'
    });

    app.import('bower_components/ionicons/css/ionicons.min.css');
    // app.import('bower_components/ionicons/fonts/ionicons.eot', {
    //     destDir: 'fonts'
    // });
    // app.import('bower_components/ionicons/fonts/ionicons.svg', {
    //     destDir: 'fonts'
    // });
    // app.import('bower_components/ionicons/fonts/ionicons.ttf', {
    //     destDir: 'fonts'
    // });
    // app.import('bower_components/ionicons/fonts/ionicons.woff', {
    //     destDir: 'fonts'
    // });
    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.
    return app.toTree();
};