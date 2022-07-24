class Dog {
  constructor(name, breed, color, isWet) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.isWet = isWet;
  }
  toggleWet(wetStatus) {
    this.isWet = wetStatus;
    wetStatus = true;
    wetStatus = !wetStatus;
  }
}

export default Dog;
