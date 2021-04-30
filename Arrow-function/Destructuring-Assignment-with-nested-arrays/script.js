const LOCAL_FORCAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 71, max: 85 },
};

function getMaxTemp(forcast) {
  const {
    tomorrow: { max: tempMax },
  } = forcast;

  return tempMax;
}

console.log(getMaxTemp(LOCAL_FORCAST)); // result --> 85
