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

const FieldComponents = ({ name }) => {
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

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
          <Chess position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Pizza":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Pizza position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Park":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Park position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Tree Island":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Yggdrasill position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    default:
      component = <div>Unknown object</div>;
  }

  return component;
};

export default FieldComponents;
