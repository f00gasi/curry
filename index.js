/***************
http://localhost:8080/webpack-dev-server/bundle
*************/

var _ = require('lodash/curry');

console.log(_);

var match = _(function(what, str) {
  return str.match(what);
});

var replace = _(function(what, replacement, str) {
  return str.replace(what, replacement);
});

var filter = _(function(f, ary) {
  return ary.filter(f);
});

var map = _(function(f, ary) {
  return ary.map(f);
});



// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

var words = function(str) {
  return _.split(' ', str);
};

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = undefined;


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

var filterQs = function(xs) {
  return _.filter(function(x) {
    return match(/q/i, x);
  }, xs);
};


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
var _keepHighest = function(x, y) {
  return x >= y ? x : y;
};

// REFACTOR THIS ONE:
var max = function(xs) {
  return _.reduce(function(acc, x) {
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};

console.log('max',_keepHighest);
// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
var slice = undefined;


// Bonus 2:
// ============
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b'].
var take = undefined;

//console.log(match(/\s+/g, 'hello world'));
// [ ' ' ]

//console.log(match(/\s+/g)('hello world'));
// [ ' ' ]







var hasSpaces = match(/\s+/g);
// function(x) { return x.match(/\s+/g) }

//console.log(hasSpaces('hello world'));
// [ ' ' ]

//console.log(hasSpaces('spaceless'));
// null

//console.log(filter(hasSpaces, ['tori_spelling', 'tori amos']));
// ['tori amos']

var findSpaces = filter(hasSpaces);
// function(xs) { return xs.filter(function(x) { return x.match(/\s+/g) }) }

//console.log(findSpaces(['tori_spelling', 'tori amos']));
// ['tori amos']

var noVowels = replace(/[aeiouy]/ig);
// function(replacement, x) { return x.replace(/[aeiouy]/ig, replacement) }

var censored = noVowels("*");
// function(x) { return x.replace(/[aeiouy]/ig, '*') }

//console.log(censored('Chocolate Rain'));
// 'Ch*c*l*t* R**n'