'use strict';

const concat = require('broccoli-concat');
const mergeTrees = require('broccoli-merge-trees');
const pickFiles = require('broccoli-static-compiler');
const babel = require('broccoli-babel-transpiler');
const pkg = require('./package.json');
const amdNameResolver = require('amd-name-resolver').moduleResolve;

const app = 'app';

/*
 * move index from `app/` to root of tree
 */
let appHTML = pickFiles(app, {
  srcDir: '/',
  files: ['index.html'],
  destDir: '/'
});


let jsSrc = mergeTrees(['node_modules/route-recognizer/dist/es6',`${app}/js`]);

let appJS = babel(jsSrc, {
  modules: 'amdStrict',
  moduleIds: true,
  resolveModuleSource: amdNameResolver
});

appJS = concat(appJS, {
  inputFiles: ['**/*.js'],
  outputFile: `/${pkg.name}.js`
});

// merge the trees and export
module.exports = mergeTrees([appHTML, appJS]);
