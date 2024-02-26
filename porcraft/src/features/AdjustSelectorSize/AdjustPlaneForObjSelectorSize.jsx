const adjustPlaneForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [0.001, 0.001, 0.001];
  } else {
    screenScale = [0.001, 0.001, 0.001];
  }
  return [screenScale, screenPosition];
};

export default adjustPlaneForObjSelectorSize;