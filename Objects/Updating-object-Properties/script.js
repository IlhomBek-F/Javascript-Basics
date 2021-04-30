var myDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friend: ["everything"],
};

var changeName = (myDog.name = "Happy Campers");

console.log(myDog); // result --> var myDog = {name: "Happy Campers",legs: 4,tails: 1,friend: ["everything"],};

var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["Campers"],
};

myDog.name = "Happy Coder";

console.log(myDog); // result --> var myDog = {name: "Happy Coder",legs: 4,tails: 1,friend: ["Campers"],};
