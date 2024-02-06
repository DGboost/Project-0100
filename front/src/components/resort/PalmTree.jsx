/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/PalmTree2.glb -o src/components/resort/PalmTree.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PalmTree(props) {
    const { nodes, materials } = useGLTF('/assets/models/PalmTree.glb')
    return (
      <group {...props} dispose={null}>
        <mesh geometry={nodes.Environment_PalmTree_1.geometry} material={materials.Atlas} scale={200} />
      </group>
    )
  }

export function PalmTree2(props) {
  const { nodes, materials } = useGLTF('/assets/models/PalmTree2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Environment_PalmTree_2.geometry} material={materials.Atlas} scale={1} />
    </group>
  )
}

useGLTF.preload('/assets/models/PalmTree.glb')
useGLTF.preload('/assets/models/PalmTree2.glb')