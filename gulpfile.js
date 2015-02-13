var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function() {
	return gulp.src('assets/scss/*.scss')
		.pipe(sass())
		.on('error', function handleError(err) {
			console.error(err.toString());
			this.emit('end');
		})
		.pipe(autoprefixer())
		.pipe(gulp.dest('assets/css'));
});
