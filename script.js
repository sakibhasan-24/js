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
// expression produce value
// statement complete sentences

//===================String==================
// let objSize = 0;
// for (let i in users) {
//   objSize++;
// }
// let objSize = 0;
// for (let i in users) {
//   console.log(i);
//   objSize++;
// }
// console.log(objSize);
// console.log(objSize);
// function print(object) {
//   console.log(object);
// }
// print(String);
// print(Number());
// print([]);
// print(String);
// print(typeof "hello");
// print("world!");
// const nums = new Array(12.34, 23, 123, 12);
// console.log(nums[nums.length - 1]);
/* const courseDetails = {
  courseName: "data communication and netwok",
  courseCode: "csc 465",
  numberOfSection: 5,
  numberOfStudents: 220,
  firstTimeTaken: 200,
  nameOfFaculty: ["MAB", "DAS", "TTB", "MAH", "MMR"],
  findRetake: function () {
    console.log(this);
    this.retakeStudents = this.numberOfStudents - this.firstTimeTaken;
    return this.retakeStudents;
  },
  statementAboutCourse: function () {
    if (this.retakeStudents >= 100) {
      console.log("find out the faculty! analysis failed students result!");
    } else {
      console.log("analysis students result");
    }
  },
}; */

// let aboutCourse = prompt("what do you want to know about course!");
// if (Object.keys(courseDetails).includes(aboutCourse)) {
//   console.log(courseDetails[aboutCourse]);
// } else {
//   aboutCourse = prompt("Not Found!what do you want to know about course!");
//   console.log(courseDetails[aboutCourse]);
// }
//  console.log(courseDetails.findRetake());
// courseDetails.statementAboutCourse();
// console.log(courseDetails["nameOfFaculty"][0]);

// why array is object
/* JS is a prototype-based language, so there are only primitive types and objects. It grants flexibility but makes things more confusing at the same time */

/* he array type is not an exception here. Array global class is a global object and an array literal is just an instance of the Array global class.
In turn, a direct prototype of the array type contains all its special methods, like fill, find, etc.
 */

const arr = [1, 2, 235, 3, 2];
// const value = 2;
// console.log(Array.isArray(value));

arr[0] = 123;
arr[1] = 123;
arr[2] = 123;
arr[3] = 123;
arr[4] = 123;
arr[5] = 123;
// console.log(arr);
// const randomNumbersOne = Math.trunc(Math.random() * 12 + 1);
// const randomNumbersTwo = Math.trunc(Math.random() * 12 + 1);
// const result = randomNumbersOne * randomNumbersTwo;
// console.log(randomNumbersOne, randomNumbersTwo);
// console.log(result);

// let i = Math.trunc(Math.random() * 4 + 1);
// const resultBox = [
//   Math.trunc(Math.random() * 4 + 1),
//   Math.trunc(Math.random() * 2 + 1),
// ];
// console.log(resultBox);
// console.log(i);
// resultBox[i] = result;
// // console.log(i);s
// console.log(resultBox);

// const str = "learning js is never linear way!";
// console.log(str);
// str[0] = "L"; //immutable
// console.log(str);
// const searchText = "Js";
// if (str.toLowerCase().includes(searchText.toLowerCase())) {
//   console.log(searchText + "! exists ");
// } else {
//   console.log(searchText + "! not exists ");
// }

// console.log(str.indexOf("d"));
// if (str.indexOf("learning") !== -1) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//console.log(str.substring(1, 4)); //ear
//console.log(str.substring(0, 3)); //lea
//console.log(str.substring(5, str.length)); //ing js is never linear way!
//console.log(str.substring(-1, 1)); //l
// console.log(str.split(" ")[0].split("")[0] + str.split(" ")[1].split("")[0]);
// console.log(str.split(""));
// const userName = "Sakib Hasan";
// const userAcc =
//   userName.split(" ")[0].split("")[0] + userName.split(" ")[1].split("")[0];
// console.log(userAcc);

/* console.log(str.slice(0, 5));
console.log(str.slice(0, str.length));
console.log(str.slice(0, 1));
console.log(str.slice(3, str.length));
console.log(userName.concat("!!!!"));
 */

