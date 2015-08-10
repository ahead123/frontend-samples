$(document).ready(function($) {

	var something;
	var alphabet = "";
	var newSentence = []

	var pangramCheck = function(sentence){


	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var newSentence = []

	// push input sentence into an array and remove spaces.
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

	// invoke removeSpaces and store it's return value -- a sentence with no spaces. 
	var sorted = removeSpaces(sentence)

	// convert sentence with no spaces to an array -- remove duplicates -- and convert back to string.
  var removeDups = sorted.split('').filter(function(everyElement,index,array){
    return index == array.indexOf(everyElement);
	}).join('');
  
  // ignore symbols and numbers and return an array of only letters
  var re = /[a-zA-Z]+/g;
  var onlyLetters = removeDups.match(re);
  
  
  // return true if string contains a-z else return false.
  return onlyLetters == alphabet ? true : false;

}


	// I don't know why but "something" doesn't work unless i put setTimeout around it!!1! @_@
	something = $($('#results-template').text());

	$('form').on('submit', function() {

		var anotherSomething = something.clone();

		anotherSomething.find('p.input').text($('form input[placeholder=sentence]').val());
	
		// store input value and use as argument for pangramCheck
		var stringToCheck = $('form input:first-of-type').val();
			
			if(pangramCheck(stringToCheck) == true){

				anotherSomething.find('p:nth-of-type(2)').html("This sentence is a pangram!");

			} else {

				anotherSomething.find('p:nth-of-type(2)').html("This sentence is not a pangram!");

			}

		$('#results').prepend(anotherSomething);

		$('form input[placeholder=sentence]').val('');

		return false;

	});


});
