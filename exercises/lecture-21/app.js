const fruits = "apple banana cantaloupe blueberries grapefruit";
// Завдання 1
const arr = fruits.split(" ");
const arr1 = new Array(fruits);
console.log(arr);
console.log(arr1);

// Завдання 2

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]);
}

// Завдання 3
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i += 1;
}

// Завдання 4
let y = 0;
do {
  console.log(arr[y]);
  y += 1;
} while (y < arr.length);

// Завдання 5
for (const fruits of arr) {
  console.log(fruits);
}

// Завдання 6
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < Numbs.length; i += 1) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}
// Завдання 7
const names = ["Batman"];
names.push("Joker");
console.log(names);

// Завдання 8
const namesEightTask = ["Batman"];
namesEightTask.unshift("Joker");
console.log(namesEightTask);

// Завдання 9
const namesNineTask = ["Batman", "Joker", "Bane"];
namesNineTask.unshift("Catwoman");
console.log(namesNineTask);

// Завдання 10
const namesTenTask = ["Batman", "Joker", "Bane"];
const newNames = ["Catwoman", ...namesTenTask];
console.log(newNames);

// Завдання 11
const namesElevenTask = ["Batman", "Joker", "Bane"];
namesElevenTask.splice(1, 0, "Catwoman");
console.log(namesElevenTask);

// Завдання 12
const namesTwelveTask = ["Batman", "Catwoman", "Joker", "Bane"];
namesTwelveTask.splice(1, 2);
console.log(namesTwelveTask);

// Завдання 13
const namesThirteenTask = ["Batman", "Catwoman", "Joker", "Bane"];
namesThirteenTask.splice(1, 2, "Alfred");
console.log(namesThirteenTask);

// Завдання 14
const namesFourteenTask = ["Batman", "Catwoman", "Joker", "Bane"];
if (!namesFourteenTask.includes("Alfred")) {
  namesFourteenTask.push("Alfred");
}
console.log(namesFourteenTask);

// Завдання 15
const namesFifteenTask = ["Batman", "Catwoman", "Joker", "Bane"];
const index = namesFifteenTask.indexOf("Alfred");
if (index !== -1) {
  namesFifteenTask.splice(index, 1);
}
console.log(namesFifteenTask);
