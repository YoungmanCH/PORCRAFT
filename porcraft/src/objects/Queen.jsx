/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Amine Hosseini (https://sketchfab.com/suburbandigital)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chess-piece-queen-e1bd054f088e4c928740c4989a4a3a41
Title: Chess Piece Queen
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';

const Queen = (props) => {
  const queenRef = useRef();
  const queenScene = '/assets/3d/chess_piece_queen.glb';
  const { nodes, materials } = useGLTF(queenScene);

  return (
    <a.group ref={queenRef} {...props}>
      <group name="Sketchfab_Scene">
        <mesh
          geometry={nodes.queen_copy19_lambert4_0.geometry}
          material={materials.lambert4}
          position={[-7.671, 0, 7.592]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.54}
        />
      </group>
    </a.group>
  );
}

export default Queen;
