const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const concatCss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();


function buildStyles() {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    //.pipe(concatCss("./bundle.css"))
    .pipe(gulp.dest('./dist/css'));
};

function watchStyles() {
  return gulp.watch('./src/styles/**/*.scss', buildStyles)
}

function minifyJS() {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
};

function watchMinifyJS() {
  return gulp.watch('./src/js/**/*.js', minifyJS)
};

function moveIndexHTML() {
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
};

function removeDist() {
  return gulp.src('./dist')
   .pipe(clean()); 
};

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./src/styles/**/*.scss', function() {
    gulp.src('./dist/css').pipe(clean())
    gulp.watch('./src/styles/**/*.scss', function() {
      return gulp.src('./src/styles/**/*.scss')
       .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
       .pipe(gulp.dest('./dist/css'))
       .pipe(browserSync.stream());
    });

       
  });

    gulp.watch('./src/js/**/*.js', function() {
    gulp.src('./dist/js').pipe(clean())
      gulp.watch('./src/js/**/*.js', function () {
        return gulp.src('./src/js/**/*.js')
           .pipe(uglify())
           .pipe(gulp.dest('./dist/js'))
           .browserSync.reload();
    });

       
  });

  gulp.watch('./src/index.html').on('change', function() {
    gulp.src('./src/index.html')
   .pipe(gulp.dest('./dist'));gu
   browserSync.reload()
  });
  
});

exports.buildStyles = buildStyles;
exports.watchStyles = watchStyles;
exports.minifyJS = minifyJS;
exports.watchMinifyJSatchMinifyJS = watchMinifyJS;
exports.removeDist = removeDist;

exports.build = gulp.series(moveIndexHTML, gulp.parallel(buildStyles, minifyJS));