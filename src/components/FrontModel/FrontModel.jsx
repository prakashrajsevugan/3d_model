import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { New } from "./New";
import FrontLight from "./FrontLight";
import Particles from "./Particles";
import { useMediaQuery } from "react-responsive";


const FrontModel = () =>{
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return(
        <Canvas 
            camera={{position:[150,150,15],fov:55}}
            shadows
        >

            <OrbitControls
                enablePane={false}
                maxDistance={(!isMobile ? 300 : 400)}
                minDistance={150}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/3}
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