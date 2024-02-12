import {Instances, Instance} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {useRef, useState, useEffect} from "react";
import {AdditiveBlending, DoubleSide, MathUtils} from "three";
const INSTANCES = 80;

const SpeedShape=()=>{
    const ref = useRef();
    let randomPosition={
        x: 0,
        y: 0,
        z:0,
    }
    let randomSpeed =0;

    const resetRandom = ()=>{
        randomPosition = {
            x: MathUtils.randFloatSpread(7),
            y:MathUtils.randFloatSpread(6),
            z: MathUtils.randFloatSpread(7),
        }
        randomSpeed=MathUtils.randFloat(7, 10);
    }
    resetRandom();
    useFrame((_state, delta)=>{
        if(ref.current){
            ref.current.position.z+=10*delta;
            if(ref.current.position.z>1){
                resetRandom();
                ref.current.position.z = randomPosition.z;
            }
        }
    });
    return (
    <Instance
        ref={ref} 
        color="white" 
        position={[randomPosition.x, randomPosition.y, randomPosition.z]}
        rotation-y={Math.PI/2}
        />
    );
};
export const Speed = () => {
    const speedMaterial = useRef();
    const [showSpeed, setShowSpeed] = useState(false);
  
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.shiftKey) {
          setShowSpeed(true);
        } else {
          setShowSpeed(false);
        }
      };
  
      window.addEventListener("keydown", handleKeyPress);
      window.addEventListener("keyup", handleKeyPress);
  
      return () => {
        window.removeEventListener("keydown", handleKeyPress);
        window.removeEventListener("keyup", handleKeyPress);
      };
    }, []);
  
    return showSpeed ? (
      <group>
        <Instances>
          <planeGeometry args={[1, 0.005]} />
          <meshBasicMaterial
            side={DoubleSide}
            blending={AdditiveBlending}
            opacity={1}
            transparent
            ref={speedMaterial}
          />
          {Array(INSTANCES)
            .fill()
            .map((_, key) => (
              <SpeedShape key={key} />
            ))}
        </Instances>
      </group>
    ) : null;
  };