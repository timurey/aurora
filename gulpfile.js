var gulp = require('gulp');
var shell = require('gulp-shell');
var ftp = require('vinyl-ftp');

// Build the project using ember-cli
gulp.task('build', shell.task([
  'ember build --environment production --output-path to_ftp'
]));
gulp.task('cp',['build'], shell.task([
  'cp to_ftp/index.html to_ftp/404.html'
]));

gulp.task('compress', ['cp'], shell.task('./gzip_all') );

gulp.task( 'ftp_gzip',['compress'], function () {

    var conn = ftp.create( {
        host:     'aurora.local.',
        user:     'admin',
        password: 'admin',
        parallel: 1
    } );

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src('./gziped/**/*' )
        .pipe( conn.newerOrDifferentSize( '/web/gziped/' ) ) // only upload newer files
        .pipe( conn.dest( '/web/gziped/' ) );

} );



// Combine all these tasks into the deploy task
gulp.task( 'ftp',['ftp_gzip'], function () {

    var conn = ftp.create( {
        host:     'aurora.local.',
        user:     'admin',
        password: 'admin',
        parallel: 1
    } );

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src('to_ftp/**/*' )
        .pipe( conn.newerOrDifferentSize( '/web/' ) ) // only upload newer files
        .pipe( conn.dest( '/web/' ) );

} );

// Default task will only build ember-cli
gulp.task('default', ['build']);