/* console.log(Math.sqrt(16));
console.log(Math.pow(6, 3));
console.log(Math.abs(-6));
console.log(Math.floor(9.1));
console.log(Math.ceil(9.9));
console.log(Math.round(9.4));
console.log(+Math.PI.toFixed(4));

for (let i = 1; i <= 10; i++) {
  console.log(Math.trunc(Math.random() * 100 + 1));
}
 */
// let a = 2;
// let b = 3;
// if (a < b) {
//   console.log("hello");
// }
/* let temp;
console.log(Math.max(val1, val2));
// console.log(val1, val2);
val1 = val2;
val2 = val1;
console.log(val1, val2);
temp = val1;
val1 = val2;
val2 = temp;
console.log(Math.round(Math.random() * 10));
console.log(Math.abs(-78)); */
//console.log(Array);

// const nums = [32, 45, 33, 12, 67, 31, 335, 0, 76];
// console.log(nums);
// console.log(nums.slice(3, 6));
// console.log(nums.splice(3));
// console.log(nums);

/* const guests = ["robert", "david", "joe", "mas", "rob"];
const guestList = [];
let duplicate = 0;
let i;
for (i = 0; i < guests.length; i++) {
  if (guestList.indexOf(guests[i]) === -1) {
    guestList.push(guests[i]);
  } else {
    duplicate++;
    console.log("duplicates are : ", guests[i]);
  }
}
if (duplicate === 0) {
  console.log("no duplicate found");
}

console.log(duplicate);
console.log(guestList); */
/* function fooBar(num) {
  if (typeof num !== "number") {
    return "Need Valid Number!!!";
  }
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("foo and bar 🍾🍾");
      count++;
    } else if (i % 3 === 0) {
      console.log("foooooooo  🍶");
    } else if (i % 5 === 0) {
      console.log("Barrrrrrr  🍻");
    } else {
      console.log(i);
    }
  }
  console.log("Party for " + count + " times!!!");
}

fooBar(20); */
// console.log(fooBar(1));
/* function checkFooOrBar(num) {
  if (typeof num !== "number") {
    return "Need Valid Number!!!";
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "foo and bar 🍾🍾";
  } else if (num % 3 === 0) {
    return "foo 🍶";
  } else if (num % 5 === 0) {
    return "bar 🍻";
  }
} */
// console.log(checkFooOrBar("nums"));
// console.log(checkFooOrBar(15));
// console.log(checkFooOrBar(9));
// console.log(checkFooOrBar(20));
// const products = {
//   quantity: 2,
//   pName: "case",
//   colors: "red",
//   price: 12000,
// };
// const productOne = Object.entries(products);
// // console.log(productOne);
// for ([key, value] of productOne) {
//   console.log(key + ": " + value);
// }
// for (let key in products) {
//   console.log(Object.entries(key));
// }
// let sum = 0;
// for (let i = 0; i <= 3; i++) {
//   sum = sum + i;
// }
// console.log(sum);

const candidate = {
  position: {
    job: "junior software Engineer",
  },
  candidateName: {
    fName: "Sakib",
    lName: "Hasan",
  },
  education: {
    ssc: 2016,
    hsc: 2018,
    graduation: "BCSE,IUBAT,DHAKA ,BANGLADESH",
  },
  industrySkills: [
    "html5",
    "css3",
    "bootstrap",
    "tailwind css",
    "JAVASCRIPT",
    "react.js",
    "firebase",
    "react-router",
    "Node.js",
    "mongoDb",
    "express js",
    "and many more.....",
  ],

  accedemicSkills: [
    "System analysis and design",
    "Software engineering",
    "data structure and algorithm",
    "c++",
    "java",
    "object oriented",
    "Database managements",
    "c# and asp.net",
    "data communication and networking",
  ],
  hobbies: [
    "watching sports",
    "love to analysis sports",
    "interested in global activities",
    "foodie",
  ],
  skills: ["industrySkills", "accademicKkills"],
  chooseQuestionsType: function (firstmajor, secondMajor) {
    return `we will ask questions from ${this.industrySkills[firstmajor]} and ${this.industrySkills[secondMajor]}`;
  },
  addContactInfo: function ({
    fullName,
    phoneNo,
    email,
    githubLink = "not given",
    address = "not clear at all",
    jobExperience,
    firstmajor = Math.trunc(Math.random() * 11),
    secondMajor = firstmajor >= 0 && firstmajor <= 5
      ? Math.trunc(Math.random() * (10 - 6) + 6)
      : Math.trunc(Math.random() * (5 - 0) + 0),
  }) {
    //if send parameter as a single variable possibility for confusion serial,so object is best options
    // console.log("------information------");
    // console.log(firstmajor, secondMajor);
    const information = `name :${fullName}\n,address:${address}\n ,email:${email}\n ,phone number :${phoneNo} \n github link :${githubLink} apply for software engineering positions , he has ${
      jobExperience === 0 ? "no experience " : "no experience"
    } \nwe will ask questions from ${this.industrySkills[firstmajor]} and ${
      this.industrySkills[secondMajor]
    }`;
    // console.log(information);
  },
};

