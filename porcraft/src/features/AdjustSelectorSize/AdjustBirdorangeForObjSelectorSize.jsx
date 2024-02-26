const adjustBirdorangeForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, -0.9, 0];

  if (window.innerWidth < 150) {
    screenScale = [0.2, 0.2, 0.2];
  } else {
    screenScale = [0.2, 0.2, 0.2];
  }
  return [screenScale, screenPosition];
};

export default adjustBirdorangeForObjSelectorSize;