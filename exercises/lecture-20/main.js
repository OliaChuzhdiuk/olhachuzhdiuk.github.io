// Завдання 1
let person = {
    name: "Olha", 
    age: 33  
};
console.log("Name:", person.name);
console.log("Age:", person.age);

// Завдання 2
let person1 = {
    name: {
        firstName: "Olha",
        lastName: "Chuzhdiuk"
    },
    age: 33
};
console.log("First Name:", person1.name.firstName);
console.log("Last Name:", person1.name.lastName);
console.log("Age:", person1.age);

// Завдання 3
let person2 = {
    name: {
        firstName: "Olha",
        lastName: "Chuzhdiuk"
    },
    age: 33,
    bio: function() {
        console.log("First Name:", this.name.firstName);
        console.log("Last Name:", this.name.lastName);
        console.log("Age:", this.age);
    }
};
person2.bio();

// Завдання 4
let person3 = {
    name: {
        firstName: "Olha",
        lastName: "Chuzhdiuk"
    },
    age: 33,
    introduceSelf: function() {
        console.log("Hi! I'm", this.name.firstName);
    }
};
person3.introduceSelf();

// Завдання 5
function createPerson(name) {
    return {
        name: name,
        introduceSelf: function() {
            console.log("Hi! I'm", this.name);
        }
    };
}
let name1 = createPerson("Olha");
let name2 = createPerson("Daryna");

name1.introduceSelf(); 
name2.introduceSelf(); 

// Завдання 6 
function Person(name) {
    this.name = name;
    this.introduceSelf = function() {
        console.log("Hi! I'm", this.name);
    };
}
let mary = new Person("Mary");
let tom = new Person("Tom");
mary.introduceSelf();
tom.introduceSelf();
console.log(mary.hasOwnProperty("prop")); // false

// Завдання 7
let DirtyMartini = {
    english_please: function() {
        console.log(`ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml)
        1 fluid ounce brine from olive jar
        4 stuffed green olives`);
    },
    excuse_my_french: function() {
        console.log(`ingrédients:
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml)
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`);
    }
};
DirtyMartini.english_please();
DirtyMartini.excuse_my_french();

