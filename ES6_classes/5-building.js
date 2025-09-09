export default class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error("cannot instantiate an abstract class")
        }
        this._sqft = sqft;
    }
    evacuationWarningMessage() {
        throw new Error ("Subclasses must implement evacuationWarningMessage()");
    }
}