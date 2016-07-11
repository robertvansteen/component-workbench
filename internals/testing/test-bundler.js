import 'babel-polyfill';

import chai from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

global.chai = chai;
global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should();

const karmaWebpackManifest = [];

// Include all .js files in the src directory that do not end with story.js
const context = require.context(
  '../../src',
  true,
  /^^((?!(story)).)*\.js$/
);

/**
 * Check if a path is in the manifest.
 *
 * @param  {String} path
 * @return {void}
 */
function inManifest(path) {
  return karmaWebpackManifest.indexOf(path) >= 0;
}

// Check which tests should be run
let runnable = context.keys().filter(inManifest);

// If there are no tests in the manifest, run them all.
if (!runnable.length) {
  runnable = context.keys();
}

runnable.forEach(context);
