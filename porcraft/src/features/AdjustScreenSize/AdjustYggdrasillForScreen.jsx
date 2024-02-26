const adjustYggdrasillForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -8, 0];
  
    if (window.innerWidth < 786) {
      screenScale = [15, 15, 15];
    } else {
      screenScale = [15, 15, 15];
    }
    return [screenScale, screenPosition];
  };
  
  export default adjustYggdrasillForScreenSize;