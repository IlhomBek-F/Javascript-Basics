function freeseObj() {
  "use strict";

  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 89;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freeseObj();

console.log(PI);
