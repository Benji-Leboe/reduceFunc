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
console.log(myReduce(testArr2, joiner));
console.log(myReduce(testArr3, obJoiner, ""));


function max(maxSoFar, next) {
  return maxSoFar > next ? maxSoFar : next;
}

function sum(accumulator, next) {
  return accumulator + next;
};

function sumEvens(accumulator, next) {
  return next % 2 === 0 ? accumulator + next : accumulator;
}

function joiner(acc, next) {
  var joint = ' ';
  return Array.isArray(next) ? acc + myReduce(next, joiner) : acc + joint + next;
};

function obJoiner(acc, next){
  return acc + Object.values(next).join(", ");
}