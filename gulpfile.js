const { src, dest, series, watch } = require('gulp');

const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const image = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'))
const del = require('del');


const scriptsDev = () => {
	return src('src/js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(sourcemaps.init())
		.pipe(dest('dist'))
		.pipe(browserSync.stream())
}

const scssCompileDev = () => {
	return src('src/styles/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(concat('main.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(dest('dist'))
		.pipe(browserSync.stream())
}

const htmlMinifyDev = () => {
	return src('src/**/*.html')
		.pipe(dest('dist'))
		.pipe(browserSync.stream());
}

const scriptsBuild = () => {
	return src('src/js/**/*.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('main.js'))
		.pipe(uglify({
			toplevel: true
		}).on('error', notify.onError()))
		.pipe(dest('dist'))
}

const scssCompileBuild = () => {
	return src('src/styles/**/*.scss')
		.pipe(concat('main.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoPrefixer({
			cascade: false,
		}))
		.pipe(cleanCss({
			level: 2
		}))
		.pipe(dest('dist'))
}

const htmlMinifyBuild = () => {
	return src('src/**/*.html')
		.pipe(htmlMin({
			collapseWhitespace: true,
		}))
		.pipe(dest('dist'))
}

const watchFiles = () => {
	browserSync.init({
		server: {
			baseDir: 'dist',
		}
	})
}

const clean = () => {
	return del(['dist'])
}

const imagesPrep = () => {
	return src(['src/images/**/*.jpg',
		'src/images/**/*.png',
		'src/images/**/*.svg',
		'src/images/**/*.jpeg'])
		.pipe(image())
		.pipe(dest('dist/images'))
}

const otherFiles = () => {
	return src('src/fonts**/*')
		.pipe(dest('dist'))
}

watch('src/**/*.html', htmlMinifyDev);

watch(['src/images/**/*.jpg',
	'src/images/**/*.png',
	'src/images/**/*.svg',
	'src/images/**/*.jpeg'], imagesPrep);
watch('src/js/**/*.js', scriptsDev);
watch('src/styles/**/*.scss', scssCompileDev);

const dev = series(clean, htmlMinifyDev, scssCompileDev, scriptsDev, imagesPrep, otherFiles, watchFiles);
exports.dev = dev;

const build = series(clean, htmlMinifyBuild, scssCompileBuild, scriptsBuild, otherFiles, imagesPrep);
exports.build = build;