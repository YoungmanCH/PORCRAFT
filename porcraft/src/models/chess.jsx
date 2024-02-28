/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

const Chess = (props) => {
  const chessRef = useRef();
  const chessScene = "/assets/3d/chess.glb";
  const { nodes, materials } = useGLTF(chessScene);

  return (
    <a.group ref={chessRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["LAST.001"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["LAST.001"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["LAST.001"]}
        />
      </group>
    </a.group>
  );
};

export default Chess;