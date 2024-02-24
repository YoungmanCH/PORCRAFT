const adjustHouseForScreenSize = () => {
  let screenScale = null;
  if (window.innerWidth < 768) {
    screenScale = [0.05, 0.05, 0.05];
  } else {
    screenScale = [0.05, 0.05, 0.05];
  }
  return [screenScale];
};

export default adjustHouseForScreenSize;
