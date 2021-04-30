var myStorage = {
  car: {
    inside: {
      glove_box: "maps",
      passenger_seat: "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside["glove_box"];

console.log(gloveBoxContents); // result --> maps
