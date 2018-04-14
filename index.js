var Word = require("./word.js");
var inquirer = require("inquirer");
var guesses_left = 7;
var word = new Word("hello");
var word_bank = ["Saruman", "Aragorn", "Sauron", "Morgoth", "Valaquenta", "Galadriel", "hobbit", "Teleri", "Beren"];
var word_index = Math.floor(Math.random() * (word_bank.length + 1));
word = new Word(word_bank[word_index]);
//check if there are any underscores -- if underscores decreases, guess is correct
//if it does not, guess is incorrect
var prompt = function () {
	var word_length = word.toString().length;
	var underscores_count = 0;
	for (let i = 0; i < word_length; i++) {
		if (word.toString()[i] === "_") {
			underscores_count++;
		}
	}
	console.log(guesses_left + " guesses left " + underscores_count + " underscores count");

	if (guesses_left > 0 && underscores_count > 0) {

		inquirer.prompt([
			{
				name: "guess",
				message: "Guess a letter!"
			}
		]).then(function (answers) {
			var tmp_underscores_count = 0;
			word.guess_letter(answers.guess);
			for (let i = 0; i < word_length; i++) {
				if (word.toString()[i] === "_") {
					tmp_underscores_count++
				}
			}

			if (underscores_count === tmp_underscores_count) {
				guesses_left--;
				console.log("You guessed wrong! " + "\n" + guesses_left + " guesses remaining");
			}
			else {
				console.log("You guessed right! " + "\n" + word.toString());
			}
			prompt();
		});
	}
}

prompt();
