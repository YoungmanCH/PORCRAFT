/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: mamont nikita (https://sketchfab.com/mamontnikita62)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/plane-a340-d3ad0996a8564a94a24ee4b3528b554b
Title: plane a340
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

const Plane = (props) => {
  const planeRef = useRef();
  const planeScene = '/assets/3d/plane_a340.glb';
  const { nodes, materials } = useGLTF(planeScene);

  return (
    <a.group ref={planeRef} {...props}>
      <group name="Sketchfab_Scene">
        
      <group rotation={[-Math.PI, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["11803_Airplane_wing_L"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["11803_Airplane_wing_R"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["11803_Airplane_body"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["11803_Airplane_body"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["11803_Airplane_tail"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["11803_Airplane_wing_details_L"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["11803_Airplane_wing_details_L"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["11803_Airplane_wing_details_R"]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["11803_Airplane_wing_details_R"]}
        />
      </group>
  
      </group>
    </a.group>
  );
}

export default Plane;







