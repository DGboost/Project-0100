/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/oakBarrel.glb -o src/components/Castle/Object/OakBarrel.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function OakBarrel(props) {
  const { nodes, materials } = useGLTF('/assets/models/oakBarrel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Scene037.geometry} material={materials['Wood_Basic.005']} />
        <mesh geometry={nodes.Scene037_1.geometry} material={materials['Metal_Rusty.003']} />
      </group>
    </group>
  )
}

export function OakBarrel1(props) {
    const { nodes, materials } = useGLTF('/assets/models/oakBarrel.glb')
    return (
      <group {...props} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Scene036.geometry} material={materials['Wood_Basic.005']} />
          <mesh geometry={nodes.Scene036_1.geometry} material={materials['Metal_Rusty.003']} />
        </group>
      </group>
    )
  }

useGLTF.preload('/assets/models/oakBarrel.glb')
