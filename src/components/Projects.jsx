import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Ultimate PC Simulator',
            description: 'Simulador 2D de ensamblaje de PCs donde los jugadores construyen computadoras usando componentes interactivos, sistema de compatibilidad y UI avanzada, inspirado en hardware real.',
            technologies: ['Unity', 'C#', '2D', 'UI/UX'],
            role: 'Game Developer & Designer',
            gradient: 'var(--gradient-primary)',
            image: '/images/ultimate-pc-simulator.png',
            link: '#',
        },
        {
            title: 'Build A PC',
            description: 'Juego educativo en Roblox usando Lua Script. Experiencia interactiva para aprender sobre hardware de computadoras mientras construyes tu PC ideal.',
            technologies: ['Roblox Studio', 'Lua', 'Game Design'],
            role: 'Game Developer',
            gradient: 'var(--gradient-secondary)',
            image: '/images/build-a-pc.png',
            link: '#',
        },
        {
            title: 'Urban Safe',
            description: 'Aplicación móvil enfocada en seguridad urbana. Proyecto de IHC con énfasis en diseño centrado en el usuario y tecnologías móviles.',
            technologies: ['Mobile Dev', 'UX/UI', 'Figma', 'IHC'],
            role: 'UX/UI Designer',
            gradient: 'var(--gradient-accent)',
            image: '/images/urban-safe.png',
            link: '#',
        },
        {
            title: 'L-Shop Bot',
            description: 'Bot de Discord programado en JavaScript para administración, economía virtual y sistema de tienda personalizado. Diseñado para servidores grandes y escalabilidad.',
            technologies: ['JavaScript', 'Discord.js', 'Node.js', 'GitHub'],
            role: 'Bot Developer',
            gradient: 'var(--gradient-primary)',
            image: '/images/l-shop-bot.png',
            link: '#',
        },
        {
            title: 'PC Creator Mod',
            description: 'Mod de Minecraft que permitirá ensamblar PCs dentro del juego, incluyendo simulación de hardware, compatibilidad entre componentes y modelos 3D personalizados.',
            technologies: ['MCreator', 'Java', 'Blockbench'],
            role: 'Proximamente',
            gradient: 'var(--gradient-secondary)',
            image: '/images/pc-creator-mod.png',
            link: '#',
        },
    ];

    return (
        <section id="projects" className="section" style={{ background: 'var(--color-bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Proyectos Destacados</h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: 'var(--spacing-lg)',
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            {/* Project Header */}
                            <div style={{
                                height: '6px',
                                background: project.gradient,
                                borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0',
                                marginTop: 'calc(var(--spacing-lg) * -1)',
                                marginLeft: 'calc(var(--spacing-lg) * -1)',
                                marginRight: 'calc(var(--spacing-lg) * -1)',
                                marginBottom: 'var(--spacing-md)',
                            }} />

                            {/* Project Image */}
                            {project.image && (
                                <div style={{
                                    width: 'calc(100% + var(--spacing-lg) * 2)',
                                    height: '200px',
                                    marginLeft: 'calc(var(--spacing-lg) * -1)',
                                    marginRight: 'calc(var(--spacing-lg) * -1)',
                                    marginTop: 'calc(var(--spacing-md) * -1)',
                                    marginBottom: 'var(--spacing-md)',
                                    overflow: 'hidden',
                                    borderRadius: 'var(--border-radius-md)',
                                    position: 'relative',
                                    background: 'rgba(168, 85, 247, 0.05)',
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform var(--transition-slow)',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}

                            <h3 style={{
                                fontSize: 'var(--text-2xl)',
                                marginBottom: 'var(--spacing-sm)',
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-display)',
                            }}>
                                {project.title}
                            </h3>

                            <p style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-neon-purple)',
                                marginBottom: 'var(--spacing-md)',
                                fontWeight: 500,
                            }}>
                                {project.role}
                            </p>

                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                                marginBottom: 'var(--spacing-md)',
                                flex: 1,
                            }}>
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 'var(--spacing-xs)',
                                marginBottom: 'var(--spacing-md)',
                            }}>
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        style={{
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            border: '1px solid rgba(59, 130, 246, 0.3)',
                                            borderRadius: 'var(--border-radius-sm)',
                                            color: 'var(--color-neon-blue)',
                                            fontSize: 'var(--text-xs)',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div style={{
                                display: 'flex',
                                gap: 'var(--spacing-md)',
                                paddingTop: 'var(--spacing-md)',
                                borderTop: '1px solid rgba(168, 85, 247, 0.1)',
                            }}>
                                <a
                                    href={project.link}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--spacing-xs)',
                                        color: 'var(--color-text-secondary)',
                                        fontSize: 'var(--text-sm)',
                                        transition: 'color var(--transition-base)',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neon-purple)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                                >
                                    <ExternalLink size={16} />
                                    Ver más
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
