import Scene from './Scene';
import { KeyboardControls } from '@react-three/drei';
const GamePage = () => {
    return (
        <>
            <KeyboardControls
                map={[
                {name: 'forward', keys:['ArrowUp', 'KeyW']},
                {name: 'backward', keys:['ArrowDown', 'KeyS']},
                {name: 'leftward', keys:['ArrowLeft', 'KeyA']},
                {name: 'rightward', keys:['ArrowRight', 'KeyD']},
                {name: 'jump', keys:['Space']}
                ] } 
            >
                <Scene />
            </KeyboardControls>
        </>
    )
}

export default GamePage