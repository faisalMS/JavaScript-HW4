let person = [
  {
    name: "Faisal Alsofyani",
    height: 175,
    gender: "Male",
    mass: 120,
    eyeColor: "Black",
  },
  {
    name: "lama kk",
    height: 200,
    gender: "Female",
    mass: 40,
    eyeColor: "Red",
  },

  {
    name: "Ali  mm",
    height: 170,
    gender: "Male",
    mass: 68,
    eyeColor: "Green",
  },
  {
    name: "Sara oo",
    height: 210,
    gender: "Female",
    mass: 50,
    eyeColor: "Red",
  },

  {
    name: "lama kk",
    height: 200,
    gender: "Female",
    mass: 40,
    eyeColor: "Red",
  },
  {
    name: "Rayan ff",
    height: 180,
    gender: "Male",
    mass: 79,
    eyeColor: "Black",
  },
];

console.log(
  "--Q1.A Get array of objects with just name and height properties--"
);

let mapNH = person.map(function (person) {
  return [person.name, person.height];
});
console.log(mapNH);

console.log("--Q1.B Get array of all first names--");

let mapNames = person.map((person) => {
  [first, ...rest] = person.name.split(" ");
  return first;
});
console.log(mapNames);

console.log("--Q2.A Get total mass of all characters--");

let redcMassAll = person.reduce(function (previousVlaue, curentValue) {
  return previousVlaue + curentValue.mass;
}, 0);
console.log(redcMassAll);

console.log(
  "--Q2.B Get total number of characters in all the character names--"
);

const result = person.reduce((sum, ele) => sum + ele.name.length, 0);
console.log(result);

console.log("--Q3.A Get characters with mass greater than 100--");

let filterMass = person.filter(function (person) {
  return person.mass > 100;
});
console.log(filterMass);

console.log("--Q3.B Get all female characters--");

let filterFemale = person.filter(function (person) {
  return person.gender === "Female";
});
console.log(filterFemale);

console.log("--Q4.A Sort by name--");

console.log("befor name sort");
console.log(person);
person.sort((a, b) => a.name.localeCompare(b.name));
console.log("after name sort");
console.log(person);

console.log("--Q4.B Sort by gender--");

console.log("befor gender sort");
console.log(person);
person.sort((a, b) => a.gender.localeCompare(b.gender));
console.log("after gender sort");
console.log(person);

console.log("--Q5.A Does every character have blue eyes?--");

let everyEyeColor = person.every(function (person) {
  return person.eyeColor === "Blue";
});
console.log(everyEyeColor);

console.log("--Q5.B Is every character male?--");

let everyPersonMale = person.every(function (person) {
  return person.gender === "Male";
});
console.log(everyPersonMale);

console.log("--Q6.A Is there at least one male character?--");

let someleastOneMale = person.some(function (person) {
  return person.gender === "Male";
});
console.log(someleastOneMale);

console.log(
  "--Q6.B Is there at least one character that has mass less than 50?--"
);

let someMasslessThan = person.some(function (person) {
  return person.mass > 50;
});
console.log(someMasslessThan);