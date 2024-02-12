/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Crab.glb -o src/components/Crab.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Crab(props) {
  const { nodes, materials } = useGLTF('/assets/models/Crab.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Crab_01_Cube039_1.geometry} material={materials.F44336} />
      <mesh geometry={nodes.Crab_01_Cube039_1_1.geometry} material={materials.FFFFFF} />
      <mesh geometry={nodes.Crab_01_Cube039_1_2.geometry} material={materials['1A1A1A']} />
    </group>
  )
}

useGLTF.preload('/assets/models/Crab.glb')
