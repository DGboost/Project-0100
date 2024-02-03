/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/resort-line-road.glb -o src/components/resort-line-road.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Resort(props) {
  const { nodes, materials } = useGLTF('/assets/models/resort-line-road.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Road_1.geometry} material={materials.Asphalt} position={[0, 0, 6]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Road_1.geometry} material={materials.Asphalt} position={[0, 0, 12]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Road_1.geometry} material={materials.Asphalt} position={[0, 0, 18]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Road_1.geometry} material={materials.Asphalt} position={[0, 0, 24]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Road_1.geometry} material={materials.Asphalt} position={[0, 0, 30]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.Road_1.geometry} material={materials.Asphalt} position={[0, 0, 36]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/assets/models/resort-line-road.glb')
