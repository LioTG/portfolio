import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, ChevronDown } from 'lucide-react';
import Canvas3D from './Canvas3D';

const Hero = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const rect = currentTarget.getBoundingClientRect();
        const { width, height, left, top } = rect;

        const xInside = clientX - left;
        const yInside = clientY - top;

        // Normalizar a rango [-1, 1]
        const x = (xInside / width) * 2 - 1;
        const y = -(yInside / height) * 2 + 1;

        setMouse({ x, y });
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--gradient-hero)',
                paddingTop: '80px',
                paddingBottom: 'var(--spacing-3xl)',
            }}
        >
            {/* 3D Background */}
            <Canvas3D mouse={mouse} />

            {/* Overlay Gradient */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.95) 0%, rgba(10, 10, 15, 0.7) 50%, rgba(10, 10, 15, 0.85) 100%)',
                zIndex: 2,
                pointerEvents: 'none',
            }} />

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 3 }}>
                <div className="hero-content" style={{ maxWidth: '700px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{
                            fontSize: 'var(--text-6xl)',
                            marginBottom: 'var(--spacing-md)',
                            lineHeight: 1.1,
                        }}>
                            Lionel Chavez
                        </h1>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            fontSize: 'var(--text-3xl)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--spacing-lg)',
                            fontWeight: 500,
                        }}
                    >
                        Software Engineering Student & Game Developer
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-skills"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 'var(--spacing-sm)',
                            marginBottom: 'var(--spacing-xl)',
                        }}
                    >
                        {['Unity', 'C#', 'C++', 'JavaScript', 'UX/UI', 'Agile'].map((skill, index) => (
                            <span
                                key={skill}
                                style={{
                                    padding: 'var(--spacing-xs) var(--spacing-md)',
                                    background: 'rgba(225, 184, 92, 0.1)',
                                    border: '1px solid rgba(225, 184, 92, 0.3)',
                                    borderRadius: 'var(--border-radius-full)',
                                    color: 'var(--color-neon-purple)',
                                    fontSize: 'var(--text-sm)',
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 500,
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{
                            fontSize: 'var(--text-lg)',
                            color: 'var(--color-text-secondary)',
                            marginBottom: 'var(--spacing-xl)',
                            lineHeight: 1.8,
                        }}
                    >
                        Estudiante de 4to ciclo en la UPC, apasionado por el desarrollo de videojuegos,
                        diseño UX/UI y tecnología. Especializado en crear experiencias interactivas
                        innovadoras con un enfoque en liderazgo y metodologías ágiles.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="hero-buttons"
                        style={{
                            display: 'flex',
                            gap: 'var(--spacing-md)',
                            flexWrap: 'wrap',
                        }}
                    >
                        <button className="btn btn-primary" onClick={() => scrollToSection('#contact')}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <Download size={20} />
                                Ver CV
                            </span>
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('#projects')}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                                <Briefcase size={20} />
                                Ver Proyectos
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{
                    position: 'absolute',
                    bottom: 'var(--spacing-md)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 4,
                    cursor: 'pointer',
                }}
                onClick={() => scrollToSection('#about')}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 'var(--spacing-xs)',
                    }}
                >
                    <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-display)',
                    }}>
                        Scroll
                    </span>
                    <ChevronDown size={24} color="var(--color-gold-primary)" />
                </motion.div>
            </motion.div>

            <style jsx>{`
        @media (max-width: 768px) {
          .hero-content {
            text-align: center;
            margin: 0 auto;
          }
          .hero-skills, .hero-buttons {
            justify-content: center;
          }
          h1 {
            font-size: var(--text-4xl) !important;
          }
          h2 {
            font-size: var(--text-xl) !important;
          }
        }

        @media (max-height: 750px) {
          .scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
