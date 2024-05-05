const adjustKingForScreenSize = () => {
  let screenScale = null;
  if (window.innerWidth < 768) {
    screenScale = [3, 3, 3];
  } else {
    screenScale = [3, 3, 3];
  }
  return [screenScale];
};

export default adjustKingForScreenSize;
