const adjustBirdOrangeForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [2, 2, 2];
  } else {
    screenScale = [2, 2, 2];
  }
  return [screenScale, screenPosition];
};

export default adjustBirdOrangeForObjSelectorSize;
