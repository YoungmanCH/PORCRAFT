/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Feld1 (https://sketchfab.com/Feld1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-king-e96d406344b34be9aefaa03a7639e7e4
Title: Chess King
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

const King = (props) => {
  const kingRef = useRef();
  const kingScene = '/assets/3d/chess_king.glb';
  const { nodes, materials } = useGLTF(kingScene);

  return (
    <a.group ref={kingRef} {...props}>
      <group name="Sketchfab_Scene">
        <group scale={0.01}>
          <mesh
            geometry={nodes.Cylinder__0.geometry}
            material={materials["Scene_-_Root"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.151, 2.05, 4.533]}
            />
        </group>
      </group>
    </a.group>
  );
}
export default King;