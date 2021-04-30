var sum = 0;

function addThree() {
  sum = sum + 3;
}

console.log(addThree()); // result ---> undefined

function addFive() {
  sum += 5;
}

console.log(addFive()); // result ---> undefined
