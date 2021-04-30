var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10); // result --> 3 change = 3

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(17);

console.log(processed); // result --> 4 processed = 4
