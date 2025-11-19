import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react';
import { useSpotlight } from '../hooks/useSpotlight';

const ContactCard = ({ link, index }) => {
    const spotlightRef = useSpotlight();

    return (
        <motion.a
            ref={spotlightRef}
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card"
            style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            <div style={{
                color: link.color,
                marginBottom: 'var(--spacing-md)',
            }}>
                {link.icon}
            </div>
            <h3 style={{
                fontSize: 'var(--text-xl)',
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-display)',
            }}>
                {link.name}
            </h3>
            <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
            }}>
                {link.username}
            </p>
        </motion.a>
    );
};

const Contact = () => {
    const contactLinks = [
        {
            name: 'GitHub',
            icon: <Github size={28} />,
            url: 'https://github.com/LioTG',
            username: '@LioTG',
            color: 'var(--color-neon-purple)',
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={28} />,
            url: 'https://linkedin.com/in/lionel-chavez-carrasco-5883b8250',
            username: 'Lionel Chavez Carrasco',
            color: 'var(--color-neon-blue)',
        },
        {
            name: 'Email',
            icon: <Mail size={28} />,
            url: 'mailto:lionelchavezcarrasco@gmail.com',
            username: 'lionelchavezcarrasco@gmail.com',
            color: 'var(--color-neon-green)',
        },
    ];

    return (
        <section id="contact" className="section" style={{
            background: 'var(--color-bg-secondary)',
            paddingBottom: 'var(--spacing-2xl)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Contacto</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto var(--spacing-xl)',
                    }}
                >
                    <p style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.8,
                    }}>
                        ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme a través
                        de cualquiera de estos canales. Estoy siempre abierto a nuevas oportunidades y desafíos.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    maxWidth: '1000px',
                    margin: '0 auto',
                }}>
                    {contactLinks.map((link, index) => (
                        <ContactCard key={link.name} link={link} index={index} />
                    ))}
                </div>
            </div>

            {/* Enhanced Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                    marginTop: 'var(--spacing-3xl)',
                    paddingTop: 'var(--spacing-2xl)',
                    borderTop: '2px solid transparent',
                    backgroundImage: 'linear-gradient(var(--color-bg-secondary), var(--color-bg-secondary)), var(--gradient-primary)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                }}
            >
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-xl)',
                        marginBottom: 'var(--spacing-2xl)',
                        maxWidth: '900px',
                        margin: '0 auto var(--spacing-2xl) auto',
                    }}>
                        {/* About Section */}
                        <div>
                            <h3 style={{
                                fontSize: 'var(--text-2xl)',
                                fontWeight: 800,
                                fontFamily: 'var(--font-display)',
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: 'var(--spacing-md)',
                            }}>
                                L.Studios
                            </h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.7,
                                fontSize: 'var(--text-sm)',
                            }}>
                                Desarrollador de software apasionado por crear experiencias digitales innovadoras con enfoque en UX/UI y videojuegos.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 700,
                                fontFamily: 'var(--font-display)',
                                color: 'var(--color-text-primary)',
                                marginBottom: 'var(--spacing-md)',
                            }}>
                                Navegación
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                            }}>
                                {['Inicio', 'Sobre mí', 'Skills', 'Proyectos', 'Timeline', 'Contacto'].map((item, i) => (
                                    <li key={i} style={{ marginBottom: 'var(--spacing-xs)' }}>
                                        <a
                                            href={`#${item.toLowerCase().replace(' ', '')}`}
                                            style={{
                                                color: 'var(--color-text-secondary)',
                                                textDecoration: 'none',
                                                fontSize: 'var(--text-sm)',
                                                transition: 'color 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = 'var(--color-neon-purple)'}
                                            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 style={{
                                fontSize: 'var(--text-lg)',
                                fontWeight: 700,
                                fontFamily: 'var(--font-display)',
                                color: 'var(--color-text-primary)',
                                marginBottom: 'var(--spacing-md)',
                            }}>
                                Sígueme
                            </h4>
                            <div style={{
                                display: 'flex',
                                gap: 'var(--spacing-sm)',
                            }}>
                                {[
                                    { icon: <Github size={20} />, url: 'https://github.com/LioTG', color: 'var(--color-neon-purple)' },
                                    { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@liotg10', color: 'var(--color-neon-red)' },
                                    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/liotg10', color: 'var(--color-neon-pink)' },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            background: 'var(--color-bg-tertiary)',
                                            border: '1px solid rgba(168, 85, 247, 0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: social.color,
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                            e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}40`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div style={{
                        paddingTop: 'var(--spacing-xl)',
                        borderTop: '1px solid rgba(168, 85, 247, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 'var(--spacing-md)',
                    }}>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: 'var(--text-sm)',
                            margin: 0,
                        }}>
                            © 2025 Lionel Chavez | L.Studios | Diseñado y desarrollado con{' '}
                            <span style={{ color: 'var(--color-neon-purple)' }}>♥</span>
                        </p>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            fontSize: 'var(--text-xs)',
                            margin: 0,
                        }}>
                            Hecho con React + Vite
                        </p>
                    </div>
                </div>
            </motion.footer>
        </section>
    );
};

export default Contact;
