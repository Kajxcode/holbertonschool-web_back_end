export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error("Cannot instantiate an abstract class");
    }

    if (typeof sqft !== "number") {
      throw new TypeError("sqft must be a number");
    }
    this._sqft = sqft;

    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Subclasses must implement evacuationWarningMessage()");
  }
}

class School extends Building {
  constructor(sqft) {
    super(sqft);
  }

  evacuationWarningMessage() {
    return `Attention! Evacuate the building immediately!`;
  }
}

const mySchool = new School(5000);
console.log(mySchool.sqft);                       // 5000
console.log(mySchool.evacuationWarningMessage()); // "Attention! Evacuate the building immediately!"

