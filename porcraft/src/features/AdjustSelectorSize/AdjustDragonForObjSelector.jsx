const adjustDragonForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [0.015, 0.015, 0.015];
  } else {
    screenScale = [0.015, 0.015, 0.015];
  }
  return [screenScale, screenPosition];
};

export default adjustDragonForObjSelectorSize;