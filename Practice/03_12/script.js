/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Book from "./Book.js";

const Carrie = new Book("Carrie", "Stephen King", "Horror", false, 290);
console.log(Carrie);
Carrie.pageCount();

const JavaScriptForKids = new Book(
  "JavaScript For Kids",
  "Nick Morgan",
  "nonfiction-web development",
  false,
  307
);
console.log(JavaScriptForKids);
JavaScriptForKids.pageCount();

const It = new Book("It", "Stephen King", "horror", false, 1142);
console.log(It);
It.pageCount();

const ShadowHand = new Book(
  "Babysitting Nightmares: The Shadow Hand",
  "Kat Shepherd",
  "Juv Horror",
  false,
  208
);

console.log(ShadowHand);
ShadowHand.pageCount();

const Pricking = new Book(
  "By the Pricking of My Thumbs",
  "Agatha Christie",
  "Mystery",
  false,
  212
);
console.log(Pricking);
Pricking.pageCount();

// Keep track of how many books
const bookList = Book.length;
console.log("There are " + bookList + " book objects");

// import Dog from "./Dog.js";

// const Bowie = new Dog("Bowie", "Mini Schnauzer", "Liver Parti", true);

// console.log(Bowie);
// Bowie.toggleWet();

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
