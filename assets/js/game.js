var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 
var guesses = 9;
var guessOptions = [];
var wins = 0;
var losses = 0;

document.onkeyup = function(event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (options.indexOf(userGuess) > -1) {
if (userGuess === computerGuess) {
wins++;
guesses = 9;
guessOptions = [];
}
else {
if (guessOptions.includes(userGuess)) {
   // Code for duplicate guess
}
else {
   guesses--;
   guessOptions.push(userGuess);
}
}

if (guesses === 0) {
guesses = 9;
losses++;
guessOptions= [];
}

   var html = 
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + guesses + "</p>" +
   "<p>Your Guesses so far: " + guessOptions.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};