var myGlobal = 10;

function func1() {
  ooopsGlobal = 5;
}

function func2() {
  var output = "";

  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }

  if (typeof ooopsGlobal != "undefined") {
    output += " ooopsGlobal: " + ooopsGlobal;
  }

  console.log(output); /// result ---> myGlobal 10 ooopsGlobal 5
}

func1();
func2();
