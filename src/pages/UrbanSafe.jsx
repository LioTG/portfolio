import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Map, FileText, MessageCircle, BarChart, Users, Smartphone, Figma, Github } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaMobileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        variants={itemVariants}
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

const UrbanSafe = () => {
    return (
        <div className="urban-safe-page">
            <style>{`
                .urban-safe-page {
                    min-height: 100vh;
                    padding-top: 100px;
                    padding-bottom: 50px;
                    background: var(--color-bg-primary);
                    background-image: radial-gradient(circle at 20% 30%, rgba(92, 225, 230, 0.05) 0%, transparent 50%),
                                    radial-gradient(circle at 80% 70%, rgba(0, 168, 255, 0.05) 0%, transparent 50%);
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
                    background: var(--gradient-accent);
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
                    grid-template-columns: 1.1fr 0.9fr;
                    gap: 3rem;
                    align-items: center;
                    margin-bottom: 3rem;
                }

                .project-image {
                    width: 100%;
                    border-radius: var(--border-radius-lg);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                    margin-bottom: 0;
                }

                .action-buttons {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    margin-top: 2rem;
                }

                .btn-prototype {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--border-radius-md);
                    text-decoration: none;
                    font-weight: 600;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }

                .btn-prototype:hover{
                    transform: translateY(-2px);
                    color: white !important;
                    background-color: rgba(255, 255, 255, 0.1);
                }

                .btn-repo {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--border-radius-md);
                    text-decoration: none;
                    font-weight: 600;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }

                .btn-repo:hover {
                    transform: translateY(-2px);
                    background-color: #333;
                    color: white !important;
                    border-color: #333;
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
                    margin-top: 4rem;
                    margin-bottom: 2rem;
                    font-family: var(--font-display);
                    text-align: center;
                }

                .features-grid {
                    display: grid;
                    gap: 2rem;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                }

                .feature-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(92, 225, 230, 0.3);
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
                    background: linear-gradient(135deg, rgba(92, 225, 230, 0.2), rgba(0, 168, 255, 0.2));
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
                        order: 2;
                    }

                    .content-grid > div:first-child {
                        order: 1;
                    }
                }

                @media (max-width: 768px) {
                    .urban-safe-page {
                        padding-top: 80px;
                    }

                    .project-title {
                        font-size: 2.5rem;
                    }

                    .action-buttons {
                        flex-direction: column;
                        width: 100%;
                    }

                    .btn-prototype {
                        width: 100%;
                        justify-content: center;
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
                            Urban Safe
                        </h1>

                        <div className="tech-stack">
                            <TechBadge icon={FaMobileAlt} name="Mobile Dev" color="#ffffff" />
                            <TechBadge icon={Figma} name="UX/UI" color="#F24E1E" />
                            <TechBadge icon={FaHtml5} name="HTML" color="#E34F26" />
                            <TechBadge icon={FaCss3Alt} name="CSS" color="#1572B6" />
                        </div>
                    </div>

                    <div className="content-grid">
                        <div>
                            <h3 className="section-title">
                                Sobre el Proyecto
                            </h3>
                            <p className="project-description">
                                <strong>Urban Safe</strong> es una plataforma web enfocada en fortalecer la seguridad comunitaria mediante la comunicación y la colaboración entre vecinos.
                                A través de su interfaz, los usuarios pueden reportar incidentes, visualizarlos en un mapa interactivo y participar en chats y encuestas vecinales, fomentando la prevención y la respuesta temprana ante situaciones de riesgo.
                            </p>
                            <p className="project-description" style={{ marginTop: '1rem' }}>
                                El proyecto busca crear una red de apoyo digital entre vecinos, administradores de barrios y autoridades locales, ofreciendo una solución accesible, informativa y adaptable para diferentes comunidades.
                            </p>

                            <div className="action-buttons">
                                <a href="https://urban-trust.github.io/urban-safe/public/" target="_blank" className="btn-prototype">
                                    <ExternalLink size={20} />
                                    Ver Landing Page
                                </a>
                                <a href="https://github.com/Urban-Trust/urban-safe" target="_blank" className="btn-repo">
                                    <Github size={20} />
                                    Ver Repositorio
                                </a>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}images/urban-safe.png`}
                                alt="Urban Safe Interface"
                                className="project-image"
                            />
                        </motion.div>
                    </div>

                    <div>
                        <h3 className="section-subtitle">
                            Características Principales
                        </h3>

                        <motion.div
                            className="features-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <FeatureCard
                                icon={Map}
                                title="Mapa interactivo"
                                description="Permite visualizar incidentes reportados, aplicar filtros por tipo o fecha y explorar zonas específicas del vecindario."
                            />
                            <FeatureCard
                                icon={FileText}
                                title="Reportes guiados"
                                description="Los usuarios pueden crear reportes paso a paso, adjuntando descripciones, fotos o videos."
                            />
                            <FeatureCard
                                icon={MessageCircle}
                                title="Comunicación vecinal"
                                description="Incluye un chat comunitario, encuestas de opinión y notificaciones visuales para promover la participación ciudadana."
                            />
                            <FeatureCard
                                icon={BarChart}
                                title="Panel de análisis"
                                description="Presenta indicadores e históricos de incidentes para apoyar la toma de decisiones de los líderes vecinales."
                            />
                            <FeatureCard
                                icon={Users}
                                title="Gestión de usuarios y roles"
                                description="Permite a administradores asignar permisos y mantener organizada la red de vecinos."
                            />
                            <FeatureCard
                                icon={Smartphone}
                                title="Diseño accesible y responsive"
                                description="Interfaz adaptable a dispositivos móviles y de escritorio, priorizando claridad y usabilidad."
                            />
                        </motion.div>

                        <h3 className="section-subtitle">
                            Mi rol en el proyecto
                        </h3>
                        <p className="project-description">
                            Como <strong>UX/UI Designer</strong>, fui responsable de diseñar una experiencia de usuario intuitiva y accesible. Me enfoqué en la creación de flujos de navegación claros para el reporte de incidentes y la visualización de datos en el mapa. Utilicé Figma para prototipar la interfaz, asegurando que el diseño fuera responsive y adaptable a diferentes dispositivos, facilitando así la adopción por parte de vecinos y autoridades.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default UrbanSafe;
