const AdjustPersonForObjSelectorSize = () => {
  let screenScale = null;
  let screenPosition = [0, 0, 0];

  if (window.innerWidth < 150) {
    screenScale = [1, 1, 1];
  } else {
    screenScale = [1, 1, 1];
  }
  return [screenScale, screenPosition];
}

export default AdjustPersonForObjSelectorSize