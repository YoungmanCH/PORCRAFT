const adjustBirdOrangeForScreenSize = () => {
  let screenScale = null;
  if (window.innerWidth < 768) {
    screenScale = [0.2, 0.2, 0.2];
  } else {
    screenScale = [0.2, 0.2, 0.2];
  }
  return [screenScale];
};

export default adjustBirdOrangeForScreenSize;