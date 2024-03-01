const adjustPizzaForScreenSize = () => {
  let screenPosition = [0, -1.2, 0];
  let screenRotation = [0, 3, 0];
  let screenScale = null;

  if (window.innerWidth < 768) {
    screenScale = [50, 50, 50];
  } else {
    screenScale = [55, 55, 55];
  }
  return [screenPosition, screenRotation, screenScale];
};

export default adjustPizzaForScreenSize;
