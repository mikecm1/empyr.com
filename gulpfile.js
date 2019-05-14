var gulp = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var touch = require('gulp-touch-cmd');

/*
  Build and watch Jekyll (change this task to whatever you need)
*/
gulp.task('generate', shell.task('bundle exec jekyll serve --watch --livereload -o'));
gulp.task('buildit', shell.task('bundle exec jekyll build -d _site'));
gulp.task('preview_jekyll', shell.task('bundle exec jekyll build --drafts --unpublished --future -d _site'));
gulp.task('buildme', shell.task('bundle exec jekyll build --watch'));
/*
  Compile SCSS files to CSS
*/

gulp.task('styles', function () {
    return gulp.src('./assets/css/main.scss')
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(touch());
});

/*
  Compile the assets
*/
// gulp.task('assets', gulp.parallel(
//     'styles'
// ));

gulp.task('build', gulp.series(
    'styles',
    'generate'
));

gulp.task('deploy', gulp.series(
    'styles',
    'buildit'
));

gulp.task('watch', function() {
    gulp.watch('assets/**/*.scss', gulp.series('styles'));
  });

// Watch and build
  gulp.task('default', gulp.parallel(
    'watch',
    'generate'
));

// Preview
gulp.task('preview', gulp.series(
    'styles',
    'preview_jekyll'
));