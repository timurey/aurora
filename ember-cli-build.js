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
    // app.import('bower_components/AdminLTE/dist/css/AdminLTE.css');
    app.import('vendor/AdminLTE/dist/css/AdminLTE.css');
    app.import('vendor/AdminLTE/dist/css/fonts.css');
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
    app.import('bower_components/ionicons/fonts/ionicons.eot', {
        destDir: 'fonts'
    });
    app.import('bower_components/ionicons/fonts/ionicons.svg', {
        destDir: 'fonts'
    });
    app.import('bower_components/ionicons/fonts/ionicons.ttf', {
        destDir: 'fonts'
    });
    app.import('bower_components/ionicons/fonts/ionicons.woff', {
        destDir: 'fonts'
    });

    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300/Source-Sans-Pro-300.eot', {
        destDir: 'fonts/Source-Sans-Pro-300/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300/Source-Sans-Pro-300.svg', {
        destDir: 'fonts/Source-Sans-Pro-300/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300/Source-Sans-Pro-300.ttf', {
        destDir: 'fonts/Source-Sans-Pro-300/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300/Source-Sans-Pro-300.woff', {
        destDir: 'fonts/Source-Sans-Pro-300/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300/Source-Sans-Pro-300.woff2', {
        destDir: 'fonts/Source-Sans-Pro-300/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300italic/Source-Sans-Pro-300italic.eot', {
        destDir: 'fonts/Source-Sans-Pro-300italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300italic/Source-Sans-Pro-300italic.svg', {
        destDir: 'fonts/Source-Sans-Pro-300italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300italic/Source-Sans-Pro-300italic.ttf', {
        destDir: 'fonts/Source-Sans-Pro-300italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300italic/Source-Sans-Pro-300italic.woff', {
        destDir: 'fonts/Source-Sans-Pro-300italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-300italic/Source-Sans-Pro-300italic.woff2', {
        destDir: 'fonts/Source-Sans-Pro-300italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600/Source-Sans-Pro-600.eot', {
        destDir: 'fonts/Source-Sans-Pro-600/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600/Source-Sans-Pro-600.svg', {
        destDir: 'fonts/Source-Sans-Pro-600/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600/Source-Sans-Pro-600.ttf', {
        destDir: 'fonts/Source-Sans-Pro-600/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600/Source-Sans-Pro-600.woff', {
        destDir: 'fonts/Source-Sans-Pro-600/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600/Source-Sans-Pro-600.woff2', {
        destDir: 'fonts/Source-Sans-Pro-600/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600italic/Source-Sans-Pro-600italic.eot', {
        destDir: 'fonts/Source-Sans-Pro-600italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600italic/Source-Sans-Pro-600italic.svg', {
        destDir: 'fonts/Source-Sans-Pro-600italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600italic/Source-Sans-Pro-600italic.ttf', {
        destDir: 'fonts/Source-Sans-Pro-600italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600italic/Source-Sans-Pro-600italic.woff', {
        destDir: 'fonts/Source-Sans-Pro-600italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-600italic/Source-Sans-Pro-600italic.woff2', {
        destDir: 'fonts/Source-Sans-Pro-600italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-700/Source-Sans-Pro-700.eot', {
        destDir: 'fonts/Source-Sans-Pro-700/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-700/Source-Sans-Pro-700.svg', {
        destDir: 'fonts/Source-Sans-Pro-700/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-700/Source-Sans-Pro-700.ttf', {
        destDir: 'fonts/Source-Sans-Pro-700/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-700/Source-Sans-Pro-700.woff', {
        destDir: 'fonts/Source-Sans-Pro-700/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-700/Source-Sans-Pro-700.woff2', {
        destDir: 'fonts/Source-Sans-Pro-700/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-italic/Source-Sans-Pro-italic.eot', {
        destDir: 'fonts/Source-Sans-Pro-italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-italic/Source-Sans-Pro-italic.svg', {
        destDir: 'fonts/Source-Sans-Pro-italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-italic/Source-Sans-Pro-italic.ttf', {
        destDir: 'fonts/Source-Sans-Pro-italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-italic/Source-Sans-Pro-italic.woff', {
        destDir: 'fonts/Source-Sans-Pro-italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-italic/Source-Sans-Pro-italic.woff2', {
        destDir: 'fonts/Source-Sans-Pro-italic/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-regular/Source-Sans-Pro-regular.eot', {
        destDir: 'fonts/Source-Sans-Pro-regular/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-regular/Source-Sans-Pro-regular.svg', {
        destDir: 'fonts/Source-Sans-Pro-regular/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-regular/Source-Sans-Pro-regular.ttf', {
        destDir: 'fonts/Source-Sans-Pro-regular/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-regular/Source-Sans-Pro-regular.woff', {
        destDir: 'fonts/Source-Sans-Pro-regular/'
    });
    app.import('vendor/AdminLTE/dist/fonts/Source-Sans-Pro-regular/Source-Sans-Pro-regular.woff2', {
        destDir: 'fonts/Source-Sans-Pro-regular/'
    });
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