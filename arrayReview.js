var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
var last = function() {
  console.log(threeItems[(threeItems.length -1)]);
}

last(threeItems);



var threeItems = [1,2,3];

for (var i = 0; i < threeItems.length; i++) {
	console.log(threeItems[i]);
};

threeItems.forEach(function (item) {
	console.log(item);
});

var newArray = threeItems.map(function (item) {
	return "hi";
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

	for (var i = 0; i < evenArray.length; i++) {
		if ((evenArray[i] % 2) === 1) {
			evenArray.splice(i, 1);
			i--;

		}
	}

console.log(evenArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'.
// Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array.
// If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

  var random = function(arr) {
	    var randomNum = getRandomArbitrary();
	    console.log(randomNum);
	    if(arr.indexOf(randomNum) !== -1) {
	        alert(true);
	    } else {
	        alert(false);
	    }
	};

  // getRandomArbitrary(randomArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this,
//first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.

var first = [1,2,3,4,5];

  //code here
var second = first.slice(0, 5);
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

  //code here
var longest = function(str) {
	var string = str.split(" ");
	var longestWord = ("");
	for (var i = 0; i < string.length; i++) {
		if(longestWord.length < string[i].length) {
			longestWord = string[i];
		}
	}
	return longestWord;
};
longest(sentence);
//longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
  var capitalize = function(poem) {
  	var newPoem;
  	var poemArr = poem.split(" ");
  	var newPoemArr = [];
  	for (var i = 0; i < poemArr.length; i++) {
  		newPoemArr.push(poemArr[i].charAt(0).toUpperCase() + poemArr[i].slice(1));
  	}
  	return newPoem = newPoemArr.join(" ");
  };

  capitalize(myPoem); //invoke the function


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(str) {
  var vowels = str.split(" ");
  
}


vowelCounter(theOdyssey);
