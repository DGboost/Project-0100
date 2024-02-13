/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Rock.glb -o src/components/Rock.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Rock(props) {
  const { nodes, materials } = useGLTF('/assets/models/Rock.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Resource_Rock_1.geometry} material={materials.Stone} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/assets/models/Rock.glb')