// objects playing...............
const { education, contactInfo = "not Found!!" } = candidate;
// console.log(education, contactInfo);
const { fName: candidateFirstName } = candidate.candidateName;
// console.log(candidateFirstName);
candidate.addContactInfo({
  fullName: "Sakib Hasan",
  phoneNo: "019665XXXXXXX",
  email: "sakibhasan7724@gmail.com",
  githubLink: "sakibhasan-24.io",
  address: "somewhere in DHAKA CITY",
  jobExperience: 0,
});
// console.log(candidate);
// // destructuring.......
// const [firstHobbies] = candidate.hobbies;
// const [firstSkills] = candidate.industrySKils;
// console.log(firstHobbies, firstSkills);
// let [firstSkills, secondSkills] = candidate.skills;

// console.log(firstSkills, secondSkills);
// [secondSkills, firstSkills] = candidate.skills;
// console.log(firstSkills, secondSkills);
// console.log(candidate.chooseQuestionsType(6, 9));
// add new skills

const addSkills = [
  ...candidate.industrySkills,
  "next.js",
  "sass",
  "advance data base",
];
//not change all array
// console.log(candidate.industrySkills);
// console.log(addSkills);
// add two array

const allLevelSkills = [...addSkills, ...candidate.accedemicSkills];
// console.log(allLevelSkills);
// add spread operator for adding sum

// function addNums(...nums) {
//   console.log(nums);
//   let res = 0;
//   for (let i in nums) {
//     res += nums[i];
//   }
//   console.log(res);
// }
// addNums(1, 45, 65, 98);
// function addArray(nums) {
//   let res = 0;
//   for (let i = 0; i < nums.length; i++) {
//     res += nums[i];
//   }
//   console.log(res);
// }

// addArray([1, 34]);
// -------------add object property on an objects---------

// const newCandidateValue = { id: 1234, ...candidate };
// const storeDocument = { ...candidate };
// storeDocument.candidateName.fName = "Mr.Sakib";
// console.log(storeDocument.candidateName.fName);
// console.log(candidate.candidateName.fName);
// console.log(candidate);
// console.log(candidate);
// console.log(newCandidateValue);
// console.log(candidate);
// console.log(newCandidateValue);
// console.log(
//   newCandidateValue.candidateName.fName === candidate.candidateName.fName
// );
// console.log(newCandidateValue);
// newCandidateValue.candidateName.fName = "Mr.Sakib";
// console.log(newCandidateValue.candidateName.fName);
// console.log(candidate.candidateName.fName);
// console.log(candidate);
// console.log(candidate.candidateName);
// const storeCandidateDocument = { ...candidate };
// console.log(storeCandidateDocument.candidateName);
// // storeCandidateDocument.candidateName = { fName: "Mr.sakib", lName: "Hasan." };
// storeCandidateDocument.candidateName.fName = "NN";
// console.log(storeCandidateDocument);
// console.log(candidate);
// const demoCandidate = { ...candidate };
// // console.log(demoCandidate.position);
// demoCandidate.position.job = "software engineer";
// console.log(demoCandidate.position.job);
// console.log(candidate.position.job);

