/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";

import Loader from "./Loader";
import Dragon from "../models/dragon";
import Person from "../models/person";
import House from "../models/house";

const ObjectComponents = ({ name, position, rotation, scale }) => {
  let component = null;

  switch (name) {
    case "Flying dragon":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Dragon
            position={position}
            rotation={rotation}
            scale={scale}
          />
        </Suspense>
      );
      break;
    case "Normal person":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Person
            position={position}
            rotation={rotation}
            scale={scale} 
          />
        </Suspense>
      );
      break;
    case "House":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <House 
            position={position} 
            rotation={rotation} 
            scale={scale} 
          />
        </Suspense>
      );
      break;
    default:
      component = <div>Unknown object</div>;
  }

  return component;
};

export default ObjectComponents;
