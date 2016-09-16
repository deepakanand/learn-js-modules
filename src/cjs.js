// CommonJS module via Browserify
//
// Browserify lets you require('modules') in the browser...
// ...by bundling up all of your dependencies.
//

// --debug option to the browserify command creates an
// in-memory source-map

var sum = require('lodash/sum');

var double = function(number) {
  return number * 2;
}
var addFive = function(number) {
  return sum([number, 5]);
}

module.exports = {
  double: double,
  addFive: addFive
}