class Car {
  constructor(
    //parmaters:
    name,
    color,
    year,
    model,
    interior,
    tires,
    hitch,
    wiperStatus
  ) {
    //Define Properties:
    this.name = name;
    this.color = color;
    this.year = year;
    this.model = model;
    this.interior = interior;
    this.tires = tires;
    this.hitch = hitch;
    this.wiperStatus = wiperStatus;
  }
  // Add methods as functions:
  toggleWipers(wiperStatus) {
    this.wiperStatus = wiperStatus;
  }
}

export default Car;
