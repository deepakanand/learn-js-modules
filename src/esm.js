// ES6 module via babel+webpack

// Babel is a ES.next -> ES5 tranpiler
// when Babel encounters an import statement ...
// ... it outputs a require/CJS call 
//
// Webpack is a module bundler. It takes modules with dependencies...
// ...and generates static assets representing those modules.

import sum from 'lodash/sum';

const double = (number)=> number * 2
const addFive = (number)=> sum([number, 5])

export {
  double,
  addFive
}