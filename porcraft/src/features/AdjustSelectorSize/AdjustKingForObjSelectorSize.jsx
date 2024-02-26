const adjustKingForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [30, 30, 30];
  } else {
    screenScale = [30, 30, 30];
  }
  return [screenScale, screenPosition];
};

export default adjustKingForObjSelectorSize;