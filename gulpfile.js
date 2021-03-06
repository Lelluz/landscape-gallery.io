const { dest, src, watch } = require("gulp");
const sass = require("gulp-dart-sass");
const prefix = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

const htmlPath = "public/*.html";
const scssPath = "src/scss/**/*.scss";

function scss() {
  return src(scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefix())
    .pipe(csso())
    .pipe(sourcemaps.write("."))
    .pipe(dest("public/css/"))
    .pipe(browserSync.stream());
}

exports.scss = scss;
exports.default = function() {
  browserSync.init({
		server: {
			baseDir: "./public",
			index: "/index.html"
		}
	});
  watch(scssPath, scss);
  watch(htmlPath).on("change", browserSync.reload);
};