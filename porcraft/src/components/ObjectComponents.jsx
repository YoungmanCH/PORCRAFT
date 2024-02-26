/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";

import Loader from "./Loader";
import Dragon from "../models/Dragon";
import Person from "../models/Person";
import House from "../models/House";
import King from "../models/King";
import Plane from "../models/Plane";
import Birdorange from "../models/Birdorange";
import Queen from "../models/Queen";

const ObjectComponents = ({ name, position, rotation, scale }) => {
  let component = null;

  switch (name) {
    case "Flying dragon":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Dragon position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Normal person":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Person position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "House":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <House position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "King":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <King position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
      case "Plane":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Plane position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
      case "Birdorange":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Birdorange position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
      case "Queen":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Queen position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    default:
      component = <div>Unknown object</div>;
  }

  return component;
};

export default ObjectComponents;
