// printing msg
console.log("be stronger in Fundamental!");

// data types

/*
=>primitive data types
=>non-primitive data types(array,objects)
*/

// const userName = "sakib hasan"; //string data types
// const userAge = 29; //Number data types
// const isStudent = false; //boolean type
// let amount;
// let yearRemaining = null;
// const gradutaionYear; undefined
// console.log(typeof isStudent);
// console.log(typeof amount);
// console.log(typeof yearRemaining);

// one practice problem

/**
 * there are two user
 * one used iPhone+ a smart watch
 * one used laptop+ a note book
 * there total price and comapre who is higher
 *
 */

// task---1
/*
const userOneIphone = 1200;
const userOneSmartWatch = 530;
const userOneTotal = userOneIphone + userOneSmartWatch;

const userTwoILaptop = 900;
const userTwoNoteBook = 330;
const userTwoTotal = userTwoILaptop + userTwoNoteBook;
console.log(userOneTotal, userTwoTotal);
const isHigher = userOneTotal > userTwoTotal;
console.log(isHigher);
console.log("user One Total is higher than User Two= ", isHigher);
*/

/*
const userName = "sakib ";
const userAge = 29;
console.log(
  "hey! this is " + userName + " who is still jobless when he is " + userAge
);
console.log(
  `hey! this is ${userName} who is still jobless when he is ${userAge + 1}`
);
if (userAge <= 30) {
  console.log(`still ${30 - userAge} year's is remaining`);
} else {
  console.log(`out of age`);
}*/
// type conversion vs type coersion
// conversion
/*
const ourTargetvalue = "5";
console.log(typeof ourTargetvalue);
console.log(typeof Number(ourTargetvalue));
// Coercion is an automatic type conversion
// Most famous string and number coersion
console.log("10" + 10);
console.log("3" == 3);
console.log("10" - 2); //weired behaviour
console.log(typeof (10 - "2" + 2 + "3")); //string
console.log(typeof (10 - "2" + 2)); //number
*/

/*
const allowAge = 22;
const msg = allowAge >= 18 && "userAllow";
const msgForConsideration =
  (allowAge >= 18 || allowAge + 1 >= 16) && "user Allow After One Year";
console.log(msg);
console.log(msgForConsideration);
*/

// truthy and falsy value
// console.log("5 Falsy Value");
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(""));

// // a very stupid behaviour
// const nums = 0;
// if (nums) {
//   console.log("you started from here !");
// } else {
//   console.log("stupid guys");
// }

/*
const arr = [];
console.log(Boolean(arr)); //emoty array is true object

const arrNums = [1, 2, 3, 4, 5];
console.log(arrNums.indexOf(12));
console.log(arrNums[2] + arrNums[0]);

// add last elements of an array
const newArr = arrNums.push(8);
console.log(arrNums);
const popFromArr = arrNums.pop();
console.log(arrNums);
console.log(arrNums.length);
*/
// const wicketRemaining = 1;
// const oversCompleted = 50;
// const isOpponentBattingIsOver = false;
// if (
//   wicketRemaining == 0 ||
//   (oversCompleted == 50 && !isOpponentBattingIsOver)
// ) {
//   console.log("first innings over");
// } else {
//   console.log("loosing");
// }

// const userNums = prompt("enter Your Number! ");
// console.log(typeof userNums);

// if (Number(userNums) === 12) {
//   console.log("yes did it!");
// } else {
//   console.log("not this number");
// }
// if (userNums === 12) {
//   console.log("yes did it!");
// } else {
//   console.log("not this number");
// }
// const bigInt = BigInt(Number.MAX_VALUE);
// console.log(bigInt);

// let i = 0;
// while (i <= 10) {
//   // console.log(i);
//   i++;
// }
// const nums = [12, 34, 67, 234, 68, 55];
// let i = 0;
// const oddNums = [];
// while (i < nums.length) {
//   if (nums[i] % 2 !== 0) {
//     console.log(nums[i]);
//     oddNums.push(nums[i]);
//   }
//   i++;
// }

// console.log(nums);
// console.log(oddNums);

/* const nums = [1, 234, 52, 341, 2];
const pops = (nums) => {
  nums.length = nums.length - 1;
};

pops(nums);
console.log(nums);
pops(nums);
console.log(nums);
pops(nums);
console.log(nums);
pops(nums);
console.log(nums);
pops(nums);
console.log(nums); */
//function
// 1
// const fun = function (bane) {
//   console.log("hello", bane);
// };

// console.log(typeof fun);
// // 2
// fun("hell");
/* 
function sayHi() {
  console.log("this is only good morning");
}

sayHi();

function sayHiUser(name) {
  console.log(name, " good morning to you with a beautiful cup of coffe");
}

sayHiUser("sakib");
function getUserName(name) {
  return name;
}

var userOne = getUserName("Sakib Hasan");
var usertwo = getUserName("Sakib Hasan");
var users = [];
users.push(userOne);
users.push(usertwo);
console.log(users);
 */

// --------------------------Objects--------------

var users = {
  fName: "sakib",
  lName: "hasan",
  age: 30,
  job: "No Job",
  nextPlan: "full time jobless",
};
/* console.log(users);
console.log(users.fName);
console.log(users["lName"]);
var userAge = users["age"];
console.log(userAge);
console.log(Object.keys(users));
var keysOfUser = Object.keys(users); */
// for (var i = 0; i < keysOfUser.length; i++) {
//   if (keysOfUser[i].includes("a")) {
//     console.log("valid keys");
//   }
// }

// console.log("using loops 1");
// for (const i in users) {
//   console.log(i);
// }
// var object = { a: 1, b: 2, c: 3 };
// console.log(object.a);
// console.log(object[a]);
// console.log(object["a"]);

// for (const i in object) {
//   console.log(`${i} : ${object[i]}`);
// }

// var nums = [1, 24, 12, 344, 12];
// for (const iterator of nums) {
//   console.log(iterator);
// }
// for (const i of Object.values(object)) {
//   console.log(i);
// }

// 12 inch =1 feet

// function inchToFeet(inch) {
//   return inch / 12;
// }
// const firstUser = inchToFeet(26);

// console.log(Number(firstUser.toFixed(2)));

// check even or odd

// function isOddOrEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isOddOrEven(12));
// console.log(isOddOrEven(21));
// console.log(isOddOrEven(210));

// function isLeapYear(year) {
//   const comment = year % 4 === 0 ? true : false;
//   return comment;
// }

// console.log(isLeapYear(2020));
// console.log(isLeapYear(2016));
// console.log(isLeapYear(1923));
// function oddSum(arr) {
//   let i = 0;
//   let sum = 0;
//   while (i < arr.length) {
//     if (arr[i] % 2 !== 0) {
//       sum += arr[i];
//     }
//     i++;
//   }
//   return sum % 2 !== 0 ? sum : "result is an even number " + sum;
// }
// console.log(oddSum([103, 1, 1, 2]));

// function odd(num) {
//   if (num % 2 != 1) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }
// // odd(6);
// // console.log(19 % 2);
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// function printing(a, b, c) {
//   return a + 2;
//   return b + 2;
//   return c * 5;
// }

// console.log(printing(1, 2, 3));
