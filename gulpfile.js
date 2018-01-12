var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var styledown = require('gulp-styledown');

gulp.task('sass', function() {
	return gulp.src('src/**/*.scss') // Source files.
		.pipe(sass()) // Using gulp-sass.
		.pipe(gulp.dest('dist')) // Destination.
});

gulp.task('sass-min', function() {
	return gulp.src('src/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'))
});

var config   = 'config.md';
var template = [
		'<!doctype html>',
		'<html>',
		'<head>',
		'<meta charset="utf-8">',
		'<title>CSS Starter Kit Guide</title>',
		'</head>',
		'<body>',
		'</body>',
		'</html>'
	].join('\n');

gulp.task('styledown', function() {
	gulp.src('index.md') // /path/to/styledown/*.md
		.pipe(styledown({
			config:   config, // /path/to/config.md
			template: template,
			filename: 'index.html' // output.html
		}))
		.pipe(gulp.dest('guide')); // /path/to/
	gulp.src('dist/elements.css')
		.pipe(styledown({
			config:   config,
			template: template,
			filename: 'elements.html'
		}))
		.pipe(gulp.dest('guide'));
	gulp.src('dist/components.css')
		.pipe(styledown({
			config:   config,
			template: template,
			filename: 'components.html'
		}))
		.pipe(gulp.dest('guide'));
	gulp.src('dist/helpers.css')
		.pipe(styledown({
			config:   config,
			template: template,
			filename: 'helpers.html'
		}))
		.pipe(gulp.dest('guide'));
	gulp.src('dist/layout.css')
		.pipe(styledown({
			config:   config,
			template: template,
			filename: 'layout.html'
		}))
		.pipe(gulp.dest('guide'));
});

// Watch task.
gulp.task('default', function() {
    gulp.watch('src/**/*.scss', ['sass', 'sass-min', 'styledown']);
    gulp.watch('config.md', ['styledown']);
});
