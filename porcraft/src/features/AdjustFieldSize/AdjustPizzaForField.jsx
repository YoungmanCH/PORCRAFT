const adjustPizzaForFieldSize = () => {
    let screenScale = null;
    let screenPosition = [0, -4, -4];
  
    if (window.innerWidth < 150) {
      screenScale = [25, 25, 25];
    } else {
      screenScale = [55, 55, 55];
    }
    return [screenScale, screenPosition];
  };
  
  export default adjustPizzaForFieldSize;