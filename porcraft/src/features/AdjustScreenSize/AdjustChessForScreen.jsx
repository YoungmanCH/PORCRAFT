const adjustChessForScreenSize = () => {
  let screenPosition = [0, -1.4, 0];
  let screenRotation = [0, 3, 0];
  let screenScale = null;

  if (window.innerWidth < 768) {
    screenScale = [20, 20, 20];
  } else {
    screenScale = [20, 20, 20];
  }
  return [screenPosition, screenRotation, screenScale];
};

export default adjustChessForScreenSize;
