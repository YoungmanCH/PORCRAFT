/* eslint-disable react/no-unknown-property */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Virginia Vidonis (https://sketchfab.com/virginiavidonis)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/city-park-at-sunset-ec70492df60b4d42b37b7219b7b2149e
Title: City Park at Sunset
*/

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from '@react-spring/three';

const Park = (props) =>{
  const parkRef = useRef();
  const parkScene = '/assets/3d/park.glb';
  const { nodes, materials } = useGLTF(parkScene);

  return (
    <a.group ref={parkRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRoÛotNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                position={[-346.031, 283.425, 3246.767]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[36.426, 37.271, 56.896]}
              >
                <mesh
                  geometry={nodes.barre_verticali001_lowpolytex_0.geometry}
                  material={materials.lowpolytex}
                />
                <mesh
                  geometry={nodes.barre_verticali001_CARTELLO_0.geometry}
                  material={materials.CARTELLO}
                />
                    </group>
              <mesh
                geometry={nodes.Cylinder_Material001_0.geometry}
                material={materials["Material.001"]}
                position={[1.407, 127.933, 15.456]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={65.064}
              />
              <mesh
                geometry={nodes.acqua_acqua_0.geometry}
                material={materials.acqua}
                position={[-13.814, 129.79, 19.97]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={65.064}
              />
              <mesh
                geometry={nodes.fontana_base_Material001_0.geometry}
                material={materials["Material.001"]}
                position={[1.407, 100.465, 15.456]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={65.064}
              />
              <mesh
                geometry={nodes.fontana_base_parte_superiore_Material001_0.geometry}
                material={materials["Material.001"]}
                position={[1.407, 100.465, 15.456]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={65.064}
              />
              <mesh
                geometry={nodes.volpe_Material001_0.geometry}
                material={materials["Material.001"]}
                position={[6.959, 287.835, -7.18]}
                rotation={[-2.452, 1.569, 0.891]}
                scale={65.064}
              />
              <mesh
                geometry={nodes.MURO_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[0, 52.054, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.terriccio_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[0, 49.75, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.terriccio001_terriccio_0.geometry}
                material={materials.terriccio}
                position={[0, 49.75, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cube001_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-1798.567, 8.264, 407.911]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={[-100, 100, 100]}
              />
              <mesh
                geometry={nodes.Cube002_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-433.905, 8.163, 2510.868]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[-100, 100, 100]}
              />
              <mesh
                geometry={nodes.Cube003_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-433.905, 13.668, -1033.797]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[-100, 100, 100]}
              />
              <mesh
                geometry={nodes.Cube004_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-1058.07, 11.981, -395.55]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[-100, 100, 100]}
              />
              <mesh
                geometry={nodes.Cube005_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[429.842, 12.571, -2444.064]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cube006_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[1964.843, 8.163, -383.096]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cube007_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[1127.632, 13.68, 388.193]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cube008_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[429.842, 12.141, 1106.637]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2520.695, 325.282, -3245.409]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova002_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2530.119, 325.282, 3238.131]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova003_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2521.949, 325.282, 3238.131]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova004_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[500.38, 325.282, -3241.512]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova2_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2554.047, 325.282, -3214.049]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova2002_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2554.542, 325.282, 3207.885]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova2003_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2546.468, 325.282, -3214.049]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={100}
              />
              <mesh
                geometry={nodes.prova2004_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2554.047, 325.282, 455.294]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={100}
              />
              <mesh
                geometry={nodes.LAMPIONE_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[765.907, 169.909, 351.406]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE002_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2356.071, 169.909, -365.18]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE004_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-689.559, 173.577, -375.783]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE005_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[422.471, 169.909, 775.84]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE006_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2354.531, 169.909, 376.116]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE008_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-420.421, 169.909, -686.203]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE009_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[408.483, 169.909, -3060.804]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE011_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-413.682, 169.909, 3031.306]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE001_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-414.577, 169.909, -3060.804]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE003_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2356.071, 169.909, 381.272]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE007_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2354.531, 169.909, -381.732]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.LAMPIONE010_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[413.41, 169.909, 3031.306]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[110.163, 110.163, 100]}
              />
              <mesh
                geometry={nodes.abete_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2139.572, 107.301, 2789.753]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={191.588}
              />
              <mesh
                geometry={nodes.Icosphere_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-862.244, 212.441, 2877.302]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere001_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-739.734, 148.43, 2652.935]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere002_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-1142.174, 213.265, 2688.147]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere003_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-682.687, 64.034, 2434.123]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere004_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-716.025, 190.776, 2476.022]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere005_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[1826.641, 211.612, 742.227]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere006_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2171.54, 148.43, 664.912]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere007_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2024.332, 271.885, 1053.787]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Icosphere008_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2356.986, 190.776, 629.52]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cylinder001_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2306.927, 658.76, 2191.86]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cylinder002_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-1913.043, 615.454, -605.418]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cylinder003_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2079.176, 452.13, 2902.363]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={242.526}
              />
              <mesh
                geometry={nodes.Icosphere009_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2079.176, 817.576, 2902.363]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[242.526, 242.526, 304.317]}
              />
              <mesh
                geometry={nodes.Cylinder004_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[1855.363, 358.229, -2987.776]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={195.937}
              />
              <mesh
                geometry={nodes.Icosphere010_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[1855.363, 653.474, -2987.776]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[195.937, 195.937, 245.858]}
              />
              <mesh
                geometry={nodes.Icosphere011_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2291.938, 303.973, -763.905]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[112.226, 112.247, 100.139]}
              />
              <mesh
                geometry={nodes.Icosphere012_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2000.286, 231.612, -942.602]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[100, 100, 103.928]}
              />
              <mesh
                geometry={nodes.Icosphere013_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2280.609, 202.572, -2932.986]}
                rotation={[-Math.PI / 2, 0, -2.877]}
                scale={[169.069, 100, 103.928]}
              />
              <mesh
                geometry={nodes.Icosphere014_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2291.939, 281.649, -2344.765]}
                rotation={[-1.418, 0.073, -1.441]}
                scale={[260.954, 122.897, 137.245]}
              />
              <mesh
                geometry={nodes.Icosphere015_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2049.593, 264.901, -2117.433]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[78.999, 78.999, 82.102]}
              />
              <mesh
                geometry={nodes.Icosphere016_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2265.661, 272.838, -1828.954]}
                rotation={[-1.543, 0.073, -1.441]}
                scale={[179.465, 146.079, 208.045]}
              />
              <mesh
                geometry={nodes.Icosphere017_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[1466.435, 265.874, -2916.784]}
                rotation={[-1.389, -0.556, 0.171]}
                scale={[167.391, 136.25, 194.048]}
              />
              <mesh
                geometry={nodes.Icosphere018_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[1466.435, 205.638, -2717.531]}
                rotation={[-1.389, -0.556, 0.171]}
                scale={[100.957, 82.176, 117.035]}
              />
              <mesh
                geometry={nodes.Panca_picnic_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[979.322, 141.022, 2599.363]}
                rotation={[-1.529, -0.086, 1.538]}
                scale={[45.38, 50.748, 50.748]}
              />
              <mesh
                geometry={nodes.Panca_picnic001_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-1778.249, 223.674, -1499.275]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[45.38, 50.748, 50.748]}
              />
              <mesh
                geometry={nodes.barre_verticali_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-1.995, 0.01, -3203.211]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[36.426, 37.271, 56.896]}
              />
              <mesh
                geometry={nodes.barre_verticali002_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[2559.06, 0.01, -1.799]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[34.077, 37.271, 56.896]}
              />
              <mesh
                geometry={nodes.barre_verticali003_lowpolytex_0.geometry}
                material={materials.lowpolytex}
                position={[-2549.856, 0.01, -1.799]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[34.077, 37.271, 56.896]}
              />
              <mesh
                geometry={nodes.BOTTINO_Material002_0.geometry}
                material={materials["Material.002"]}
                position={[-432.807, 82.9, -2784.055]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={148.665}
              />
              <mesh
                geometry={nodes.BOTTINO001_Material002_0.geometry}
                material={materials["Material.002"]}
                position={[456.026, 81.348, 2901.629]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={148.665}
              />
              <mesh
                geometry={nodes.BOTTINO002_Material002_0.geometry}
                material={materials["Material.002"]}
                position={[1292.028, 74.007, -397.733]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={148.665}
              />
              <mesh
                geometry={nodes.BOTTINO003_Material002_0.geometry}
                material={materials["Material.002"]}
                position={[-2087.995, 77.073, -397.733]}
                rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                scale={148.665}
              />
            </group>
          </group>
        </group>
      </group>    
    </a.group>
  );
}

export default Park;