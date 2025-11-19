import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ mouse }) => {
    const pointsRef = useRef();
    const particleCount = 1000;

    // Guardar posiciones originales y crear colores
    const particles = useMemo(() => {
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            // Posiciones aleatorias en un área grande
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Guardar posiciones originales
            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;

            // Colores aleatorios entre púrpura y azul
            const color = new THREE.Color();
            if (Math.random() > 0.5) {
                color.setHex(0xa855f7); // Púrpura neón
            } else {
                color.setHex(0x3b82f6); // Azul neón
            }

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return { positions, originalPositions, colors };
    }, []);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();
        const positions = pointsRef.current.geometry.attributes.position.array;
        const originalPositions = particles.originalPositions;

        // Convertir coordenadas del mouse a espacio 3D (ajustado para el canvas)
        const mouseX = mouse.x * 10;
        const mouseY = mouse.y * 10;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Posición original con animación de onda suave
            const origX = originalPositions[i3];
            const origY = originalPositions[i3 + 1];
            const origZ = originalPositions[i3 + 2];

            // Animación de onda en Z
            const waveZ = Math.sin(origX * 0.3 + time * 0.5) * 0.3 +
                Math.cos(origY * 0.3 + time * 0.3) * 0.3;

            // Posición objetivo (original + onda)
            let targetX = origX;
            let targetY = origY;
            let targetZ = origZ + waveZ;

            // Calcular distancia al mouse
            const dx = targetX - mouseX;
            const dy = targetY - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Radio de influencia del mouse
            const influenceRadius = 3;

            // Si está dentro del radio de influencia, aplicar repulsión
            if (distance < influenceRadius && distance > 0) {
                const force = (1 - distance / influenceRadius) * 0.5; // Fuerza de repulsión suave
                const angle = Math.atan2(dy, dx);

                // Desplazar suavemente alejándose del mouse
                targetX += Math.cos(angle) * force;
                targetY += Math.sin(angle) * force;
            }

            // Interpolar suavemente hacia la posición objetivo (lerp)
            const lerpFactor = 0.1;
            positions[i3] += (targetX - positions[i3]) * lerpFactor;
            positions[i3 + 1] += (targetY - positions[i3 + 1]) * lerpFactor;
            positions[i3 + 2] += (targetZ - positions[i3 + 2]) * lerpFactor;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;

        // Rotación muy suave del campo completo
        pointsRef.current.rotation.y = time * 0.05 + mouse.x * 0.1;
        pointsRef.current.rotation.x = mouse.y * 0.05;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
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
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <ParticleField mouse={mouse} />
            </Canvas>
        </div>
    );
};

export default Canvas3D;
