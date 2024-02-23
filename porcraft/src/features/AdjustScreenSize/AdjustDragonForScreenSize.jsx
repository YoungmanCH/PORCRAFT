const AdjustDragonForScreenSize = () => {
  let screenScale = null;
  if (window.innerWidth < 768) {
    screenScale = [0.003, 0.003, 0.003];
  } else {
    screenScale = [0.003, 0.003, 0.003];
  }
  return [screenScale];
};

export default AdjustDragonForScreenSize