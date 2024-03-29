/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Tenebrius (https://sketchfab.com/Tenebrius)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-piece-knight-horse-dd5c780cce3d46e4b34606e659f437e0
Title: Chess Piece: Knight (Horse)
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

const Knight = (props) => {
  const knightRef = useRef();
  const knightScene = '/assets/3d/chess_piece_knight_horse.glb';
  const { nodes, materials } = useGLTF(knightScene);

  return (
    <a.group ref={personRef} {...props}>
      <group name="Sketchfab_Scene">
        <mesh
          geometry={nodes.Horse_HorseTex_0.geometry}
         material={materials.HorseTex}
        />
      </group>
    </a.group>
  );
}

export default Knight;

