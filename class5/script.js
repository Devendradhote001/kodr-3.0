// // closures...

// function dd() {
//   let b = 90;
//   function fn() {
//     let a = 10;

//     function abcd() {
//       var c = 90;
//       a = 50;
//       b = 70;
//       console.log(a, b);
//     }
//     a = 40;
//     return abcd;
//   }
//   return fn;
// }

// dd()()();

// function abcd(a = []) {
//   console.log("hello", a);
// }

// abcd();

// let count = 9;

// function inc() {
//   let r = 80;
//   console.log(count);
// }

// inc();

// spread--- copy

// let arr = [1, 4, 6];
// let arr2 = [...arr];
// arr2[0] = 90;

// console.log(arr2);

// rest --- accept

// function test(...rest) {
//   console.log(rest);
// }

// test(4, 6, 8, 9, 7, 6, 5);

// let obj = {
//   name: "Chatur",
//   age: 60,
//   address: "Bhopal",
//   movie: "3 pagal",
//   cameraman: {
//     name: "rahul",
//   },
// };

// let obj2 = { ...obj };

// let { name, cameraman } = obj;
// console.log(a);

// console.log(obj);
// console.log(obj2);

// let arr = [4, 6];

// let [score, points] = arr;
// console.log(a);

// Event loops---

// console.log("hello");

// setTimeout(() => {
//   console.log("me chalgya");
// }, 0);

// Promise.resolve("50")
// .then((val) => console.log(val));

// console.log("byee");

// obj2.name = "pop";

// console.log(obj);
// console.log(obj2);
