class Vehicle {
    constructor(Honda, Accord, 2004) {
      this.make = Honda;
      this.model = Accord;
      this.year = 2004;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }

  
  class Car extends Vehicle {
    constructor(Honda, Accord, 2004) {
      super(Honda, Accord, 2004);
      this.numWheels = 4;
    }
  }
  
  
  class Motorcycle extends Vehicle {
    constructor(Honda, Accord, 2004) {
      super(Honda, Accord, 2004);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }