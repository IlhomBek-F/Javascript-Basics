const bicylce = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};

bicylce.setGear(4);
console.log(bicylce.gear); // result 4
