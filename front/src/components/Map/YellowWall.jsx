/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/YellowWall.glb -o src/components/Map/YellowWall.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ColliderBox from '../../ColliderBox'

export function YellowWall(props) {
  const { nodes, materials } = useGLTF('/assets/models/YellowWall.glb')
  const position = props.position || [0, 0, 0];
  const rotation = props.rotation || [0, 0, 0];
  const scale = props.scale || [0, 0, 0];
  return (
    <group  dispose={null}>
      <ColliderBox scale={[scale[0]+4,scale[1]+0.29, scale[2]+4]} position={[position[0],position[1]+2, position[2]+1.25]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
      <group rotation={[rotation[2]-Math.PI / 2, rotation[0], rotation[1]]} scale={[200+scale[0], 200+scale[1], 200+scale[2]]} position={[position[0], position[1]+2, position[2]+2.3]}>
        <mesh geometry={nodes.Wall_Modular_1.geometry} material={materials.Wall_Dark} />
        <mesh geometry={nodes.Wall_Modular_2.geometry} material={materials.Wall_Medium} />
        <mesh geometry={nodes.Wall_Modular_3.geometry} material={materials.Wall_Highlights} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/YellowWall.glb')
