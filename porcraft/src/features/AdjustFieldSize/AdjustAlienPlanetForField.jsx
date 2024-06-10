const adjustAlienPlanetForFieldSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [80, 80, 80];
  } else {
    screenScale = [80, 80, 80];
  }
  return [screenScale, screenPosition];
};

export default adjustAlienPlanetForFieldSize;
