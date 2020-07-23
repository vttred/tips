const typescript = require("typescript");
const path = require("path");
const rimraf = require("rimraf");

const gulp = require("gulp");

const ts = require("gulp-typescript");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const eslint = require("gulp-eslint");

/**
 * TypeScript transformers
 * @returns {typescript.TransformerFactory<typescript.SourceFile>}
 */
function createTransformer() {
  /**
   * @param {typescript.Node} node
   */
  function shouldMutateModuleSpecifier(node) {
    if (!typescript.isImportDeclaration(node) && !typescript.isExportDeclaration(node)) return false;
    if (node.moduleSpecifier === undefined) return false;
    if (!typescript.isStringLiteral(node.moduleSpecifier)) return false;
    if (!node.moduleSpecifier.text.startsWith("./") && !node.moduleSpecifier.text.startsWith("../")) return false;
    if (path.extname(node.moduleSpecifier.text) !== "") return false;
    return true;
  }

  /**
   * Transforms import/export declarations to append `.js` extension
   * @param {typescript.TransformationContext} context
   */
  function importTransformer(context) {
    return (node) => {
      /**
       * @param {typescript.Node} node
       */
      function visitor(node) {
        if (shouldMutateModuleSpecifier(node)) {
          if (typescript.isImportDeclaration(node)) {
            const newModuleSpecifier = typescript.createLiteral(`${node.moduleSpecifier.text}.js`);
            return typescript.updateImportDeclaration(
              node,
              node.decorators,
              node.modifiers,
              node.importClause,
              newModuleSpecifier
            );
          } else if (typescript.isExportDeclaration(node)) {
            const newModuleSpecifier = typescript.createLiteral(`${node.moduleSpecifier.text}.js`);
            return typescript.updateExportDeclaration(
              node,
              node.decorators,
              node.modifiers,
              node.exportClause,
              newModuleSpecifier
            );
          }
        }
        return typescript.visitEachChild(node, visitor, context);
      }

      return typescript.visitNode(node, visitor);
    };
  }

  return importTransformer;
}

const tsConfig = ts.createProject("tsconfig.json", {
  // noImplicitAny: true,
  // declaration: true,
  // allowJs: true,
  allowSyntheticDefaultImports: true,

  getCustomTransformers: (_program) => ({
    after: [createTransformer()],
  }),
});

/**
 * Cleaning the dist directory
 */
const clean = () => {
  rimraf.sync(__dirname + "/dist/**/*");
};

/**
 * Linting
 */
const lint = (cb) => {
  gulp
    .src(["**/*.ts", "!node_modules/**"])
    .pipe(
      eslint({
        //    configFile: __dirname + "/.eslintrc.json",
      })
    )
    .pipe(eslint.formatEach("visualstudio", process.stderr))
    .pipe(eslint.failAfterError());
  cb();
};

/**
 * Compiling
 */
const compileJavaScript = () => {
  return gulp.src("src/**/*.js").pipe(gulp.dest("dist"));
};
const compileTypeScript = () => {
  return gulp
    .src("src/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(tsConfig())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
};

const compileScript = (cb) => {
  clean();
  compileJavaScript();
  compileTypeScript();
  cb();
};

const compileStyle = (cb) => {
  return gulp
    .src("src/**/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
    .pipe(concat("style.min.css"))
    .pipe(gulp.dest("dist/style"));
};

/**
 * File/Folder processing
 */
const copyManifest = () => {
  return gulp.src("./src/module.template.json").pipe(concat("module.json")).pipe(gulp.dest("./dist"));
};

const copyImages = (cb) => {
  return gulp.src("./src/img/**/*").pipe(gulp.dest("./dist/img/"));
  cb();
};

const copyLanguages = (cb) => {
  gulp.src("./src/lang/**/*.json").pipe(gulp.dest("./dist/lang/"));
  cb();
};

/**
 * Watching
 */
const watchTypeScript = (cb) => {
  gulp.watch("src/**/*.ts", { ignoreInitial: false }, compileTypeScript);
};
const watchJavaScript = (cb) => {
  gulp.watch("src/**/*.js", { ignoreInitial: false }, compileJavaScript);
};

const watchScript = (cb) => {
  watchTypeScript();
  watchJavaScript();
  cb();
};

const watchStyle = (cb) => {
  gulp.watch("src/**/*.sass", { ignoreInitial: false }, compileStyle);
};
const watchManifest = (cb) => {
  gulp.watch("src/module.template.json", copyManifest);
};
const watchImages = (cb) => {
  gulp.watch("src/lang/*.json", { ignoreInitial: false }, copyImages);
};
const watchLanguages = (cb) => {
  gulp.watch("./src/lang/**/*.json", { ignoreInitial: false }, copyLanguages);
};

const compile = gulp.parallel(compileScript, compileStyle, copyManifest, copyImages, copyLanguages);
compile.description = "compile all sources";

const watch = gulp.parallel(watchScript, watchStyle, watchManifest, watchImages, watchLanguages);
watch.description = "watch for changes to all source";

gulp.task("watch", watch);
gulp.task("build", compile);
gulp.task("lint", lint);
