let person = {
  firstName: "Chandler",
  lastName: "Bong",
  age: 34,
};

let fName = "firstName";

console.log(person.firstName);
console.log("Bracket Notation: ", person["firstName"]);
console.log("Bracket Notation: ", person[fName]);

let meal = {
  appetizer: "Chips & Salsa",
  entree: "Al Pastor Burrito",
  dessert: ["Churos", "lava Cake"],
  drink: "Coke",
};

//let { dessert } = meal;

let { dessert: faveDessert, entree, drink } = meal;

// console.log(faveDessert);
// console.log(entree);
// console.log(drink);

person.job = "Engineer";

person["pets"] = ["dog", "dragon"];

for (let attribute in person) {
  console.log(`This is the key: ${attribute}`);
}

for (let attribute in person) {
  console.log(`This is the value: ${person[attribute]}`);
}

let teams = {
  teamOne: ["ryan", "alex", "wyatt", "tj"],
  teamTwo: ["henry", "cole", "charlie", "zeke"],
  teamThree: ["porter", "blake", "june", "owen"],
  teamFour: ["brian", "riley", "ezra", "jordan"],
  teamFive: ["grey", "milo", "mckay", "leo"],
};
//console.log(teams);
delete teams.teamFour;
//console.log(teams);

//Classes

class Car {
  constructor(make, model, color) {
    (this.make = make),
      (this.model = model),
      (this.color = color),
      (this.miles = 0);
  }
  drive(miles) {
    this.miles += miles;
    console.log(
      `${this.make} increased miles by ${miles}, current miles: ${this.miles}`
    );
  }
}

let myCar = new Car("Tesla", "Model Y", "black");
let yourCar = new Car("Toyota", "Highlander", "blue");

console.log(myCar.make);
console.log(myCar["make"]);

myCar.drive(30);
yourCar.drive(45);
myCar.drive(10);

class Truck extends Car {
  constructor(make, model, color, payload) {
    super(make, model, color); //all properties from the Parent class

    this.payload = payload;
  }
  tow(weight) {
    if (weight > this.payload) {
      console.log("Max payload exceeded");
    } else {
      console.log("Towing successful");
    }
  }
}

let truck = new Truck("Ford", "F450", "black", 100);

console.log(truck);
truck.drive(15);
truck.tow(99);
truck.tow(101);
