// Завдання 1
let str1 = 'I\'m a string!'; // 13
let str2 = "I'm a string!"; // 13

let length = str1.length === str2.length; // true
let loose = str1 == str2;// true
let strict = str1 === str2;// true
// Результати вказують на те, що обидва рядки мають однакову довжину, а їхні значення тотожні, що підтверджується строгим порівнянням.

// Завдання 2
let string5 = 'Hello World';
let firstLetter = string5[0];
let firstLetter1 = string5.charAt(0); 


// Завдання 3
let str3 = "Hello Javascript";
let letter = str3.charAt(6);
let letter1 = str3[6];


// Завдання 4
let letterLast = str3[str3.length -1];
let letterLast1= str3.charAt(str3.length - 1);

// Завдання 5
function lastChar (str3) {
    return str3.charAt(str3.length - 1)
}

function lastChar1(str3) {
    return str3[str3.length -1]  
}

function lastChar2(str3){
    return str3.slice(-1);

}
console.log(lastChar(str3));
console.log(lastChar1(str3));
console.log(lastChar2(str3));

// Завдання 6
// let a = 'When candles are out, ';
// let b = 'all cats are grey.';
// let string = a.concat(b);
// console.log(string);

// Завдання 7
let fact = "Fifteen is the same as";
let a = 5;
let b = 10;
let stringFact = "Fifteen is the same as " + (a + b);
console.log(stringFact);

// Завдання 8
let firstName = "Tom";
let lastName = "Cat";

function  getFullName (a, b) {
    let allName = a + " " + b;
    return allName;
}
console.log(getFullName(firstName, lastName));

// Завдання 9
function greeting(firstName, lastName) {
    let fullName = getFullName(firstName, lastName);
    return "Hello, " + fullName + "!";
}
console.log(greeting(firstName, lastName))

// Завдання 10
let template = "<div><h1>" + greeting(firstName, lastName) + "</h1></div>";
console.log(template); 

// Завдання 11
let string1 = "  The name of our game  ";
console.log(string1.trim()); // "The name of our game"
console.log(string1.trimStart()); // "The name of our game  "
console.log(string1.trimEnd()); // "  The name of our game"

const phoneNumber = '\t  555-123\n ';
console.log(phoneNumber.trim()); // => '555-123'
console.log(phoneNumber.trimStart()); // => '555-123 \n'

// Завдання 12
let sentence = 'Always look on the bright side of life';
console.log(sentence.includes('look up')); //false
console.log(sentence.includes('look on')); //true
console.log(sentence.includes('look on', 8)); //false
// Завдання 13
console.log(sentence.indexOf('l')); //1
console.log(sentence.indexOf('l', 3)); //7
console.log(sentence.indexOf('L')); //-1

// Завдання 14
console.log(sentence.substring(7)); // look on the bright side of life
console.log(sentence.substring(0, 6)); // Always
console.log(sentence.substring(7, 11)); // look

// Завдання 15
let usernameRegex = /^[a-z0-9_-]{8,16}$/;
let username1 = "user1234";
let username2 = "user_name-1234";
let username3 = "user";
console.log(usernameRegex.test(username1)); // true
console.log(usernameRegex.test(username2)); // true
console.log(usernameRegex.test(username3)); // false

// Завдання 16
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
let email1 = "user@example.com";
let email2 = "invalid_email.com";
console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false

// Завдання 17
let sentence17 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
function truncateText (letter){
    if(letter.length > 50){
          return sentence17.substring(0, 50) + "..."
    }
}
console.log(truncateText(sentence17));

function truncateTextSubstr(text) {
    if (text.length > 50) {
        return text.substr(0, 50) + '...';
    }
}
console.log(truncateTextSubstr(sentence17));
