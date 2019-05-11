var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');

/*
  Build and watch Jekyll (change this task to whatever you need)
*/
gulp.task('generate', shell.task('jekyll serve'));

/*
  Compile SCSS files to CSS
*/
gulp.task('styles', function () {
    return gulp.src('css/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('_includes/assets/css/'));
});

/*
  Compile the assets
*/
gulp.task('assets', gulp.parallel(
    'styles'
));

/*
  Build
*/
gulp.task('build', gulp.series(
    'assets',
    'generate'
));