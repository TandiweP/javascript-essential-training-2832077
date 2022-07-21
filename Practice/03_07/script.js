/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const truck = {
  name: "#2",
  color: "red",
  hasBed: true,
  capacity: {
    threeByFours: 63,
    fourByFours: 42,
  },
  isLoaded: false,
  toggleLoaded: function (loadStatus) {
    this.isLoaded = loadStatus;
  },
  newCapacity: function (threeByFours, fourByFours) {
    this.capacity.threeByFours = threeByFours;
    this.capacity.fourByFours = fourByFours;
  },
};

console.log("The truck object:", truck);

const bag = {
  color: "black",
  make: "adidas",
  pocketNum: 3,
  contents: {
    wallet: {
      width: ".5 inch",
      cards: "six",
      cash: "$10",
    },
  },
};

console.log("The bag object:", bag);

console.log(bag.contents);
console.log(bag.contents.wallet.cards);

const desk = {
  shelves: 2,
  monitors: {
    envy: {
      hasStand: false,
      isOn: true,
      position: "left",
    },
    hp24in: {
      hasStand: true,
      isOn: true,
      position: "right",
    },
  },
  keyboard: {
    color: "black",
    operable: true,
    sound: "clack-clack",
  },
};

console.log("The desk object:", desk);
console.log(desk.monitors.hp24in.isOn);

const myCar = {
  color: "blue",
  year: "2018",
  model: "CR-V",
  interior: {
    seats: 5,
    color: "black",
    cupHolders: 2,
    headrests: {
      headrestCount: 4,
      comfortLevel: "2/10",
      adjustable: false,
    },
    cleanliness: "6/10",
  },
  tires: 4,
  wipers: true,
  hitch: false,
};

console.log("The mycar object: ", myCar);
console.log(myCar.year);
let headmess = myCar.interior.headrests;
headmess.comfortLevel = "0/10";

console.log(myCar.interior.headrests.comfortLevel);
console.log("headmess object: ", headmess);
