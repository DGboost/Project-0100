/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public\assets\models\Vehicles.glb -o src/components/resort/Vehicles.jsx -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import ColliderBox from '../../ColliderBox'

export function MotorbikeOrange(props) {
  const { nodes, materials } = useGLTF('/assets/models/Vehicles.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Motobike_wheel_f.geometry} material={materials.Motobike_2} position={[0, 64.618, -24.031]} />
        <mesh castShadow receiveShadow geometry={nodes.Motobike_wheel_r.geometry} material={materials.Motobike_2} position={[0, -54.175, -24.031]} />
        <mesh castShadow receiveShadow geometry={nodes.Motorbike_1.geometry} material={materials.Motobike_2} position={[0, -0.081, -1.431]} />
        <mesh castShadow receiveShadow geometry={nodes.Motorbike_wing.geometry} material={materials.Motobike_2} position={[0, 46.919, -64.431]} />
      </group>
    </group>
  )
}
export function MotorbikePizza(props) {
  const { nodes, materials } = useGLTF('/assets/models/Vehicles.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Motobike_wheel_f_1.geometry} material={materials.Motobike_3} position={[0, 71.125, -24.031]} />
        <mesh castShadow receiveShadow geometry={nodes.Motobike_wheel_r_1.geometry} material={materials.Motobike_3} position={[0, -50.054, -24.031]} />
        <mesh castShadow receiveShadow geometry={nodes.Motorbike_2.geometry} material={materials.Motobike_3} position={[0, 4.04, -1.431]} />
        <mesh castShadow receiveShadow geometry={nodes.Motorbike_wing_1.geometry} material={materials.Motobike_3} position={[0, 51.04, -64.431]} />
      </group>
    </group>
  )
}
export function MotorbikeYellow(props) {
  const { nodes, materials } = useGLTF('/assets/models/Vehicles.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Motobike_wheel_f_2.geometry} material={materials.Motobike_2} position={[0, 64.618, -24.031]} />
        <mesh castShadow receiveShadow geometry={nodes.Motobike_wheel_r_2.geometry} material={materials.Motobike_2} position={[0, -54.175, -24.031]} />
        <mesh castShadow receiveShadow geometry={nodes.Motorbike_1_1.geometry} material={materials.Motobike_1} position={[0, -0.081, -1.431]} />
        <mesh castShadow receiveShadow geometry={nodes.Motorbike_wing_2.geometry} material={materials.Motobike_1} position={[0, 46.919, -64.431]} />
      </group>
    </group>
  )
}
export function IceCreamCart(props) {
  const { nodes, materials } = useGLTF('/assets/models/Vehicles.glb')
  const position=props.position
  const rotation= props.rotation
  return (
    <group {...props} dispose={null} >
      <ColliderBox scale ={[2, 5.5, 1.5]} position={position} rotation = {rotation}/>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Box.geometry} material={materials.Ice_Cream_Cart} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Object103.geometry} material={materials.Ice_Cream_Cart} position={[-62.31, 0, -14.514]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Wheels.geometry} material={materials.Ice_Cream_Cart} position={[41.562, 0, -34.635]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}
export function CarRed(props) {
  const { nodes, materials } = useGLTF('/assets/models/Vehicles.glb')
  const position = props.position
  const rotation = props.rotation
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[2, 3, 3.7]} position={position} rotation={rotation}/>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Car.geometry} material={materials.Car_1} position={[0, -1.173, -1.235]} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_fl.geometry} material={materials.Car_1} position={[65, 121.426, -33.587]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_fr.geometry} material={materials.Car_1} position={[-65, 121.426, -33.587]} rotation={[1.57, 0, 0]} scale={-1} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_rl.geometry} material={materials.Car_1} position={[65, -103.811, -33.588]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_rr.geometry} material={materials.Car_1} position={[-65, -103.811, -33.588]} rotation={[1.57, 0, 0]} scale={-1} />
      </group>
    </group>
  )
}   
export function CarGreen(props) {
  const { nodes, materials } = useGLTF('/assets/models/Vehicles.glb')
  const position = props.position
  const rotation = props.rotation
  return (
    <group {...props} dispose={null}>
      <ColliderBox scale={[2, 3, 3.7]} position={position} rotation={rotation}/>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.Car_1.geometry} material={materials.Car_2} position={[0, -1.173, -1.235]} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_fl_1.geometry} material={materials.Car_1} position={[65, 121.426, -33.587]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_fr_1.geometry} material={materials.Car_1} position={[-65, 121.426, -33.587]} rotation={[1.57, 0, 0]} scale={-1} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_rl_1.geometry} material={materials.Car_1} position={[65, -103.811, -33.588]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Car_wheel_rr_1.geometry} material={materials.Car_1} position={[-65, -103.811, -33.588]} rotation={[1.57, 0, 0]} scale={-1} />
      </group>
    </group>
  )
}     
      
useGLTF.preload('/assets/models/Vehicles.glb')