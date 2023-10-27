console.log('Functional Programming');

function mapForEach(arr, fn) {
  var newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(
      fn(arr[i])
    )
  }
  return newArr
}

console.log(mapForEach([1,2,3], function(item) {
  return item * 3
}));

var arr1 = [1,2,3]
console.log(arr1);

var arr2 = []
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2)
}
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
  return item > 2
})
console.log(arr3);

var checkPastLimit = function(limiter, item) {
  return item > limiter
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2))
console.log(arr4);

var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter
  }.bind(this, limiter)
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2))
console.log(arr5);