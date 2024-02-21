/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Building_8.glb -o src/components/Building_8.jsx -r public/ -s -S -T 
Files: public/assets/models/Building_8.glb [1.28MB] > C:\Users\푸린\Desktop\activity\jungle\project0100\front\src\components\Building_8-transformed.glb [261.09KB] (80%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/../src/components/Building_8-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Scene015.geometry} material={materials['Walls_4.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_1.geometry} material={materials['Parts.009']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_2.geometry} material={materials['Doors.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_3.geometry} material={materials['Plinth_3.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_4.geometry} material={materials['Roof.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_5.geometry} material={materials['Stairs.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_6.geometry} material={materials['Walls_2_3.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_7.geometry} material={materials['Walls_5.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_8.geometry} material={materials['Walls_5_2.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_9.geometry} material={materials['Windows.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_10.geometry} material={materials['Airing.004']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_11.geometry} material={materials['Awnings_2.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Scene015_12.geometry} material={materials['Shutters.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/../src/components/Building_8-transformed.glb')