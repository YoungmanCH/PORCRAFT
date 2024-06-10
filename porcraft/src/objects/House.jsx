/* eslint-disable react/no-unknown-property */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: kain (https://sketchfab.com/kainhsp)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/house-eeb8603a4e904a5e83f53090d957035c
Title: house
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

const House = (props) => {
  const houseRef = useRef();
  const HouseScene = '/assets/3d/house.glb';
  const { nodes, materials } = useGLTF(HouseScene);
  
  return (
    <a.group ref={houseRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.blinn13}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={
              materials.old_wooden_house_low_poly2_old_wooden_house_low_poly_blinn8
            }
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.blinn11}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.blinn10}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.blinn7}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.lambert7}
          />
          <mesh
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.blinn6}
            position={[-0.948, -0.218, -3.556]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.blinn4}
          />
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.blinn3}
          />
          <mesh
            geometry={nodes.defaultMaterial_9.geometry}
            material={
              materials.old_wooden_house_low_poly2_old_wooden_house_low_poly_blinn2
            }
          />
          <mesh
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.blinn12}
          />
          <mesh
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.lambert8}
          />
          <mesh
            geometry={nodes.defaultMaterial_12.geometry}
            material={
              materials.old_wooden_house_low_poly2_old_wooden_house_low_poly_blinn8
            }
          />
          <mesh
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.lambert6}
          />
        </group>
      </group>
    </a.group>
  );
}

export default House;