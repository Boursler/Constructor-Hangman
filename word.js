var Letter = require("./letter.js");

var Word = function (word) {
	//initialize empty letter array
	this.letters_arr = [];
	//run each letter through the word constructors and add to letters array
	for (let i = 0; i < word.length; i++) {
		var letter = new Letter(word[i]);
		this.letters_arr.push(letter);
	}
	this.toString = function () {
		//build displayed word
		var displayed_word = "";
		for (let i = 0; i < this.letters_arr.length; i++) {
			displayed_word += this.letters_arr[i].toString();
		}
		return displayed_word;
	}

	this.guess_letter = function (guess) {
		for (let i = 0; i < this.letters_arr.length; i++) {
			this.letters_arr[i].guess(guess);
		}

	}
}
module.exports = Word;
