/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Suspense } from "react";

import Loader from "../Loader";

import Island from "../../objects/Island";
import Chess from "../../objects/Chess";
import Pizza from "../../objects/Pizza";
import Park from "../../objects/Park";
import Yggdrasill from "../../objects/Yggdrasill";
import WinterTerrain from "../../objects/WinterTerrain";
import AlienPlanet from "../../objects/AlienPlanet";

const FieldComponents = ({ field }) => {
  if (!field) {
    return null;
  }

  let component = null;
  const { name, position, rotation, scale } = field;

  switch (name) {
    case "Tropical Island":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Island position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Chess":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={2.8} />
          <pointLight position={[10, 10, 10]} />
          <Chess position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Pizza":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={2.8} />
          <pointLight position={[10, 10, 10]} />
          <Pizza position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Park":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={6.5} />
          <pointLight position={[10, 10, 10]} />
          <Park position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Tree Island":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={6.5} />
          <pointLight position={[10, 10, 10]} />
          <Yggdrasill position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    case "Winter Terrain":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <WinterTerrain
            position={position}
            rotation={rotation}
            scale={scale}
          />
        </Suspense>
      );
      break;
    case "Alien Planet":
      component = (
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AlienPlanet position={position} rotation={rotation} scale={scale} />
        </Suspense>
      );
      break;
    default:
      component = <div>Unknown object</div>;
  }

  return component;
};

export default FieldComponents;
