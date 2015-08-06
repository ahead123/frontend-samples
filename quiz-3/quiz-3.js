
function sortWords(sentence) {

	// split input sentence into an array
	var splitSentence = sentence.split(" ");

	// compare the length of each string in the array and sort from low to high
	var sortedSentence = splitSentence.sort(function(a,b){
		return a.length - b.length
	});

	// join sentence back to string
	return sortedSentence.join(" ")
}

console.log(sortWords("The quick brown fox jumped over the lazy dog"));

console.log(sortWords("A wizard's job is to vex chumps quickly in fog"));

console.log(sortWords("Watch 'Jeopardy!', Alex Trebek's fun TV quiz game"));
