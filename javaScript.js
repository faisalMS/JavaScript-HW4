// let people = [
//     {
//     name:"Faisal Al Sofyani",
//     height:175,
//     gender: "Male",
//     mass: 70,
//     eyeColor: "blue",
//     },
//     {
//         name:"Rayan",
//         height:180,
//         gender: "Male",
//         mass: 79,
//         eyeColor: "Black",
//     },
//     {
//     name:"Ali",
//     height:170,
//     gender: "Male",
//     mass: 68,
//     eyeColor: "Green",
//     },
//     {
//         name:"Sara",
//         height:210,
//         gender: "Female",
//         mass: 50,
//         eyeColor: "Red",
//     },

//     {
//         name:"lama",
//         height:200,
//         gender: "Female",
//         mass: 40,
//         eyeColor: "Red",
//     },
//   ];

// console.log("----------------------------EX1 Mab A-------------------------------------");

// A
//    let mapNames = people.map(function (people) {
//         return people.name}
//     );
//     console.log(mapNames);

//     console.log("----------------------------EX1 Mab B-------------------------------------");

// B

// let mapHeights = people.map(function (people) {
//     return people.height}
// );
// console.log(mapHeights);

// console.log("----------------------------EX2 REDUCE-------------------------------------");

// let redcHeight = people.reduce(function(previousVlaue, curentValue) {
//     return previousVlaue + curentValue.height}, 0);
// console.log(redcHeight);

// console.log("----------------------------EX3 filter A-------------------------------------");

// A

// let filterheight = people.filter(function(people) {
//     return people.height < 200});
// console.log(filterheight);

// console.log("----------------------------EX3 filter B-------------------------------------");

// B

// let filtermale = people.filter(function(people) {
//     return people.gender === "Male" });
// console.log(filtermale);

// console.log("----------------------------EX4 SORT A-------------------------------------");

// A

// let sortMass = people.sort(function (people) {
//     return people.mass}
// );
// console.log(sortMass);

// console.log("----------------------------EX4 SORT B-------------------------------------");

// B

// let sortHeight = people.sort(function (people) {
//     return people.height}
// );
// console.log(sortHeight);

// console.log("----------------------------EX5 EVERY A-------------------------------------");

// A

// let everyMass = people.every(function (people) {
//     return people.mass === 40}
// );
// console.log(everyMass);

// console.log("----------------------------EX5 EVERY B-------------------------------------");

// B

// let everyHeight = people.every(function (people) {
//     return people.height === 200}
// );
// console.log(everyHeight);

// console.log("----------------------------EX6 SOME A-------------------------------------");

// A

// let someEyeColor = people.some(function (people) {
//     return people.eyeColor === "blue"}
// );
// console.log(someEyeColor);

// console.log("----------------------------EX6 SOME B-------------------------------------");

// B

// let someHeight = people.some(function (people) {
//     return people.height === 200}
// );
// console.log(someHeight);


let arrayOfUsers = [];

function creatUser(name, height, gender, mass, eyeColor) {
  let user = {
    name,
    height,
    gender,
    mass,
    eyeColor,
  };
  arrayOfUsers.push(user);
}

creatUser("ahmed", 170, "male", 90, "black");
creatUser("sara", 150, "female", 37, "bule");
creatUser("salah", 190, "male", 770, "green");

console.log("\n" + "Q1" + "\n");
let namesAndHeight = arrayOfUsers.map((users) => [users.name, users.height]);
console.log(namesAndHeight);

console.log("\n" + "Q2" + "\n");
let names = arrayOfUsers.map((users) => users.name);
console.log("names: " + names);

console.log("\n" + "Q3" + "\n");
let totalMass = arrayOfUsers.reduce((p, c) => {
  return p + c.mass;
}, 0);
console.log("total mass: " + totalMass);

console.log("\n" + "Q4" + "\n");

function getCharacter(str) {
  let arrayOfCharacter = [];
  for (let index = 0; index < str.length; index++) {
    arrayOfCharacter.push(str.charAt(index));
  }
  return arrayOfCharacter;
}
let character = arrayOfUsers.map((users) => getCharacter(users.name));
console.log(character);

console.log("\n" + "Q5" + "\n");
arrayOfUsers.filter((users) => {
  if (users.mass > 100) {
    console.log(`user ${users.name} with mass ${users.mass} >100`);
  }
});

console.log("\n" + "Q6" + "\n");
arrayOfUsers.filter((users) => {
  if (users.gender === "female") {
    console.log(`user ${users.name} his gender is ${users.gender} `);
  }
});

console.log("\n" + "Q7" + "\n");
console.log("befor name sort");
console.log(arrayOfUsers);
arrayOfUsers.sort((a, b) => a.name.localeCompare(b.name));
console.log("after name sort");
console.log(arrayOfUsers);

console.log("\n" + "Q8" + "\n");
console.log("befor gender sort");
console.log(arrayOfUsers);
arrayOfUsers.sort((a, b) => a.gender.localeCompare(b.gender));
console.log("after gender sort");
console.log(arrayOfUsers);

console.log("\n" + "Q9" + "\n");
let isCheckEyeColor = arrayOfUsers.every((users) => {
  if (users.eyeColor === "bule") {
    return true;
  }
});
console.log("Is all eye color bule? " + isCheckEyeColor);

console.log("\n" + "Q10" + "\n");
let isMale = arrayOfUsers.every((users) => {
  if (users.gender === "male") {
    return true;
  }
});
console.log("Is all male? " + isMale);

console.log("\n" + "Q11" + "\n");
let isHaveMale = arrayOfUsers.some((users) => users.gender === "male");
console.log("Is there at least one male ? " + isHaveMale);

console.log("\n" + "Q12" + "\n");
let isHaveMass = arrayOfUsers.some((users) => users.mass < 50);
console.log("Is there at least one <50? " + isHaveMale);
