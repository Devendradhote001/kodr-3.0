// es5---

// function statement -----

function greet() {
  console.log("hey..");
}

// function expression----

let abcd = function () {
  console.log("hello");
};

// anonymous function--

// function(){
//     console.log("byee")
// }

// setInterval(function(){
//     console.log("hello")
// }, 1000)

// after es6---

let fn = (a) => a;

// console.log(fn(56));

// fat arrow with implicit return

let ab = () => 5;

// console.log(ab());

// fat arrow fn with implicit return with one param

let gg = (a, b) => a + b;

// console.log(gg(7, 9));

// immediately invoke fn expression

(() => {
  console.log("good afternoon");
})();

// ----------------------

function hh() {
  return function () {
    console.log("hey...");
  };
}

hh()();
