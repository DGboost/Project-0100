/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/throne.glb -o src/Castle/Object/Throne.jsx -r public/ 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Throne(props) {
  const { nodes, materials } = useGLTF('/assets/models/throne.glb')
  return (
    <group {...props} dispose={null}>
        <group rotation={[0, 0, 0]} scale={1.5}>
            <mesh geometry={nodes.group1575677663.geometry} material={materials.mat20} />
            <mesh geometry={nodes.group1557277245.geometry} material={materials.mat13} />
            <group rotation={[0, -0.199, 0]} scale={[0.75, 1.41, 1]}>
                <mesh geometry={nodes.mesh1552030417.geometry} material={materials.mat13} />
                <mesh geometry={nodes.mesh1552030417_1.geometry} material={materials.mat18} />
                <mesh geometry={nodes.mesh1552030417_2.geometry} material={materials.mat19} />
                <mesh geometry={nodes.mesh1552030417_3.geometry} material={materials.mat8} />
                <mesh geometry={nodes.mesh1552030417_4.geometry} material={materials.mat21} />
            </group>
            <mesh geometry={nodes.group1029287846.geometry} material={materials.mat13} />
            <mesh geometry={nodes.mesh1725234602.geometry} material={materials.mat8} />
            <mesh geometry={nodes.mesh1725234602_1.geometry} material={materials.mat13} />
        </group>
    </group>
  )
}

useGLTF.preload('/assets/models/throne.glb')