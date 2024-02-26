const adjustChessForFieldSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1.4, 0];
  
    if (window.innerWidth < 150) {
      screenScale = [0.1, 0.1, 0.1];
    } else {
      screenScale = [20, 20, 20];
    }
    return [screenScale, screenPosition];
  };
  
  export default adjustChessForFieldSize;