import MoonMap from '../../assets/moon2.0.jpeg'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

export default function Moon(props) {
    const texture = useLoader(THREE.TextureLoader, MoonMap)
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <sphereGeometry args={[3, 32, 32]} />
                <meshPhongMaterial attach='material' />
                <meshStandardMaterial attach='material' map={texture} />
                <OrbitControls
                 enableZoom={false} 
                 enablePan={true} 
                 enableRotate={true}
                 rotateSpeed={0.5}
                 panSpeed={0.5}
                 autoRotate={true}
                 autoRotateSpeed={0.7}
                 />
            </mesh>
        </>
    )
}