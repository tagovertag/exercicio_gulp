const tarefa = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagem = require('gulp-imagemin');

function comprimirImagens(){
    return tarefa.src('./source/img/*')
    .pipe(imagem())
    .pipe(tarefa.dest('./build/img'));
}
function comprimeJavaScript() {
    return tarefa.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(tarefa.dest('./build/scripts'));
}

exports.default = function(){
    tarefa.watch('./source/scripts/*.js',{ignoreInitial:false}, tarefa.series(comprimeJavaScript));
    tarefa.watch('./source/img/*',{ignoreInitial:false}, tarefa.series(comprimirImagens));
}

