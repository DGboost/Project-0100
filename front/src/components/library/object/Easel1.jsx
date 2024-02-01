/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\assets\models\Easel1.glb -o src/components/library/object/Easel1.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/models/Easel1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.group1441049998.geometry} material={materials.mat21} />
      <mesh geometry={nodes.group1958263894.geometry} material={materials.mat20} />
    </group>
  )
}

useGLTF.preload('/assets/models/Easel1.glb')
