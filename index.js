var Word = require("./word.js");
var word = new Word("hello");
console.log(word.toString());
word.guess_letter("h");
console.log(word.toString());
