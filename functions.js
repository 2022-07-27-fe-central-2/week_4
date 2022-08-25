// go over function declaration, function expression, arrow function, iife
function calcRectArea1(width, height) {
  return width * height;
}

const calcRectArea2 = function(width, height) {
  return width * height;
}

console.log('before iife')
console.log((function() {
  return 5 * 6
})())
console.log('after iife')

console.log((()=> 'hello')())


console.log(calcRectArea1(5, 6));
console.log(calcRectArea2(5, 6));

// Create a function that takes two arrays and insert the second array in the middle of the first array.

// [1, 10], [2, 3, 4, 5, 6, 7, 8, 9] ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const array1 = [ 1, 2, 9, 10 ];
// const array2 = [ 3, 4, 5, 6, 7, 8 ];


// const combineArrays = (array1, array2) =>  array1.splice((array1.length) / 2, 0,  ...array2)

// console.log(array1)

// const combineArrays = (array1, array2) => {
//   const halfIndex = array1.length / 2
//   // console.log(halfIndex)
//   const firstHalf = array1.slice(0, halfIndex)
//   const secondHalf = array1.slice(halfIndex)
//   console.log(firstHalf.concat(array2).concat(secondHalf))
// }

// combineArrays([1, 10], [2, 3, 4, 5, 6, 7, 8, 9] )