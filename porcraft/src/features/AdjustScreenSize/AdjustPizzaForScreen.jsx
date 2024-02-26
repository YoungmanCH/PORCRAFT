const adjustPizzaForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1.2, 0];
    let screenRotation = [0, 3, 0];
  
    if (window.innerWidth < 768) {
      screenScale = [50, 50, 50];
    } else {
      screenScale = [55, 55, 55];
    }
    return [screenScale, screenPosition, screenRotation];
  };
  
  export default adjustPizzaForScreenSize;
  