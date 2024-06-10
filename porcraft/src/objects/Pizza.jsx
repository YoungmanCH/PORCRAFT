/* eslint-disable react/no-unknown-property */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: DJHaski (https://sketchfab.com/djhaski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pizza-model-c0b338ca475d4147bfba00b071e0cbd9
Title: Pizza Model
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from '@react-spring/three';

const Pizza = (props) => {
  const pizzaRef = useRef();
  const pizzaScene = '/assets/3d/pizza.glb';
  const { nodes, materials } = useGLTF(pizzaScene);

  return (
    <a.group ref={pizzaRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRoÛotNode" rotation={[Math.PI / 2, 0, 0]}>
              <group scale={0.01}>
                <mesh
                  geometry={nodes.pCylinder35_blinn4_0.geometry}
                  material={materials.blinn4}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn3_0.geometry}
                  material={materials.blinn3}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn13_0.geometry}
                  material={materials.blinn13}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn1_0.geometry}
                  material={materials.blinn1}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn2_0.geometry}
                  material={materials.blinn2}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn2_0_1.geometry}
                  material={materials.blinn2}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn12_0.geometry}
                  material={materials.blinn12}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn6_0.geometry}
                  material={materials.blinn6}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn8_0.geometry}
                  material={materials.blinn8}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn10_0.geometry}
                  material={materials.blinn10}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn7_0.geometry}
                  material={materials.blinn7}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn9_0.geometry}
                  material={materials.blinn9}
                />
                <mesh
                  geometry={nodes.pCylinder35_blinn11_0.geometry}
                  material={materials.blinn11}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}

export default Pizza;