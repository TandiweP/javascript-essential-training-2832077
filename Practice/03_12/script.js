/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Dog from "./Dog.js";

const Bowie = new Dog("Bowie", "Mini Schnauzer", "Liver Parti", true);

console.log(Bowie);
Bowie.toggleWet();

// import Car from "./Car.js";
// import Shoe from "./Shoe.js";

// const myJeep = new Car(
//   "My Jeep",
//   "red and white",
//   "1992",
//   "Wrangler YJ",
//   "small interior",
//   4,
//   true,
//   "On"
// );

// var str = JSON.stringify(myJeep);

// document.getElementById("heading").innerHTML = str;
// console.log(myJeep);

// const
// document.getElementById("ul-1").innerHTML = this.color;

// const myCar = new Car("blue", "2018", "CR-V", "gray", 4, false, "on");

// console.log("myCar object: ", myCar);

// const momsCar = new Car("red", "2012", "Jetta", "black", 4, false, "off");

// console.log("Mom's Car obj: ", momsCar);

// const runningShoes = new Shoe(
//   "New Running Shoes",
//   "blues, white, tangerine",
//   true,
//   "left",
//   true
// );

// console.log("runningShoes: ", runningShoes);
// runningShoes.toggleLaces(false);
// console.log("runningShoes: ", runningShoes);
// runningShoes.toggleLaces(true);
