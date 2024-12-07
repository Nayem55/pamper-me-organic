import React from "react";
import { useGLTF } from "@react-three/drei";
import bottleModel from '../../Images/bottle2.glb'

export default function Bottle(props) {
  const { nodes, materials } = useGLTF(bottleModel);

  return (
    <group {...props} dispose={null} scale={[3, 3, 3]} position={[0, -2.5, 0]} >
      <group position={[0, 0.833, -0.008]} scale={[0.473, 0.412, 0.473]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["plastic.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials["BattleCap.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.BattleCap}
        position={[0, 2.267, 0]}
        scale={[0.296, 0.115, 0.296]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.battlePaper}
        position={[0, 0.084, -0.009]}
        scale={0.498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.liquid}
        position={[0, 0.714, -0.01]}
        scale={[0.458, 0.66, 0.458]}
      />
    </group>
  );
}

useGLTF.preload("/bottle 2.glb");
