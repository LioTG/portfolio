import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = ({ mouse }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (meshRef.current) {
            // Rotación
            meshRef.current.rotation.x = time * 0.2 + mouse.y * 1.2;
            meshRef.current.rotation.y = time * 0.3 + mouse.x * 1.2;

            // Posición (puedes ajustar estos factores)
            const targetX = mouse.x * 1.5;
            const targetY = mouse.y * 1.5;

            meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.1;
            meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.1;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
            <MeshDistortMaterial
                color="#a855f7"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};

const Canvas3D = ({ mouse }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
            }}
        >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
                <AnimatedSphere mouse={mouse} />
            </Canvas>
        </div>
    );
};

export default Canvas3D;
