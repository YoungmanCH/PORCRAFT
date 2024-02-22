/* eslint-disable react/no-unknown-property */

import { Suspense, useEffect } from "react";

import Loader from "./Loader";
import Dragon from "../models/dragon";
import Person from "../models/person";
import House from "../models/house";
import AdjustHouseForScreenSize from "../features/AdjustScreenSize/AdjustHouseForScreenSize";

const ObjectComponents = ({ id, name, position, rotation, scale, setScale }) => {
  let component = null;
  const [houseScale] = AdjustHouseForScreenSize();

  // useEffect(() => {
  //   setScale(id, [
  //     houseScale[0],
  //     houseScale[1],
  //     houseScale[2],
  //   ]);
  // });

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
            // scale={[0.003, 0.003, 0.003]}
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
            // scale={[0.05, 0.05, 0.05]}
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
            // scale={houseScale} 
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
