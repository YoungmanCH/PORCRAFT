const adjustHouseForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [0.35, 0.35, 0.35];
  } else {
    screenScale = [0.35, 0.35, 0.35];
  }
  return [screenScale, screenPosition];
};

export default adjustHouseForObjSelectorSize;