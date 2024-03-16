//declaring a function (ES-5)
function add(a, b) {
  //   console.log("inside the subtract", arguments);
  return a + b;
}
const sum = add(2, 3);
// console.log(sum);

//declaring a function (ES-6)
const subtract = (x, y) => {
  return x - y;
};
const difference = subtract(10, 3);
// console.log(difference);

//passing functions to functions
function sayHi(helloInDiffLanguages, theLanguage) {
  console.log(helloInDiffLanguages, " is hello in ", theLanguage);
}
function greeting(callback, hello, language) {
  //   console.log("here is a and b", hello, language);
  //invoking a callback that was passed on line 28 (sayHi)
  callback(hello, language);
  // you can access global variables inside of functions
  //   console.log(add(100, 20));
}
// sayHi("Ola");
// greeting(sayHi, "Hallo", "German");
// greeting(sayHi, "Ola", "Portuguese");

// sayHi("Hallo", "German");

//*******************.map( )  *****************/
const array = [1, 2, 3, 4, 5];
const arrayTimesTwo = array.map((currentElement) => {
  //   console.log(currentElement, currentIndex, wholeArray);
  return currentElement * 2;
});
// console.log("the map array", arrayTimesTwo);
const people = [
  { name: "AJoshua", age: 125, premium: true },
  { name: "Eric", age: 125, premium: false },
  { name: "Ragnar", age: 3, premium: false },
];
const justTheNames = people.map((currentPerson, index, wholeArray) => {
  return currentPerson.name;
});
//one liner version
const oneLinerOfAges = people.map((person) => person.age);
// console.log(justTheNames);
// console.log(oneLinerOfAges);

//******************.filter ( ) *********************/
//.filter expects either true or false to be returned
const nonPremiumUsers = people
  .filter((currentPerson, currentIndex, array) => {
    //the ! reverses the value of a boolean
    if (!currentPerson.premium) {
      return true;
    }
  })
  .map((oneNonPerson) => {
    return oneNonPerson.name;
  });
// console.log("just the names", nonPremiumUsers);

const olderPeople = people.filter((onePerson) => {
  if (onePerson.age > 50) {
    return true;
  }
});
// console.log("older users", olderPeople);

//**********************.reduce( ) ***********************/
const numbers = [2, 5, 10, 20];
const items = [
  { title: "surfboard", price: 1000 },
  { title: "computer", price: 699 },
  { title: "dog collar" },
];
const sumOfReduce = numbers.reduce((accumulator, currentElement) => {
  return accumulator + currentElement;
}, 0);
const totalOfItems = items.reduce((acc, curr) => {
  if (curr.price) {
    return acc + curr.price;
  } else {
    return acc;
  }
}, 0);

// console.log("reduced array", totalOfItems);

//*******************.sort( ) *******************
//MUTATES the original!!!

const numArr = [1, 233, -111, 44, 1, 10, 44];
const namesArr = ["eric", "joshua", "ragnar"];
console.log(numArr);
//This is multiple lines, and recommended for you to practice
// numArr.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
//**********oneline version of sort ****************/
numArr.sort((a, b) => a - b);
// console.log("after", numArr);
namesArr.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
});
// console.log("name", namesArr);
people.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  }
});
console.log("people", people);

people.reverse();
console.log("people after", people);
