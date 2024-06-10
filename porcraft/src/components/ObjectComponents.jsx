/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";

import Loader from "./Loader";

import Dragon from "../objects/Dragon";
import Person from "../objects/Person";
import House from "../objects/House";
import King from "../objects/King";
import Plane from "../objects/Plane";
import OrangeBird from "../objects/OrangeBird";
import Queen from "../objects/Queen";
import SpaceStation from "../objects/SpaceStation";

const ObjectComponents = ({ name, position, rotation, scale, onClick }) => {
  const handleClick = () => {
    onClick();
    console.log(`${name} was clicked!`);
  };

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
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
          />
        </Suspense>
      );
      break;
    case "King":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <King
            position={position}
            rotation={rotation}
            scale={scale}
            onClick={handleClick}
          />
        </Suspense>
      );
      break;
    case "Plane":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Plane
            position={position}
            rotation={rotation}
            scale={scale}
            onClick={handleClick}
          />
        </Suspense>
      );
      break;
    case "Orange bird":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrangeBird
            position={position}
            rotation={rotation}
            scale={scale}
            onClick={handleClick}
          />
        </Suspense>
      );
      break;
    case "Queen":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Queen
            position={position}
            rotation={rotation}
            scale={scale}
            onClick={handleClick}
          />
        </Suspense>
      );
      break;
    case "Space station":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SpaceStation
            position={position}
            rotation={rotation}
            scale={scale}
            onClick={handleClick}
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
