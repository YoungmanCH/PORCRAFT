const adjustQueenForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [0.3, 0.3, 0.3];
  } else {
    screenScale = [0.3, 0.3, 0.3];
  }
  return [screenScale, screenPosition];
};

export default adjustQueenForObjSelectorSize;