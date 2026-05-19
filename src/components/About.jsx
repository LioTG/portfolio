import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Target, Code } from 'lucide-react';
import { useSpotlight } from '../hooks/useSpotlight';

const HighlightCard = ({ item, index }) => {
    const spotlightRef = useSpotlight();

    return (
        <motion.div
            ref={spotlightRef}
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card"
            style={{
                width: '100%',
                maxWidth: '400px',
            }}
        >
            <div style={{
                color: 'var(--color-neon-purple)',
                marginBottom: 'var(--spacing-md)',
            }}>
                {item.icon}
            </div>
            <h3 style={{
                fontSize: 'var(--text-xl)',
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--color-text-primary)',
            }}>
                {item.title}
            </h3>
            <p style={{ color: 'var(--color-text-secondary)' }}>
                {item.description}
            </p>
        </motion.div>
    );
};

const About = () => {
    const highlights = [
        {
            icon: <GraduationCap size={32} />,
            title: 'UPC - 5to Ciclo',
            description: 'Estudiante de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas',
        },
        {
            icon: <Users size={32} />,
            title: 'Liderazgo',
            description: 'Experiencia en gestión de equipos con metodologías Scrum y Agile',
        },
        {
            icon: <Target size={32} />,
            title: 'UX/UI Design',
            description: 'Apasionado por crear experiencias de usuario intuitivas y atractivas',
        },
        {
            icon: <Code size={32} />,
            title: 'Desarrollo',
            description: 'Especializado en Unity, C#, C++ y tecnologías web modernas',
        },
    ];

    return (
        <section id="about" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Sobre mí</h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                    gap: 'var(--spacing-lg)',
                    marginBottom: 'var(--spacing-xl)',
                    justifyItems: 'center',
                }}>
                    {highlights.map((item, index) => (
                        <HighlightCard key={item.title} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'center',
                    }}
                >
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        lineHeight: 1.8,
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--spacing-md)',
                    }}>
                        Actualmente cursando el 5to ciclo de Ingeniería de Software en la UPC, combino mi pasión
                        por el desarrollo de videojuegos con un fuerte interés en el diseño UX/UI y las metodologías
                        ágiles. Mi experiencia abarca desde el desarrollo en Unity y C# hasta la creación de
                        aplicaciones web modernas con JavaScript.
                    </p>
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        lineHeight: 1.8,
                        color: 'var(--color-text-secondary)',
                    }}>
                        Me apasiona el hardware, los videojuegos y liderar equipos hacia el éxito mediante Scrum
                        y Lean UX. Busco constantemente aprender nuevas tecnologías y aplicar soluciones innovadoras
                        a problemas complejos.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
