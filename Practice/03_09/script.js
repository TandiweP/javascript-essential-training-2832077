/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

// const backpack = {
//   name: "Everyday Backpack",
//   volume: 30,
//   color: "grey",
//   pocketNum: 15,
//   strapLength: {
//     left: 26,
//     right: 26,
//   },
//   toggleLid: function (lidStatus) {
//     this.lidOpen = lidStatus;
//   },
//   newStrapLength: function (lengthLeft, lengthRight) {
//     this.strapLength.left = lengthLeft;
//     this.strapLength.right = lengthRight;
//   },
// };

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  ripPockets: function (empty) {
    this.pocketNum = empty;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log(backpack);

console.log(backpack.name);
backpack.changeName("oldy");
console.log(backpack.name);

console.log(backpack.volume);
backpack.changeVolume(6);
console.log(backpack.volume);

console.log(backpack.color);
backpack.changeColor("Yellow");
console.log(backpack.color);

console.log(backpack.pocketNum);
backpack.ripPockets(0);
console.log(backpack.pocketNum);

console.log(backpack);
