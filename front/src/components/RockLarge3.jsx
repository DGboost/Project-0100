/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/RockLarge3.glb -o src/components/RockLarge3.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RockLarge3(props) {
  const { nodes, materials } = useGLTF('/assets/models/RockLarge3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rock_Large_3.geometry} material={materials.Atlas} scale={100} />
    </group>
  )
}

useGLTF.preload('/assets/models/RockLarge3.glb')