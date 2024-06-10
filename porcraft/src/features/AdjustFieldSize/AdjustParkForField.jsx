const adjustParkForFieldSize = () => {
    let screenScale = null;
    let screenPosition = [0, -10, 0];
  
    if (window.innerWidth < 150) {
      screenScale = [0.01, 0.01, 0.01];
    } else {
      screenScale = [0.015, 0.015, 0.015];
    }
    return [screenScale, screenPosition];
  };
  
  export default adjustParkForFieldSize;