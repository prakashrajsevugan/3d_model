import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { New } from "./New";
import FrontLight from "./FrontLight";
import Particles from "./Particles";

const FrontModel = () =>{
    return(
        <Canvas 
            camera={{position:[150,150,15],fov:55}}
            shadows
        >

            <OrbitControls
                enablePane={false}
            />

            <FrontLight />
            <Particles count={500} />

            <group
            position={[0,-40.5,0]}
            rotation={[0,45,0]}
            >
                <New />
            </group>
        </Canvas>
    )
}

export default FrontModel;