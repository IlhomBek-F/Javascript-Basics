function myLocalScope() {
  var myVar = 5;
}

myLocalScope();

console.log(myVar); // result ---> Uncaught ReferenceError: myVar is not defined
