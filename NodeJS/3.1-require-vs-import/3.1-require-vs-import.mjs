//differences between require and import:
//IMPORT = 1) Can only be called in the begining of the file, 2) Able to load partially, saves on memory usage.
//REQUIRE = 1) Can be called anywhere anytime, 2) Not able to be loaded partially.
//Mainly we will be using require for back-end usage.

//in order to be able to use imports, save the files needed as .mjs instead of .js
import subtract from './func1.mjs';
import add from './func2.mjs';
import multiply from './func3.mjs';

console.log('add(5,5) = ',add(5,5));
console.log('subtract(5,1) = ',subtract(5,1));
console.log('multiply(2,3) = ',multiply(2,3));