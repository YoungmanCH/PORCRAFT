const adjustKingForScreenSize = () => {
  let screenScale = null;
  if (window.innerWidth < 768) {
    screenScale = [30, 30, 30];
  } else {
    screenScale = [30, 30, 30];
  }
  return [screenScale];
};

export default adjustKingForScreenSize;