// const numsObj = {
//   even: {
//     x: 0,
//     y: 2,
//     z: 4,
//   },
//   a: 3,
//   b: 8,
//   c: 13,
//   d: 17,
// };

// const demo = { ...numsObj };
// console.log(demo.even);
// demo.even.x = 1000;
// console.log(demo.even);
// console.log(numsObj.even);
// console.log(100 / 0);
// const a = null;
// if (!a) {
//   console.log("hello");
// } else {
//   console.log("world");
// }
// console.log(15 == "15");
// function com(a, b) {
//   if (a.toString() === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("123" + 123);
// let a = "hi";
// let b = "there";
// console.log(a + b);

// or operator return first truthy value
// AND operator return first falsy value

/* const jobExperience = 0;
const jobStatement = jobExperience ?? 10; //?? its make 0 and "" string as a truthy value
console.log(jobStatement); */

// -------all about string----------------

// why STring is Object

const userObj = new String("sakib");
// console.log(userObj);

// function strCons() {
//   return "as";
// }

// const on = new strCons();
// console.log(on);
// const userAcc = "Sakib Hasan";
// const shortName = userAcc.split(" ");
// console.log(shortName);
// const targetName = shortName[0].split("")[0] + shortName[1].split("")[0];
// console.log(targetName);

// console.log(provideShortName("sakib hasan"));
// console.log(provideShortName("hello World"));

// function provideShortName(userName) {
//   // console.log(userName);
//   const shortName = userName.split(" ");
//   const targetName = shortName[0].split("")[0] + shortName[1].split("")[0];
//   return targetName;
// }

// const now = new Date();
// console.log(now.getMinutes());

// more about function default parameter

const markSheets = [];
function studentMarks(stuName = "No Name", ID = 0, marks = 0.0, grade = "I") {
  // funniest solution
  // if (
  //   stuName === undefined ||
  //   ID === undefined ||
  //   marks === undefined ||
  //   grade === undefined
  // ) {
  //   return alert("No value");
  // }
  // more smart solution
  // stuName = stuName || "not found";
  // ID = ID || 0;
  // marks = marks || 0;
  // grade = grade || "I";

  // but best default parameter

  const result = {
    stuName: stuName,
    ID: ID,
    marks: marks,
    grade: grade,
  };

  markSheets.push(result);
  console.log(result);
}
// studentMarks();
// studentMarks("sakib", 20103218, 75, "C");
// studentMarks();

// const courseName = "CSC465";
// const student = {
//   ID: 3218,
//   isPassed: false,
// };
// function permitForNext(courseName, student) {
//   courseName = "fundamental";
//   student.ID = 20103218;
//   if (student.isPassed) {
//     alert("yes!! go for Next");
//   } else {
//     alert("first do it");
//   }
//   console.log(student);
//   console.log(courseName);
// }

// permitForNext(courseName, student);
// console.log(courseName, student);
/* console.log(
  "A higher Order function received another function as an argument,can return a fucntion"
); */

// with out higher order function

function double(val) {
  return val * 2;
}

function triple(val) {
  return val * 3;
}

// double(4);
// triple(4);

// with higherOrder function

