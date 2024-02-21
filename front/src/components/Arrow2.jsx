/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Arrow2.glb -o src/components/Arrow2.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Arrow2(props) {
  const { nodes, materials } = useGLTF('/assets/models/Arrow2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh568754965.geometry} material={materials.mat0} />
      <mesh geometry={nodes.mesh568754965_1.geometry} material={materials.mat2} />
      <mesh geometry={nodes.mesh568754965_2.geometry} material={materials.mat21} />
      <mesh geometry={nodes.mesh337180965.geometry} material={materials.mat21} />
      <mesh geometry={nodes.mesh337180965_1.geometry} material={materials.mat0} />
      <mesh geometry={nodes.mesh337180965_2.geometry} material={materials.mat2} />
      <mesh geometry={nodes.mesh2044901335.geometry} material={materials.mat2} />
      <mesh geometry={nodes.mesh2044901335_1.geometry} material={materials.mat0} />
      <mesh geometry={nodes.mesh2044901335_2.geometry} material={materials.mat21} />
    </group>
  )
}

useGLTF.preload('/assets/models/Arrow2.glb')