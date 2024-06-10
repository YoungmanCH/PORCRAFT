const adjustAlienPlanetForScreenSize = () => {
  let screenPosition = [0, 2, 0];
  let screenRotation = [0, 3, 0];
  let screenScale = null;

  if (window.innerWidth < 768) {
    screenScale = [60, 60, 60];
  } else {
    screenScale = [60, 60, 60];
  }
  return [screenPosition, screenRotation, screenScale];
};

export default adjustAlienPlanetForScreenSize;
