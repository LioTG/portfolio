import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, Briefcase } from 'lucide-react';
import { useSpotlight } from '../hooks/useSpotlight';

const TimelineEventCard = ({ event, index }) => {
    const spotlightRef = useSpotlight();

    return (
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
                ref={spotlightRef}
                className="card"
                style={{
                    width: 'calc(50% - var(--spacing-xl))',
                    position: 'relative',
                }}
            >
                {/* Date Badge */}
                <div style={{
                    display: 'inline-block',
                    background: event.date === 'Actualidad'
                        ? 'linear-gradient(135deg, #10b981, #059669)' // Verde brillante para Actualidad
                        : event.type === 'education'
                            ? 'var(--gradient-primary)'
                            : 'var(--gradient-secondary)',
                    color: event.date === 'Actualidad' ? 'white' : '#000000',
                    padding: 'var(--spacing-xs) var(--spacing-lg)',
                    borderRadius: 'var(--border-radius-full)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    marginBottom: 'var(--spacing-md)',
                    boxShadow: event.date === 'Actualidad'
                        ? '0 4px 20px rgba(16, 185, 129, 0.5), 0 0 30px rgba(16, 185, 129, 0.3)'
                        : '0 4px 20px rgba(225, 184, 92, 0.3)',
                    animation: event.date === 'Actualidad' ? 'pulse 2s ease-in-out infinite' : 'none',
                }}>
                    {event.date}
                </div>

                {/* Title with Icon */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                    marginBottom: 'var(--spacing-sm)',
                }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--color-bg-secondary)',
                        border: '2px solid var(--color-neon-purple)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-neon-purple)',
                        flexShrink: 0,
                    }}>
                        {event.icon}
                    </div>
                    <h3 style={{
                        fontSize: 'var(--text-xl)',
                        margin: 0,
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-display)',
                    }}>
                        {event.title}
                    </h3>
                </div>

                <p style={{
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                }}>
                    {event.description}
                </p>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const timelineEvents = [
        {
            date: 'Actualidad',
            year: '2025',
            month: 'Actual',
            title: 'UPC - 4to Ciclo',
            description: 'Avanzando en Ingeniería de Software con enfoque en desarrollo de videojuegos y UX/UI',
            icon: <Calendar size={24} />,
            type: 'education',
        },
        {
            date: 'Octubre - Diciembre 2025',
            year: '2024',
            month: 'Sep',
            title: 'Urban Safe',
            description: 'Proyecto de IHC y desarrollo web con énfasis en UX/UI',
            icon: <Briefcase size={24} />,
            type: 'project',
        },
        {
            date: 'Julio 2025',
            year: '2025',
            month: 'Ene',
            title: 'Build A PC - Roblox',
            description: 'Juego educativo en Roblox usando Lua Script',
            icon: <Code size={24} />,
            type: 'project',
        },
        {
            date: 'Marzo - Julio 2025',
            year: '2025',
            month: 'Mar',
            title: 'UPC - 3er Ciclo',
            description: 'Profundización en diseño de interfaces, investigación de usuarios y desarrollo de aplicaciones web con enfoque en accesibilidad y experiencia de usuario',
            icon: <Calendar size={24} />,
            type: 'education',
        },
        {
            date: 'Noviembre 2024 - Actualidad',
            year: '2024',
            month: 'Nov',
            title: 'Ultimate PC Simulator',
            description: 'Desarrollo del simulador de construcción de PCs en Unity 2D para Android',
            icon: <Code size={24} />,
            type: 'project',
        },
        {
            date: 'Agosto - Noviembre 2024',
            year: '2025',
            month: 'Ago',
            title: 'UPC - 2do Ciclo',
            description: 'Formación base en algoritmos, fundamentos de programación y matemáticas aplicadas para la ingeniería de software',
            icon: <Calendar size={24} />,
            type: 'education',
        },
        {
            date: 'Marzo 2024',
            year: '2024',
            month: 'Mar',
            title: 'Inicio en UPC',
            description: 'Comienzo de estudios en Ingeniería de Software',
            icon: <Award size={24} />,
            type: 'education',
        },
        {
            date: 'Agosto 2022 - Actualidad',
            year: '2022',
            month: 'Ago',
            title: 'L-Shop Bot',
            description: 'Bot desarrollado con Discord.js, con módulos de economía, inventario, administración y comandos personalizados',
            icon: <Code size={24} />,
            type: 'project',
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
                        <TimelineEventCard key={index} event={event} index={index} />
                    ))}
                </div>

                <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.02);
            }
          }

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
