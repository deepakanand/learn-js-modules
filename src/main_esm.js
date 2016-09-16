// Consume ES6 module

import 'babel-polyfill';
import {double, addFive} from './esm.js';

console.log(double(2));
console.log(addFive(2));