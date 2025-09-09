export default class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error("cannot instantiate an abstract class")
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft
    }
    set sqft(value) {
        if (new.target === Building) {
            throw new Error("cannot instantiate an abstract class")
        }
        this._sqft = value;
    }
    evacuationWarningMessage() {
        throw new Error ("Subclasses must implement evacuationWarningMessage()");
    }
}
