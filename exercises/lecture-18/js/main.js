// Завдання 1
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}
// Різниці не має, але функція буде працювати але трішки  інакше. Після видалення else у випадку, коли вік не перевищує 18, вона просто перейде до виконання рядка, який слідує за умовою (поверненням результату від confirm). Це еквівалентно попередньому варіанту з else, але з коротшим кодом.

// Завдання 2.1
function checkAge(age) {
  age > 18 ? true : confirm("Did parents allow you?");
}
// Завдання 2.2
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
// Завдання 3
// Ні, дужки навколо age > 18 необов'язкові у цьому випадку. В даному випадку вони не мають впливу на результат, тому їх можна опустити без будь-яких наслідків для функції.

// Завдання 4.1
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Завдання 4.2
function min(a, b) {
  return a < b ? a : b;
}

// Завдання 5
function pow(x, n) {
  if (n < 1 || !Number.isInteger(n)) {
    return "Параметр n має бути цілим натуральним числом більше або дорівнює 1";
  }

  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = parseFloat(prompt("Введіть x:"));
let n = parseInt(
  prompt("Введіть n (натуральне ціле число більше або дорівнює 1):")
);

console.log(pow(x, n));

// Завдання 6

let ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

// Завдання 7
let askFunc = function (question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

// Завдання 8
function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return "foo";
}
// Завдання 8.1
A() || console.log(C());
// Завдання 8.2
B() || console.log(C());
