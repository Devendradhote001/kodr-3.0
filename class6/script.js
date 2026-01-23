// Foreach
// map
// filter
// find
// reduce
// some;
// every;

// for in
// for of

let arr = [4, 6, 7, 8, 5];

let arr2 = [
  {
    name: "Rahul",
    age: 80,
  },
  {
    name: "chatur",
    age: 40,
  },
  {
    name: "rancho",
    age: 70,
  },
];

// let res = arr.forEach((val, ind) => {
//     if(val === 7) break;
//   console.log(val);
// });

// let res = arr.map((val) => {
//   return val;
// });

// // let res = arr2.filter(({ name, age }) => age > 50);

// let res = arr.find((val) => val > 7);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let res = arr.reduce((ac, val) => {
//   return (ac -= val);
// }, 0);

// let res = arr.some((val) => val > 7);

// let res = arr.every((val) => val >= 4);

// for (let i in arr) {
//   console.log(arr[i]);
// }

// console.log(res);

// Promises----

// pending
// fullfilled
// rejected

// let res = Promise.reject("10");

// res.then((val) => console.log(val)).catch((err) => console.log(err));

// let party = new Promise((res, rej) => {
//   setTimeout(() => {
//     let probab = true;
//     if (probab) return res("Me party dene wala hu...");
//     return rej("Nahi yrrr bad situation");
//   }, 0);
// });

// let part2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let probab = true;
//     if (probab) return res("Me party dene wala hu... 2");
//     return rej("Nahi yrrr bad situation");
//   }, 0);
// });

// party.then((val) => console.log(val)).catch((err) => console.log(err));

// async await --> functions

// await hamesha async fn k andr chalega

// async function abcd() {
//   try {
//     console.log("first");
//     let ans = await party;
//     console.log(ans);
//     console.log("hello");
//   } catch (error) {
//     console.log(error);
//   }
// }

// party.then((val) => {
//   part2.then((val) => console.log(val));
//   console.log("hello");
//   console.log(val);
// });

// abcd();

// fetch

// let usersApi = "https://fakestoreapi.com/users";

// let res = fetch(usersApi);

// res.then((val) => val.json()).then((val) => console.log(val));

// async function call() {
//   try {
//     let res = await fetch(usersApi);
//     let ans = await res.json();
//     console.log(ans);
//   } catch (error) {
//     console.log("error", error);
//   } finally{

//   }
// }

// callback hell

// order;
// createUser;
// createProduct;
// payment;

// createUser(() => {
//   craeteProduct(() => {
//     order(() => {
//       payment();
//     });
//   });
// });

// call
// apply
// bind

// call();

// DOM

// let res = prompt("enter your name");

// party.then(() => {}).catch((er) => {});

// async function abcd() {
//   try {
//     let res = await party;
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// abcd();
