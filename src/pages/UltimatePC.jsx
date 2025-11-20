import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Box, Code, Wrench, Cpu, Banknote, MessageCircle } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { SiAdobexd } from "react-icons/si";
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="feature-card"
        whileHover={{
            y: -5,
            background: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(225, 184, 92, 0.3)',
            boxShadow: '0 10px 30px -10px rgba(225, 184, 92, 0.2)'
        }}
    >
        <div className="feature-icon">
            <Icon size={24} />
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </motion.div>
);

const TechBadge = ({ icon: Icon, name, color }) => (
    <div
        className="tech-badge"
        style={{ '--hover-color': color }}
    >
        <Icon size={16} />
        {name}
    </div>
);

const UltimatePC = () => {
    return (
        <div className="ultimate-pc-page">
            <style>{`
                .ultimate-pc-page {
                    min-height: 100vh;
                    padding-top: 100px;
                    padding-bottom: 50px;
                    background: var(--color-bg-primary);
                    background-image: radial-gradient(circle at 20% 30%, rgba(225, 184, 92, 0.05) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 70%, rgba(165, 126, 40, 0.05) 0%, transparent 50%);
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-text-secondary);
                    margin-bottom: 2rem;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .back-link:hover {
                    color: var(--color-neon-blue);
                }

                .project-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-family: var(--font-display);
                    margin-bottom: 1.5rem;
                    background: var(--gradient-primary);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tech-stack {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-bottom: 2rem;
                }

                .tech-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: var(--border-radius-full);
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .tech-badge:hover {
                    border-color: var(--hover-color);
                    color: var(--hover-color);
                    background: rgba(255, 255, 255, 0.1);
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: start;
                    margin-bottom: 4rem;
                }

                .project-image {
                    width: 100%;
                    border-radius: var(--border-radius-lg);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    margin-bottom: 2rem;
                }

                .action-buttons {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                }

                .btn-prototype, .btn-help {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--border-radius-md);
                    text-decoration: none;
                    font-weight: 600;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .btn-prototype:hover, .btn-help:hover {
                    transform: translateY(-2px);
                    color: white !important;
                }

                .section-title {
                    color: var(--color-text-primary);
                    font-size: 1.8rem;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-display);
                }

                .section-subtitle {
                    color: var(--color-text-primary);
                    font-size: 1.5rem;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    font-family: var(--font-display);
                }

                .features-grid {
                    display: grid;
                    gap: 2rem;
                }

                .feature-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(225, 184, 92, 0.3);
                    border-radius: var(--border-radius-md);
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    position: relative;
                    overflow: hidden;
                }

                .feature-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: linear-gradient(135deg, rgba(225, 184, 92, 0.2), rgba(165, 126, 40, 0.2));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-neon-blue);
                }

                .feature-card h4 {
                    color: var(--color-text-primary);
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }

                .feature-card p {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    line-height: 1.6;
                }

                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    
                    .project-image {
                        margin-bottom: 1.5rem;
                    }
                }

                @media (max-width: 768px) {
                    .ultimate-pc-page {
                        padding-top: 80px;
                    }

                    .project-title {
                        font-size: 2.5rem;
                    }

                    .action-buttons {
                        flex-direction: column;
                        width: 100%;
                    }

                    .btn-prototype, .btn-help {
                        width: 100%;
                        justify-content: center;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} />
                    Volver al inicio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ marginBottom: '3rem' }}>
                        <h1 className="project-title">
                            Ultimate PC Simulator
                        </h1>

                        <div className="tech-stack">
                            <TechBadge icon={Box} name="Unity 2D" color="#ffffff" />
                            <TechBadge icon={Code} name="C#" color="#9b4993" />
                            <TechBadge icon={SiAdobexd} name="Adobe XD" color="#FF61F6" />
                        </div>
                    </div>

                    <div className="content-grid">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <img
                                src="/images/ultimate-pc-simulator.png"
                                alt="Ultimate PC Simulator Gameplay"
                                className="project-image"
                            />

                            <div className="action-buttons">
                                <a href="https://xd.adobe.com/view/1d7f1f0e-695b-455e-a29c-79fbd096e3b5-482c/?fullscreen&hints=off" target="_blank" className="btn-prototype">
                                    <ExternalLink size={20} />
                                    Jugar Prototipo
                                </a>
                                <a href="https://discord.gg/AyVvX6Qe4Y" target="_blank" className="btn-help">
                                    <FaDiscord size={20} />
                                    Ayuda
                                </a>
                            </div>
                        </motion.div>

                        <div>
                            <h3 className="section-title">
                                Sobre el Proyecto
                            </h3>
                            <p className="project-description">
                                Simulador 2D de ensamblaje de PCs donde los jugadores construyen computadoras usando componentes interactivos, sistema de compatibilidad y UI avanzada. Inspirado en la complejidad del hardware real pero adaptado a una experiencia de juego fluida y educativa.
                            </p>

                            <h3 className="section-subtitle">
                                Características Clave
                            </h3>

                            <div className="features-grid">
                                <FeatureCard
                                    icon={Wrench}
                                    title="Ensamblaje Realista"
                                    description="Sistema drag-and-drop con puntos de anclaje precisos para cada componente."
                                    delay={0.1}
                                />
                                <FeatureCard
                                    icon={Cpu}
                                    title="Lógica de Compatibilidad"
                                    description="Validación en tiempo real de sockets, chipsets y tipos de memoria RAM."
                                    delay={0.1}
                                />
                                <FeatureCard
                                    icon={Banknote}
                                    title="Economía Dinámica"
                                    description="Gestión de presupuesto, compra de componentes y venta de equipos armados."
                                    delay={0.1}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default UltimatePC;
