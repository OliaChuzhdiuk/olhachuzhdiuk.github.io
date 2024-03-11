// Завдання 3
const magicNumber = 3;
let enteredNumber = prompt("Try to guess the number (enter an integer):");
if (enteredNumber === null || isNaN(enteredNumber)) {
  alert("Invalid value entered. Please reload the page and enter an integer.");
} else {
  if (parseInt(enteredNumber) === magicNumber) {
    alert("Congratulations, You did it!");
  } else if (parseInt(enteredNumber) > magicNumber) {
    alert("The number is too long. Try again.");
  } else {
    alert("The number is short. Try again.");
  }
}

// Завдання 4

// if/else
let enterDay = prompt("Enter the name of the day of the week:");
enterDay = enterDay.toLowerCase();

if (enterDay === "monday" || enterDay === "понеділок") {
  alert("Start of the work week!");
} else if (enterDay === "friday" || enterDay === "п'ятниця") {
  alert("End of the work week!");
} else {
  alert("A regular day");
}

// Switch
// let enterDay = prompt("Enter the name of the day of the week:");
// enterDay = enterDay.toLowerCase();

// switch (enterDay) {
//   case "monday":
//   case "понеділок":
//     alert("Start of the work week!");
//     break;
//   case "friday":
//   case "п'ятниця":
//     alert("End of the work week!");
//     break;
//   default:
//     alert("A regular day");
//     break;
// }

// Завдання 5

// if/else
// let score = prompt("Enter the points:");
// score = parseInt(score);
// let grade;

// if (score < 50) {
//   grade = "F";
// } else if (score < 70) {
//   grade = "D";
// } else if (score < 80) {
//   grade = "C";
// } else if (score < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }
// alert("The student received a grade: " + grade);

// Тернарний оператор
let score = prompt("Enter the points:");
score = parseInt(score);

let grade =
  score < 50
    ? "F"
    : score < 70
    ? "D"
    : score < 80
    ? "C"
    : score < 90
    ? "B"
    : "A";
alert("The student received a grade: " + grade);

// Завдання 6
let firstName = null;
let lastName = undefined;
let username = firstName || lastName || "Guest";

console.log(username); // "Guest"
