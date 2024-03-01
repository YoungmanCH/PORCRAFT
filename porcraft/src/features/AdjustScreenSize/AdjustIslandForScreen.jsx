const adjustIslandForScreenSize = () => {
  let screenPosition = [0, -1.2, 0];
  let screenRotation = [0, 3, 0];
  let screenScale = null;

  if (window.innerWidth < 768) {
    screenScale = [0.15, 0.15, 0.15];
  } else {
    screenScale = [0.125, 0.125, 0.125];
  }
  return [screenPosition, screenRotation, screenScale];
};

export default adjustIslandForScreenSize;
