var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var styledown = require('gulp-styledown');

gulp.task('sass', function() {
	return gulp.src('src/*.scss') // Source files.
		.pipe(sass()) // Using gulp-sass.
		.pipe(gulp.dest('dist')) // Destination.
});

gulp.task('sass-min', function() {
	return gulp.src('src/*.scss') // Source files.
		.pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass.
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist')) // Destination.
});

gulp.task('styledown', function() {
	gulp.src('dist/elements.css') // /path/to/styledown/*.md
		.pipe(styledown({
			config: 'config.md', // /path/to/config.md
			template: [
				'<!doctype html>',
				'<html>',
				'<head>',
				'<meta charset="utf-8">',
				'<title>CSS Starter Kit Guide</title>',
				'</head>',
				'<body>',
				'</body>',
				'</html>'
			].join('\n'),
			filename: 'elements.html' // output.html
		}))
		.pipe(gulp.dest('guide')); // /path/to/
	gulp.src('dist/components.css') // /path/to/styledown/*.md
		.pipe(styledown({
			config: 'config.md', // /path/to/config.md
			template: [
				'<!doctype html>',
				'<html>',
				'<head>',
				'<meta charset="utf-8">',
				'<title>CSS Starter Kit Guide</title>',
				'</head>',
				'<body>',
				'</body>',
				'</html>'
			].join('\n'),
			filename: 'components.html' // output.html
		}))
		.pipe(gulp.dest('guide')); // /path/to/
	gulp.src('dist/helpers.css') // /path/to/styledown/*.md
		.pipe(styledown({
			config: 'config.md', // /path/to/config.md
			template: [
				'<!doctype html>',
				'<html>',
				'<head>',
				'<meta charset="utf-8">',
				'<title>CSS Starter Kit Guide</title>',
				'</head>',
				'<body>',
				'</body>',
				'</html>'
			].join('\n'),
			filename: 'helpers.html' // output.html
		}))
		.pipe(gulp.dest('guide')); // /path/to/
	gulp.src('dist/layout.css') // /path/to/styledown/*.md
		.pipe(styledown({
			config: 'config.md', // /path/to/config.md
			template: [
				'<!doctype html>',
				'<html>',
				'<head>',
				'<meta charset="utf-8">',
				'<title>CSS Starter Kit Guide</title>',
				'</head>',
				'<body>',
				'</body>',
				'</html>'
			].join('\n'),
			filename: 'layout.html' // output.html
		}))
		.pipe(gulp.dest('guide')); // /path/to/
});
