var spaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};

var zeus = new spaceShuttle("Jupiter");

console.log(zeus.targetPlanet);

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var mars = new SpaceShuttle("Mars");

console.log(mars.targetPlanet);

function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const potato = new Vegetable("potato");
console.log(potato.name);
