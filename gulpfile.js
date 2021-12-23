const {src, dest, watch} = require("gulp");
const minify = require("gulp-minify");

function minifyjs() {
    return src('src/js/script.js', { allowEmpty: true })
        .pipe(minify({noSource: true}))
        .pipe(dest('dist/js/'))
}

const devWatch = () => {
    watch('./src/js/**/*.js', minifyjs);
}

exports.default = minifyjs;
exports.devWatch = devWatch;