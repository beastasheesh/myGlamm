var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('minify', function(){
  gulp.src('app/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('app'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('build', function(){
  gulp.start(['minify']);
});

gulp.task('browser-sync', function(){
  browserSync.init(null, {
    open: false,
    server: {
      baseDir: './'
    }
  });
});

gulp.task('start', function(){
  devMode = true;
  gulp.start(['build', 'browser-sync']);
  gulp.watch(['index.html'], browserSync.reload);
  gulp.watch(['app/*.js'], browserSync.reload);
  gulp.watch(['data/*.json'], browserSync.reload);
  gulp.watch(['Content/css/*.css'], browserSync.reload);
  gulp.watch(['app/*.js'], ['minify'], browserSync.reload);
});
