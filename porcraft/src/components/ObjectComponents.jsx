/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";
// import { OrbitControls } from "@react-three/drei";

import Loader from "./Loader";
import Dragon from "../models/dragon";
import Person from "../models/person";
import House from "../models/house";
import AdjustHouseForScreenSize from "../features/AdjustScreenSize/AdjustHouseForScreenSize";

const ObjectComponents = ({ name, position }) => {
  let component = null;
  const [houseScale] = AdjustHouseForScreenSize();

  switch (name) {
    case "Flying dragon":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Dragon position={position} scale={[0.003, 0.003, 0.003]} />
          {/* <OrbitControls /> */}
        </Suspense>
      );
      break;
    case "Normal person":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Person position={position} scale={[0.05, 0.05, 0.05]} />
          {/* <OrbitControls /> */}
        </Suspense>
      );
      break;
    case "House":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <House position={position} scale={houseScale} />
          {/* <OrbitControls /> */}
        </Suspense>
      );
      break;
    default:
      component = <div>Unknown object</div>;
  }

  return component;
};

export default ObjectComponents;
