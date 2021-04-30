var ourArray = ["Stimpson", "J", "cat"];

ourArray.shift(); // ---> ["", "J", "cat"]
ourArray.unshift("Hello"); // --> ["Hello", "J", "cat"]

console.log(ourArray); // result --> ["Hello", "J", "cat"];

var myArray = [
  ["Steve Jobs", "Apple"],
  ["Bill Gates", "Microsoft"],
];

myArray.unshift(["Elon Mask", "Tesla", "SpaceX"]);

console.log(myArray); // result ---> [["Elon Mask", "Tesla", "SpaceX"],["Steve Jobs", "Apple"],["Bill Gates", "Microsoft"]];
