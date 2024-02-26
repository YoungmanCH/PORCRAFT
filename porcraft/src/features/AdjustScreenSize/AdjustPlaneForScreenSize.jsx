const adjustPlaneForScreenSize = () => {
  let screenScale = null;
  if (window.innerWidth < 768) {
    screenScale = [0.001, 0.001, 0.001];
  } else {
    screenScale = [0.001, 0.001, 0.001];
  }
  return [screenScale];
};

export default adjustPlaneForScreenSize;
