var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./sass-main/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('../../css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass-main/**/*.scss', ['sass']);
});
