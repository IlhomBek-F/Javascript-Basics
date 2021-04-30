var voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6

var y = voxel.y; // y = 7.4

var z = voxel.z; // z = 6.54

const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, z = 6.54

const AVG_TEMPERATURES = {
  today: 77.4,
  tomorrow: 78,
};

function getTemp(avg_Temperature) {
  const { today: tempTomorrow } = avg_Temperature;

  return tempTomorrow;
}

console.log(getTemp(AVG_TEMPERATURES)); // result --> 77.4