function calculation(val, fn) {
  const result = fn(val);
  // console.log(`function name : ${fn.name} ${result}`);
}
calculation(4, double);
calculation(4, triple);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function giveEven(nums) {
//   const res = [];
//   for (const i of nums) {
//     if (i % 2 === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// function giveDouble(nums) {
//   const res = giveEven(nums);
//   const newNums = [];
//   for (const i of res) {
//     newNums.push(i * 2);
//   }
//   return newNums;
// }
// function getEvenAndDouble(nums, fn) {
//   console.log(`${fn(nums)}`);
// }
// getEvenAndDouble(numbers, giveDouble);
// getEvenAndDouble(numbers, giveEven);

// function returning a function
/* function add(number) {
  return function (value) {
    console.log(number + value);
  };
}

// single line
add(4)(2);
add(200)(300);
// double step
const res = add(10);
res(20); */
// function outerFunction() {
//   let down = 1;
//   return function () {
//     console.log(down);
//   };
// }
//const fn = outerFunction();

/* function crossBriddge() {
  let numberOfCars = 0;
  return function () {
    return numberOfCars++;
  };
}
const nums = crossBriddge();
console.log(nums());
console.log(nums());
console.log(nums());
console.log(nums());
 */

const userList = ["sakib", "tom", "Kane", "joe"];
// userList.map((user) => console.log(user[0]));

// one way
// const numberList = [1, 2, 3, 4, 5];
/* const doubleNumbers = [];
numberList.map((num) => doubleNumbers.push(num * 2));
console.log(doubleNumbers); */

// second way
// const doubleIt = numberList.map((num) => num * 2);
// console.log(doubleIt);

// function groupPeopleByAge(people) {
//   const grouped = {};
//   for (const person of people) {
//     const { age, name } = person;

//     if (grouped[age]) {
//       console.log(grouped);
//       grouped[age].push({ name, age });
//     } else {
//       console.log(grouped);
//       grouped[age] = [{ name, age }];
//     }
//   }
//   return grouped;
// }
// output
/* 
{
  25: [
    { name: 'Alice', age: 25 },
    { name: 'Carol', age: 25 }
  ],
  30: [
    { name: 'Bob', age: 30 },
    { name: 'David', age: 30 }
  ],
  35: [
    { name: 'Eve', age: 35 }
  ]
}


*/
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Carol", age: 25 },
//   { name: "David", age: 30 },
//   { name: "Eve", age: 35 },
// ];

// const groupedByAge = groupPeopleByAge(people);
// console.log(groupedByAge); // Expected output: The object with grouped people
// const numberList = [1, 2, 3, 4, 5];
// const result = numberList.forEach((num) => console.log(num * 2));
// const remove = numberList.filter((num) => {
//   return num % 2 == 0;
// });
// const findMethod = numberList.find((num) => num % 2 == 0);
// console.log(remove);
// console.log(findMethod);
// const total = numberList.reduce((pre, curr) => pre + curr, 0);
// console.log(total);

// console.log("Object.classes");

// 1)class Course {
//   courseName;
//   courseCode;
//   courseFaculty = [];
// }
// const networdCourse = new Course();
// networdCourse.courseName = "Data Communication ";
// networdCourse.courseCode = "CSC465";
// networdCourse.courseFaculty = ["a", "b"];
// console.log(networdCourse);

//2)

// class Course {
//   constructor(courseName, courseCode, courseFaculty) {
//     this.courseName = courseName;
//     this.courseCode = courseCode;
//     this.courseFaculty = courseFaculty;
//   }
//   numbersOfFaculty(faculty) {
//     return `${faculty.length} faculty offers ${this.CourseName} course`;
//   }
// }

// Course.prototype.offerPerYear;

// const courseOne = new Course("DATA", "CSC", ["a", "b", "c"]);
// console.log((courseOne.offerPerYear = 12));
// console.log(courseOne.numbersOfFaculty(["a", "b", "c"]));
// class CourseTwo extends Course {
//   constructor(courseName, courseCode, courseFaculty, isPrerequisite) {
//     super(courseName, courseCode, courseFaculty);
//     this.isPrerequisite = isPrerequisite;
//   }
// }

// const courseTwo = new CourseTwo("DATA", "CSC", ["a", "b", "c"], true);
// console.log(courseTwo);
// console.log((courseTwo.offerPerYear = 1));

/* const cube = (x) => x * x * x;
console.log(cube(2));
const nums = [1, 2, 3, 4, 5];
const [a, b] = nums;
console.log(a + b);
const { x, y, z } = { x: 1, y1: 2, z: 3 };
console.log(y);
let out = nums.filter((n) => n % 2);
console.log(out);
console.log(4 % 2);
 */

// let p = "J";
// let q = p; //j
// p = "R";
// console.log(q);

// const isTrue = true;
// // console.log(!isTrue);
// console.log(!isTrue ? "Hello" : "World");
// const sum = (p, q) => {
//   p + q;
// };

// console.log(sum(2, 3));
// function work(x, y = 4) {
//   return x + y;
// }
// console.log(work(32));

// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(5);
// const getData = new Promise((resolve, reject) => {
//   // resolve(123);
//   reject("no data");
// });
// getData.then((res) => console.log(res)).catch((err) => console.log(err));

/* async function f() {
  let res = "first";
  console.log(res);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
  res = await promise;
  console.log(res);
}
f();

function g() {
  let res = "first";
  console.log(res);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
  res = promise;
  console.log(res);
} */
// f();

// what you need for react
// 1(how to declare a variable let const var)
const yourName = "sakib";

let yourAge = 12;
var youOutOfControl = 9999;

// 2(conditional)

//3) array,index,push,pop,
const yourMarks = [12, 45, 90, 88, 9];

// 4)loop(for loop,for in loop,for of loop,while)
// 5(function)
// 6(OBJECT)
//
const user = {
  position: {
    job: "junior software Engineer",
  },
  candidateName: {
    fName: "Sakib",
    lName: "Hasan",
  },
  education: {
    ssc: 2016,
    hsc: 2018,
    graduation: "BCSE,IUBAT,DHAKA ,BANGLADESH",
  },
  passingYear: 2025,
};

// arrow function
const multiply = (nums) => nums * 3;
// console.log(multiply(3));
const userName = `${user.candidateName.fName} is not eligible`;
// console.log(userName);
// const arrNums = [
//   Math.trunc(Math.random() * 10 + 1),
//   Math.trunc(Math.random() * 16 + 5),
//   Math.trunc(Math.random() * 100 + 5),
// ];
// console.log(Math.trunc(Math.random() * 5));
// console.log(Math.trunc(Math.random() * (10 - 5) + 5));
const numberArray = [12, 2, 123, 1, 19, 100];
// map

const newArray = numberArray.map((num) => num * 2);
// console.log(newArray);
// foreach
// doesnot return anything
/* const forEachNew = numberArray.forEach((num) => num * 5);
console.log(forEachNew); */
// numberArray.forEach((num) => console.log(num * 5));
// filter
// return only number grater than 10
const newArrFilter = numberArray.filter((num) => num > 10);
// console.log(newArrFilter);
// find
// only first match return value
const findNum = numberArray.find((num) => num > 10);
// console.log(findNum);
// reduce

// traditional method
let sum = 0;
for (let i = 0; i < numberArray.length; i++) {
  sum += numberArray[i];
}
// console.log(sum);

// very simple prev value,current value and an initial value
const reduceMethod = numberArray.reduce((prev, current) => prev + current, 0);
const reduceMethods = numberArray.reduce(
  (prev, current) => prev + current,
  -257
);
// console.log(reduceMethod);
// console.log(reduceMethods);

// // destructuring
// console.log(JSON.stringify(user));
// console.log(JSON.parse(JSON.stringify(user)));
// let's play with random numbers

// console.log(Math.random()); //return 0 to 0.99
// console.log(Math.trunc(Math.random() * 5)); //0 to 5
// console.log(Math.trunc(Math.random() * (15 - 10) + 10)); //10 to 15
// console.log(Math.trunc(Math.random() * (1000 - 998)) + 998); //998 to 1000
// console.log(Math.trunc(Math.random() * 2) + 998); //998 to 1000
// console.log(Math.trunc(Math.random() * 2) + 998);

// const { position, education: edu, experience = 12, ...allInfo } = user;
// console.log(experience);

// data structure
const mapData = new Map();
// console.log(mapData.size);
mapData.set("userName", "sakib hasan");
mapData.set("skills", ["HTML", "CSS", "JS", "REACT"]);
// console.log(mapData.get("skills"));
// mapData.forEach((value, key) => console.log(value, key));
const products = new Map();
products.set("chips", 12);
products.set("choclate", 2);
products.set("drinks", 1);
products.set("tea", 4);
products.set("coffe", 5);

// products.delete("coffe");
// for (let [productName, productQuantity] of products) {
//   if (products.has("choclsate")) {
//     console.log("found");
//     break;
//   } else {
//     console.log("no");
//     break;
//   }
// }
// console.log(products);

// each box(node) has  two things one is initial value other one is reference(it means which value is next)

const room = { numOfTable: 1, numOfChair: 1, roomStatus: "master bed" };

/* console.log(room["numOfTable"]);
console.log(room.numOfChair);
console.log(room.status); */

// what will be the output and why
// keys are always stringified
/* const obj = { a: 1, b: 4, true: true };
console.log(obj);
obj["true"] = "hello....";
console.log(obj["true"]);
console.log(obj[true]);
console.log(obj);
 */

// ----------------OOP ---------------------
// ---------------CLASS-----------------
class Operation {
  // lets add constructor
  constructor(a, b) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error("a must be a positive number");
    }
    if (!Number.isFinite(b) || b <= 0) {
      throw new Error("b must be a positive number");
    }
    this.a = a;
    this.b = b;
  }
  performAdd() {
    return this.a + this.b;
  }
  performMultiply() {
    return this.a * this.b;
  }
}

