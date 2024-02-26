const adjustParkForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, 0];
    let screenRotation = [0, 3, 0];
  
    if (window.innerWidth < 768) {
      screenScale = [0.0015, 0.0015, 0.0015];
    } else {
      screenScale = [0.0015, 0.0015, 0.0015];
    }
    return [screenScale, screenPosition, screenRotation];
  };
  
  export default adjustParkForScreenSize;
  