function greet1() {
  var a = 'hello';

  if(a == 'hello'){

      var b = 'world';
      console.log('1: ', a + ' ' + b);
  }

  console.log('2: ', a + ' ' + b);
}

// greet1()
// var a1 = 5;
// console.log('3: ', a1)
// var a1 = 3;
// console.log('4: ', a1)



// function greet2() {
//   let a = 'hello';

//   if(a == 'hello'){
//       // variable b can be used here
//       let b = 'world';
//       console.log('5: ', a + ' ' + b);
//   }

//    // variable b cannot be used here
//   console.log('6: ', a + ' ' + b); // error
// }
// variable a cannot be used here

// greet2();

// let a2= 5;
// console.log('7: ', a2)
// let a2 = 3;
// console.log('8: ', a2)


// var is bad, can lead to things like this, unwanted, unexpected behavior
var a = 2;

for(var a = 0; a < 3; a++) {
    console.log('hello');
}

console.log(a); // 3

// 2. Redeclaring a variable with var in a different scope or block changes the value of the outer variable too. For example,
var a = 5;
console.log(a); // 5
{
    var a = 3;
    console.log(a); // 3
}
console.log(a); // 3


// let is good, expected behavior
let a = 2;

for(let a = 0; a < 3; a++) {
    console.log('hello');
}

console.log(a); // 2

// Redeclaring a variable with let in a different scope or block treats that variable as a different variable. And the value of a variable outside does not change. For example,
let a = 5;
console.log(a); // 5
{
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 5
