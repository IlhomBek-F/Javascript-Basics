class Book {
  constructor(author) {
    this.author = author;
  }

  // getter
  get writer() {
    return this.author;
  }

  // setter
  set writer(updateAuthor) {
    this.author = updateAuthor;
  }
}

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updateTemp) {
      this._temp = updateTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 27;
temp = thermos.temperature;

console.log(temp);
