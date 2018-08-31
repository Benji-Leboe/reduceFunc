var testArr = [1, 2, 3, 4, 5];
var testArr2 = ["bob", "fred", "tom", "sponge"];
var testArr3 = [{val1: "a"}, {val2: "b"}, {val3: "c"}];




function myReduce(arr, cb, initVal){

  var result = initVal !== undefined ? initVal : arr[0];

  for(var i = initVal !== undefined ? 0 : 1; i < arr.length; i++){
    result = cb(result, arr[i]);
  }

  return result;
}

console.log(myReduce(testArr, sum));
console.log(myReduce(testArr2, stringer));
console.log(myReduce(testArr3, obJoiner, ""));


function findMax(currMax, next) {
  return currMax > next ? currMax : next;
}

function sum(acc, next) {
  return acc + next;
};

function sumEvens(acc, next) {
  return next % 2 === 0 ? acc + next : acc;
}

function sumOdds(acc, next){
  return next % 2 === 1 ? acc + next : acc;
}

function stringer(acc, next) {
  var joint = ', ';
  return Array.isArray(next) ? acc + myReduce(next, stringer) : acc + joint + next;
};

function obJoiner(acc, next){
  var joint = " ";
  return acc + (Object.values(next) + joint);
}