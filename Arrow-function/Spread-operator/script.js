const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "tomato";
})();

console.log(arr2);
