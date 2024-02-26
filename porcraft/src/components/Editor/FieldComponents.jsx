/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";

import Loader from "../Loader";

import Island from "../../models/Island";
import Chess from "../../models/Chess";
import Pizza from "../../models/Pizza";
import Park from "../../models/Park";
import Yggdrasill from "../../models/Yggdrasill";

import adjustIslandForScreenSize from "../../features/AdjustScreenSize/AdjustIslandForScreen";
import adjustChessForScreenSize from "../../features/AdjustScreenSize/AdjustChessForScreen";
import adjustParkForScreenSize from "../../features/AdjustScreenSize/AdjustParkForScreen";
import adjustPizzaForScreenSize from "../../features/AdjustScreenSize/AdjustPizzaForScreen";
import adjustYggdrasillForScreenSize from "../../features/AdjustScreenSize/AdjustYggdrasillForScreen";

const FieldComponents = ({ name }) => {
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [chessScale, chessPosition, chessRotation] = adjustChessForScreenSize();
  const [parkScale ,parkPosition,parkRotation]=adjustParkForScreenSize();
  const [pizzaScale,pizzaPosition,pizzaRotation]=adjustPizzaForScreenSize();
  const [yggdrasillScale,yggdrasillPosition,yggdrasillRotation]=adjustYggdrasillForScreenSize();


  // const [chessScale, chessPosition] = adjustChessForFieldSize();
  // const [pizzaScale, pizzaPosition] = adjustPizzaForFieldSize();
  // const [parkScale, parkPosition] = adjustParkForFieldSize();
  // const [YggdrasillScale, YggdrasillPosition] = adjustYggdrasillForFieldSize();

  let component = null;

  switch (name) {
    case "Tropical Island":
      component = (
        
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
          />
        </Suspense>
      );
      break;
    case "Chess":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Chess position={chessPosition} rotation={chessRotation} scale={chessScale} />
        </Suspense>
      );
      break;
    case "Pizza":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Pizza position={pizzaPosition} rotation={pizzaRotation} scale={pizzaScale} />
        </Suspense>
      );
      break;
    case "Park":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={6.5} />
          <pointLight position={[10, 10, 10]} />
          <Park position={parkPosition} rotation={parkRotation} scale={parkScale} />
        </Suspense>
      );
      break;
    case "Tree Island":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={6.5} />
          <pointLight position={[10, 50, 10]} />
          <Yggdrasill position={yggdrasillPosition} rotation={yggdrasillRotation} scale={yggdrasillScale} />
        </Suspense>
      );
      break;
    default:
      component = <div>Unknown object</div>;
  }

  return component;
};

export default FieldComponents;
