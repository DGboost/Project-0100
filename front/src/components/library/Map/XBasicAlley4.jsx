import {Wall,Floor3} from '../Ruins/Library_Ruins.jsx'
import ColliderBox from '../../../ColliderBox.jsx'

export default function XBasicAlley4(props){
    const position = props.position||[0, 0, 0];
    const rotation = props.roation||[0, 0, 0];
    const scale = props.scale||[0, 0, 0];
    return(<group {...props}>
        <ColliderBox scale={[scale[0]+4,scale[1]+0.58, scale[2]+4]} position={[position[0],position[1]+2, position[2]+1.75]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
        <Wall position= {[0, 0, 2]}/>
        {/* <ColliderBox scale={[scale[0]+4,scale[1]+0.58, scale[2]+4]} position={[position[0]+4,position[1]+2, position[2]+1.75]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
        <Wall position= {[4, 0, 2]}/> */}

        <ColliderBox scale={[scale[0]+4,scale[1]+0.58, scale[2]+4]} position={[position[0],position[1]+2, position[2]-2.2]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
        <Wall position= {[0, 0, -2]}/>
        {/* <ColliderBox scale={[scale[0]+4,scale[1]+0.58, scale[2]+4]} position={[position[0]+4,position[1]+2, position[2]-2.2]} rotation ={[rotation[2]-Math.PI/2, rotation[0], rotation[1]]}></ColliderBox>
        <Wall position= {[4, 0, -2]}/> */}

        <ColliderBox position={[position[0],position[1], position[2]]} scale={[4, 0.01, 4]}/>
        <Floor3 position={[0, 0, 0]}/>
        {/*<ColliderBox position={[position[0],position[1], position[2]]} scale={[4, 0.01, 4]}/>
        <Floor3 position={[4, 0, 0]}/>*/}
    </group>
    );
}
