var contacts = [
  {
    firstname: "Akira",
    lastname: "Laine",
    number: "04834023",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstname: "Harry",
    lastname: "Potter",
    number: "3239320332",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstname: "Sherlock",
    lastname: "holmes",
    number: "930232032",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstname: "Kristian",
    lastname: "Vos",
    number: "unknown",
    likes: ["Javascript", "gaming", "Foxes"],
  },
];

function lookUp(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstname === name) {
      return contacts[i][prop] || "no such property";
    }
  }

  return "No such contact";
}

var data = lookUp("Harry", "lastname");
console.log(data); // result ---> Potter
