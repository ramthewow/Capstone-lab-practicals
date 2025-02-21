//let initialises a variable in a block
if (true) {
    let num = 10;
    console.log(num); // 10
}
console.log(num); //will not work; num is not defined

//-------------------------------------------------------------------//

//var initialises a variable in a function
if (true) {
    var num = 10;
    console.log(num); 
}
console.log(num); //will print 10 as long as the variable is accessed inside the function it was initialised in

//-------------------------------------------------------------------//

//initialising a variable without the keywords let or var will make it a global variable
function example() {
    num = 10; 
}
example();
console.log(num); //will print 10 regardless of where it is accessed

//------------------------------------------------------------------//4


//Destructuring 
const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

//Spread operator (...)
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

//Scope vs Function scope
function demo() {
    var x = 10;
    if (true) {
      var y = 20; // defining y in the if block
      let z = 15;
    }
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); //z is not defined 
  }