// const first = new Operation();
// console.log(first)
// first.num1 = 2;
// first.num2 = 1;
// console.log(first.performAdd());

class BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0) {
    if (typeof balance !== "number") {
      console.log("balance must be a positive number");
    }
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount < 0 || typeof amount !== "number") {
      console.log("amount must be a positive number");
      return;
    }
    return (this.balance += amount);
  }
  withdraw(amount) {
    if (amount < 0 || typeof amount !== "number" || amount > this.balance) {
      console.log("amount must be a positive number and less than balance");
      return;
    }
    return (this.balance -= amount);
  }
}

const one = new BankAccount(123456789, "sakib", 100);
one.withdraw(80);
// console.log(one);
class SpecialCustomer extends BankAccount {
  constructor(accountNumber, accountHolderName, balance = 0, takeLoan) {
    super(accountNumber, accountHolderName, balance);

    this.takeLoan = takeLoan;
  }
  calculateTotalAmountAndLoan() {
    const totalBalance = this.balance + this.takeLoan;
    const totalLoan = this.takeLoan;
    console.log(
      `your total balance is ${totalBalance} and totalLoan is ${totalLoan}`
    );
  }
}
const spe = new SpecialCustomer(123456789, "sakib", 100, 50);
// spe.calculateTotalAmountAndLoan();

