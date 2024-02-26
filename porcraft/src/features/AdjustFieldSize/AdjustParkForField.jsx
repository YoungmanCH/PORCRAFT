const adjustParkForFieldSize = () => {
    let screenScale = null;
    let screenPosition = [0, -7, -60];
  
    if (window.innerWidth < 150) {
      screenScale = [0.01, 0.01, 0.01];
    } else {
      screenScale = [0.015, 0.015, 0.015];
    }
    return [screenScale, screenPosition];
  };
  
  export default adjustParkForFieldSize;