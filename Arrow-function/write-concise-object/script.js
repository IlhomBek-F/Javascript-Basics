const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

console.log(createPerson("Luisa", 23, "female"));
/* result 
{name: "Luisa", age: 23, gender: "female"}


*/

const againPerson = (name, age, gender) => ({ name, age, gender });
console.log(againPerson("John", 24, "male"));
/* result 
{name: "John", age: 24, gender: "male"}


*/