// merge array
// [0,3,5,62],[6,9,30]
// out put [0,3,5,6,9,30,62]
const mergeArray = (arr1, arr2) => {
  const newMergeArray = [];
  let arrayOneItem = arr1[0];
  let arrayTwoItem = arr2[0];
  let i = 1;
  let j = 1;
  // while (arrayOneItem || arrayTwoItem) {
  //   console.log(arrayOneItem, arrayTwoItem);
  //   if (!arrayTwoItem || arrayOneItem < arrayTwoItem) {
  //     newMergeArray.push(arrayOneItem);
  //     arrayOneItem = arr1[i];
  //     i++;
  //   } else {
  //     newMergeArray.push(arrayTwoItem);
  //     arrayTwoItem = arr2[j];
  //     j++;
  //   }
  // }
  return newMergeArray;
};

// console.log(mergeArray([0, 3, 5, 62], [6, 9, 30, 87]));
// first case
//  0 > 6 if true then push 6 otherwise push 0

// hash table

/* 1- create a hash table class */
/* class HashTable {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }
  // hash function
  calculateHash(key) {
    return key.toString().length % this.size;
  }
  add(key, value) {
    const hash = this.calculateHash(key);
    // console.log(hash);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }
  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }
} */

/* const hashOne = new HashTable();
hashOne.add("sakib", 900);
hashOne.add("sakib hasan", 100);
hashOne.add("sakib hasan d", 300);
console.log(hashOne.search("sakib hasan d")); */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      // console.log("inside", hash);
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key); // where i will store my result
    // console.log(address);
    if (!this.data[address]) {
      this.data[address] = [];

      // console.log(this.data);
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // console.log(currentBucket[i][1]);
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return "no items";
    }
  }
}

const myHashTable = new HashTable(2);
// console.log(myHashTable.set("password", 1000));
// myHashTable.set("userName", 1000);
// myHashTable.set("email", 100);
// myHashTable.set("password20", 190);
const ans = myHashTable.get("email");
// console.log(ans);
const value = [12, 35, 35, 112, 34];

