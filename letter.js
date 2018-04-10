var Letter = function(ltr) {
  this.letter = ltr;
  this.guessed = false;

  this.checkedLetter = function(letterToCheck) {
    if (this.letter.toLowerCase() === letterToCheck.toLowerCase()) {
      this.guessed = true;
    }
  };

  this.showLetter = function() {
    if (this.guessed === false) {
      return "_ ";
    } else {
      return this.letter;
    }
  };
};
//export letter constructor
module.exports = Letter;

var myLetter = new Letter("p");

myLetter.checkedLetter("K");
console.log(myLetter.showLetter());

myLetter.checkedLetter("P");
console.log(myLetter.showLetter());

myLetter.checkedLetter("p");
console.log(myLetter.showLetter());
