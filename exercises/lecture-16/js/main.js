("use strict");
// Завдання 1
let message1 = "Hello";
let message2 = "JavaScript";
const combinedMessage = message1 + " " + message2 + "!";
alert(combinedMessage);
// Завдання 2
("use strict");
let message = "hello";
message = 123456;
console.log(message);
// Завдання 3
let number1 = prompt("Введіть значення 1:", "");
let number2 = prompt("Введіть значення 2:", "");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

if (isNaN(number1) || isNaN(number2)) {
  alert("Будь ласка, введіть числові значення для 1 та 2.");
} else {
  const sum = number1 + number2;
  alert(`Сума ${number1} і ${number2} дорівнює: ${sum}`);
}
// Завдання 4
// let a = 9007199254740991;
// let b = 9007199254740991n;
// let result = BigInt(a) + b;
// console.log(result);
// Завдання 5
let apples = "2";
let oranges = "3";
let results = Number(apples) + Number(oranges);
alert(results);
// Завдання 6
// let a = 1; // 2
// b = 1; // 2
// let c = ++a; // 2
// let d = b++; // 1
// Завдання 7
let a = 2; // 4
let x = 1 + (a *= 2); // 5
// Завдання 8
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + (4 + 5)); // "$9"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(NaN + 1); // NaN
// Завдання 9
let n = 2;
n += 5; // Замінює n = n + 5;
n *= 2; // Замінює n = n * 2;
// Завдання 10
let n1 = "   123   ";
let n2 = "123z";
let n3 = true;
let n4 = false;

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = Number(n3);
n4 = Number(n4);

console.log(n1, n2, n3, n4);
