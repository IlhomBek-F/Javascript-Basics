function chainToSwicth(val) {
  var answer = "";

  /*
  if (val === "bob") {
     answer = "Marley";
   } else if (val === 42) {
     answer = "The answer";
   } else if (val === 1) {
     answer = "There is no #1";
   } else if (val === 99) {
     answer = "Missed me by this much";
  } else if (val === 7) {
     answer = "Ate Nine";
   }
*/

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much";
      break;
    case 7:
      answer = "Ate nine";
      break;
  }

  return answer;
}

console.log(chainToSwicth("bob")); // result --> "Marley"
console.log(chainToSwicth(42)); // result --> "The anwser"
console.log(chainToSwicth(1)); // result --> "There is no #1"