// o(n'2)
function findSameElements(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0 + 1; j < input.length; j++) {
      // console.log("i", i, "j", j);
      if (input[i] === input[j]) return input[i];
    }
  }
  return null;
}

function hashTableImplement(input) {
  let newObj = {};
  for (let i = 0; i < input.length; i++) {
    if (newObj[input[i]] !== undefined) {
      console.log(newObj);

      return input[i];
    } else {
      newObj[input[i]] = i;
    }
  }
  return undefined;
}

// console.log(hashTableImplement([1, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(String.fromCharCode(i));
// newObj.push({ key: String.fromCharCode(i), value: input[counter] });
// newObj[input[i]] means input[i]==1 newObj[1]

function targetIndex(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (targetNum === nums[j]) {
        return [i, j];
      }
    }
  }
  return null;
}
// console.log(targetIndex([1, 3, 7, 9, 2], 16));/
function targetIndexTwo(nums, target) {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNumMaps = numsMap[nums[i]];
    if (currentNumMaps >= 0) {
      return [currentNumMaps, i];
    } else {
      const targetNum = target - nums[i];
      numsMap[targetNum] = i;
    }
  }
  return null;
}
// console.log(targetIndexTwo([1, 3, 7, 9, 2], 11));

// array two

// console.log(0o22 % 20);

// linked list

/* 
  "sakib" --->"depression"--->"control"

*/

const linkedList = {
  head: {
    value: "sakib",
    next: {
      value: "depression",
      next: {
        value: "control",
        next: {
          value: null,
        },
      },
    },
  },
};
// 100-200-900
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//     // console.log(this.tail === null);
//   }
// }

/* 

"sakib"->"target"->"tea"
 "sakib is  a box it has a value and next,where next indicate next(target) ,then target has value and next and next indicate tea"

 but here sakib is head
*/

class LinkedList {
  constructor(name) {
    // this.name=name
    // this.next=null
    this.head = {
      name: name,
      next: null,
    };
    // update for tail
    this.tail = this.head;
    this.length = 1;
  }
  add(name) {
    // repeat
    const newNode = {
      name: name,
      next: null,
    };
    // update tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  addFirst(name) {
    // repeat
    const newNode = {
      name: name,
      next: null,
    };
    // update
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}
const myLinkedList = new LinkedList("sakib");
myLinkedList.add("target");
myLinkedList.add("tea");
myLinkedList.addFirst("Legend--->");
// console.log(myLinkedList);

// challenge One

/* 
// monokai
   1-2-3-4-5-null
   output:5-4-3-2-1-null



*/

// const reversedLinkedList = (head) => {
//   console.log(head);
//   // [1, 2, 3, 4, 5, 6]
//   let prev = null;
//   let current = head;
//   while (current) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   return prev;
// };
// console.log(reversedLinkedList([1, 2, 3, 4, 5, 6]));

// const arrayReversed = (arr) => {
//   const newArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// };
// console.log(arrayReversed([1, 2, 3, 4, 5, 6]));

// basic stack and queue

const arrStack = [1, 23, 45, 3];
arrStack.push(1222);
// console.log(arrStack);

const arrQueue = [1, 2, 3, 54, 3];
// console.log("orginal", arrQueue);
arrQueue.shift(12);
// console.log("shift", arrQueue);
arrQueue.unshift(100);
// console.log("unshift", arrQueue);
//

// binary search  tree

class BinarySearch {
  constructor() {
    this.root = null;
  }

  // insert nums
  insert(value) {
    // create a new node
    const newNode = {
      value: value,
      left: null,
      right: null,
    };
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // go left
          // check if left node root
          if (!currentNode.left) {
            console.log("currentNode", currentNode);
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert
  insert(value) {
    const newNode = {
      value: value,
      left: null,
      right: null,
    };
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value <= currentNode.value) {
          // left side
          if (currentNode.left === null) {
            currentNode.left = currentNode;
            return this;
          }
          // if not null
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = currentNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const check = new BinarySearchTree();
check.insert(9);
check.insert(4);
check.insert(6);
check.insert(20);
// check.insert(170);
// check.insert(15);
// check.insert(1);

console.log(check.root);
