// Exercise 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const displayFavoriteFoods = (person) => {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            console.log(`${key}: ${person[key].join(", ")}`);
        } else if (typeof person[key] === 'object') {
            const shakesObj = person[key][0];
            const shakesArr = Object.values(shakesObj);
            console.log(`${key}: ${shakesArr.join(", ")}`);
        } else {
            console.log(`${key}: ${person[key]}`);
        }
    }
}

displayFavoriteFoods(person3);

// Exercise 2
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    this.addAge = () => {
        this.age++;
    };
}

const person1 = new Person('John', 30);
const person2 = new Person('Alice', 25);

person1.printInfo();
person2.printInfo();

person1.addAge(); 
person2.addAge(); 
person2.addAge(); 
person2.addAge();

person1.printInfo();
person2.printInfo();




// exercise 3

const checkStringLength = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("Hello World")
    .then(result => console.log(result))
    .catch(error => console.log(error));


https://www.codewars.com/kata/reviews/53ee542f536dc10f64000110/groups/53ee5b64786c69592900002a


https://www.codewars.com/kata/reviews/523b4ff7adca849afe000038/groups/523b4ff7adca849afe000037