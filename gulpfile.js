var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('build', function() {
    return gulp.src('src/etstyle.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.scss', ['build']);
});
