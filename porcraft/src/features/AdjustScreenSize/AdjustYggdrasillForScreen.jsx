const adjustYggdrasillForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -13, -22];
    let screenRotation = [0.1, 0, 0];
  
    if (window.innerWidth < 786) {
      screenScale = [15, 15, 15];
    } else {
      screenScale = [15, 15, 15];
    }
    return [screenScale, screenPosition,screenRotation];
  };
  
  export default adjustYggdrasillForScreenSize;