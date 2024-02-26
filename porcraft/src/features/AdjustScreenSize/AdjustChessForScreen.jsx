const adjustChessForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1.4, 0];
    let screenRotation = [0, 3, 0];
  
    if (window.innerWidth < 768) {
      screenScale = [20, 20, 20];
    } else {
      screenScale = [20, 20, 20];
    }
    return [screenScale, screenPosition, screenRotation];
  };
  
  export default adjustChessForScreenSize;
  