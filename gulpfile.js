var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

/*
  Build and watch Jekyll (change this task to whatever you need)
*/
gulp.task('generate', shell.task('jekyll serve --livereload -o'));
gulp.task('buildit', shell.task('bundle exec jekyll build -d _site'));

/*
  Compile SCSS files to CSS
*/
gulp.task('styles', function () {
    return gulp.src('assets/css/main.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({
            outputStyle: 'nested'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'));
});

/*
  Compile the assets
*/
gulp.task('assets', gulp.parallel(
    'styles'
));

gulp.task('build', gulp.series(
    'assets',
    'generate'
));

gulp.task('deploy', gulp.series(
    'assets',
    'buildit'
));

gulp.task('watch', function() {
    gulp.watch('assets/css/**/*.scss', gulp.series('assets'));
  });

// Watch and build
  gulp.task('default', gulp.parallel(
    'generate',
    'watch'
));