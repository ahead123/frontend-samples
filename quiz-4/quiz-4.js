/**
Write a function that determines whether or not a sentence is a pangram (it contains every letter of the alphabet
at least once).

Write some test code that outputs the results (true or false) of the following sentences to the browser console (i.e. console.log):

- "The quick brown fox jumped over the lazy dog"
- "A wizard's job is to vex chumps quickly in fog"
- "Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"
- "This is not a pangram"
 */

var pangramCheck = function(sentence){

	var alphabet = "";
	var newSentence = []

	// create alphabet a-z using unicode char conversion.
	for(var i = 65; i <= 90; i++){
 		alphabet += (String.fromCharCode(i).toLowerCase())
	}

	// push our input sentence into an array and remove spaces.
	var removeSpaces = function(sentence){
		var splitString = sentence.split("")
			for(var i = 0; i < splitString.length; i++){
				if(splitString[i] != " "){
					newSentence.push(splitString[i].toLowerCase())
				}
			}

			// return a string with no spaces.
			return newSentence.sort().join("");
	}

	// invoke removeSpaces and store it's return value which is our sentence with no spaces. 
	var sorted = removeSpaces(sentence)

	// convert our sentence with no space to an array, remove duplicates, and convert back to string.
  var removeDups = sorted.split('').filter(function(everyElement,index,array){
    return index == array.indexOf(everyElement);
	}).join('');
  
  // return true if string contains a-z else return false.
  return removeDups == alphabet ? true : false;

}


console.log(pangramCheck("The quick brown fox jumped over the lazy dog"));
console.log(pangramCheck("A wizard's job is to vex chumps quickly in fog"));
console.log(pangramCheck("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));
console.log(pangramCheck("This is not a pangram"));

// console.log(pangramCheck("abcdefghijklmnopqrstuvwxyz") == true); 
// console.log(pangramCheck("aaaabcdefghijklmnopqrstuvwxyzoh yeah watermelon") == true);
// console.log(pangramCheck("abc") == false);





