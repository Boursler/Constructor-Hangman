var Letter = function (letter) {
	this.hidden_letter = letter;
	this.guessed = false;
	this.toString = function () {
		if (this.guessed === true)
			return this.hidden_letter;
		else
			return "_";
	}
	this.guess = function (player_guess) {
		if (player_guess === this.hidden_letter)
			this.guessed = true;

	}
}

module.exports = Letter;
