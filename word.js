var Letter = require("./letter.js");

var Word = function (word) {
	this.letters_arr = [];
	for (let i = 0; i < word.length; i++) {
		var letter = new Letter(word[i]);
		this.letters_arr.push(letter);
	}
	this.toString = function () {
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
