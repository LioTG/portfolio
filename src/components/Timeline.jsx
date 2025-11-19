import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, Briefcase } from 'lucide-react';

const Timeline = () => {
    const timelineEvents = [
        {
            year: '2025',
            title: 'UPC - 4to Ciclo',
            description: 'Avanzando en Ingeniería de Software con enfoque en desarrollo de videojuegos y UX/UI',
            icon: <Calendar size={24} />,
            type: 'education',
        },
        {
            year: '2024',
            title: 'Ultimate PC Simulator',
            description: 'Desarrollo del simulador de construcción de PCs en Unity 2D para Android',
            icon: <Code size={24} />,
            type: 'project',
        },
        {
            year: '2024',
            title: 'Urban Safe & ChessAssistant',
            description: 'Proyectos de IHC y desarrollo web con énfasis en UX/UI',
            icon: <Briefcase size={24} />,
            type: 'project',
        },
        {
            year: '2025',
            title: 'Build A PC - Roblox',
            description: 'Juego educativo en Roblox usando Lua Script',
            icon: <Code size={24} />,
            type: 'project',
        },
        {
            year: '2023',
            title: 'SysmicControl & CollabSpace',
            description: 'Sistemas de control IoT y plataformas colaborativas',
            icon: <Briefcase size={24} />,
            type: 'project',
        },
        {
            year: '2024',
            title: 'Inicio en UPC',
            description: 'Comienzo de estudios en Ingeniería de Software',
            icon: <Award size={24} />,
            type: 'education',
        },
    ];

    return (
        <section id="timeline" className="section" style={{ background: 'var(--color-bg-primary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Timeline</h2>
                </motion.div>

                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative',
                }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--color-neon-purple), var(--color-neon-blue))',
                        transform: 'translateX(-50%)',
                    }} />

                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                marginBottom: 'var(--spacing-xl)',
                                position: 'relative',
                            }}
                        >
                            <div
                                className="card"
                                style={{
                                    width: 'calc(50% - var(--spacing-xl))',
                                    position: 'relative',
                                }}
                            >
                                {/* Year Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: 'var(--spacing-md)',
                                    [index % 2 === 0 ? 'right' : 'left']: 'calc(var(--spacing-lg) * -1)',
                                    transform: index % 2 === 0 ? 'translateX(50%)' : 'translateX(-50%)',
                                    background: event.type === 'education'
                                        ? 'var(--gradient-primary)'
                                        : 'var(--gradient-secondary)',
                                    color: 'white',
                                    padding: 'var(--spacing-xs) var(--spacing-md)',
                                    borderRadius: 'var(--border-radius-full)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-display)',
                                    whiteSpace: 'nowrap',
                                    zIndex: 2,
                                }}>
                                    {event.year}
                                </div>

                                {/* Icon Circle */}
                                <div style={{
                                    position: 'absolute',
                                    top: 'var(--spacing-md)',
                                    [index % 2 === 0 ? 'right' : 'left']: 'calc((50% - var(--spacing-xl)) * -1 - 20px)',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--color-bg-secondary)',
                                    border: '3px solid var(--color-neon-purple)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-neon-purple)',
                                    zIndex: 2,
                                }}>
                                    {event.icon}
                                </div>

                                <h3 style={{
                                    fontSize: 'var(--text-xl)',
                                    marginBottom: 'var(--spacing-sm)',
                                    color: 'var(--color-text-primary)',
                                    fontFamily: 'var(--font-display)',
                                }}>
                                    {event.title}
                                </h3>

                                <p style={{
                                    color: 'var(--color-text-secondary)',
                                    lineHeight: 1.7,
                                }}>
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <style jsx>{`
          @media (max-width: 768px) {
            .timeline-container > div {
              left: 20px !important;
            }
            .card {
              width: calc(100% - 60px) !important;
            }
          }
        `}</style>
            </div>
        </section>
    );
};

export default Timeline;
