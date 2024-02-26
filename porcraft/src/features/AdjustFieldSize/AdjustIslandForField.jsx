const adjustIslandForFieldSize = () => {
    let screenScale = null;
    let screenPosition = [0, -0.9, 0];
  
    if (window.innerWidth < 150) {
      screenScale = [0.1, 0.1, 0.1];
    } else {
      screenScale = [0.12, 0.12, 0.12];
    }
    return [screenScale, screenPosition];
  };
  
  export default adjustIslandForFieldSize;