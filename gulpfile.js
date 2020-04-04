const { watch, src, dest, series, gulp } = require('gulp');
//переименование файлов
const rename = require('gulp-rename')
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

function copyHtml() {
  return src('*.html')
    .pipe(dest('build/'));
}

function copyJs(){
    return src(['node_modules/jquery/dist/jquery.js','node_modules/slick-carousel/slick/slick.js','node_modules/magnific-popup/dist/jquery.magnific-popup.js','*.js'])
    .pipe(concat('code.js'))
    .pipe(dest('build/js'));
}



function copyCss(){
    return src(['*.css','node_modules/magnific-popup/dist/magnific-popup.css', 'node_modules/slick-carousel/slick/slick-theme.css', 'node_modules/slick-carousel/slick/slick.css'])
    .pipe(cssmin())
    .pipe(concat('style.css'))
    .pipe(autoprefixer({cascade:false}))
    .pipe(rename({suffix:".min"}))
    .pipe(dest('build/css'));
}



exports.build = series(copyHtml, copyCss, copyJs);

function getReady(){
    copyHtml()
    copyCss()
    copyJs()
}


exports.default = function() {
    // You can use a single task
    getReady()
    watch('*.html', copyHtml);

    watch('*.js', getJs);


    // Or a composed task
    // watch(['dist/*.js', '*.html'], series(copyHtml, copyCss, getJs));
  };