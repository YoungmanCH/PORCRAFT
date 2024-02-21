const adjustIslandForScreenSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 768) {
    screenScale = [0.15, 0.15, 0.15];
  } else {
    screenScale = [0.125, 0.125, 0.125];
  }
  return [screenScale, screenPosition];
};

export default adjustIslandForScreenSize;
