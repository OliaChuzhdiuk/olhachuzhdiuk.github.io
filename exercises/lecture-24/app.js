// Масив кольорів складається з 3 елементів.
const colors = ["blue", "green", "white"];

// Завдання 1
function iter(item) {
  console.log(item);
}
colors.forEach(iter);

// Завдання 2
function iterate(item, index) {
  if (index === colors.length - 1) {
    console.log("The last iteration!");
  } else {
    console.log(`${item} has index ${index}.`);
  }
}
colors.forEach(iterate);

// Завдання 3
const letters = ["a", "b", "c"];
function iterate2(letter) {
  if (this === window) {
    console.log(true);
  }
}
letters.forEach(iterate2);

// Завдання 4
const Numbers = [22, 3, 4, 10];
let allEven = true;
Numbers.forEach(function (number) {
  if (number % 2 === 1) {
    allEven = false;
  }
});
console.log(allEven);

// Завдання 5
const numbers = [22, 3, 4, 10];
const evenNumber = numbers.every(function (number) {
  return number % 2 === 0;
});
console.log(evenNumber);

// Завдання 6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log(index);

// Завдання 7
const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find((el) => el > 10);
console.log(found);

// Завдання 8
const array = [1, 2, 3, 4, 5];
const even = array.some((el) => el % 2 === 0);
console.log(even);

// Завдання 9
const numbers9 = [1, 30, 4, 21, 100000];
const sortNumber = numbers9.sort((a, b) => a - b);
console.log(sortNumber);
