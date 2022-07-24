class Shoe {
  constructor(name, color, paired, position, lacesTied) {
    this.name = name;
    this.color = color;
    this.paired = paired;
    this.position = position;
    this.lacesTied = lacesTied;
  }
  toggleLaces(lacesStatus) {
    this.LacesStatus = lacesStatus;
  }
}

export default Shoe;
