import MoonMap from '../../assets/moon2.0.jpeg'
import React, { useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from '@react-three/drei'

export default function Moon(props) {
    const texture = useLoader(TextureLoader, MoonMap)

    const moonref = useRef();

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
       const elapsedTime = clock.getElapsedTime();
        moonref.current.rotation.y = elapsedTime / 6;
    })
    return (
        <>
            <pointLight color="#f6f3ea" position={[10, 10, 10]} intensity={1} />
            <Stars radius={300} depth={60} count={20000} saturation={0} fade={true}/>
            <mesh ref={moonref}>
                <sphereGeometry args={[1.6, 32, 32]} />
                <meshPhongMaterial attach='material' />
                <meshStandardMaterial attach='material' map={texture} />
                <OrbitControls
                 enableZoom={false} 
                 enablePan={true} 
                 enableRotate={true}
                 rotateSpeed={0.5}
                 panSpeed={0.5}
                 autoRotate={false}
                 autoRotateSpeed={0.7}
                 />
            </mesh>
        </>
    )
}