const person = {
  name: "Zodgoh",
  age: 45,
};

const greeting = `Hello my name is ${person.name} I am ${person.age} years old`;

const result = {
  success: ["max-length", "no-mad", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-du[-keys"],
};

function makeList(arr) {
  const resultDisplay = [];

  for (let i = 0; i < arr.length; i++) {
    resultDisplay.push(`<li>${arr[i]}</li>`);
  }

  return resultDisplay;
}
const resultDisplay = makeList(result.failure);
console.log(resultDisplay);
/* result 
  <li>no var</li>
  <li>var-on-top</li>
  <li>linebreak</li>
  */
