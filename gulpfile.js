var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function(){
  gulp.src('app/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('minjs'))
  console.log('Minification is finished.');
});
