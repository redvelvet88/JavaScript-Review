var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //code here



/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

var runN = function(fn) {
  var count = 0;            //number of times this function runs
  return function() {
    if (count === 0) {
      fn();
      count++;
    }
  }
};

var result = runN(function() {
  console.log('run');
});


Once completed, add a second argument that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/
var runN = function(fn, timesToRun) {
  var count = timesToRun;            //number of times this function runs
  return function() {
    if (count > 0) {
      fn();
      count--;
    } else {
      console.log('STAHHP');
    }
  }
};

var result = runN(function() {
  console.log('run');
}, 5);

result();
