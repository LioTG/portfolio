import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

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
            username: 'Lionel Chávez',
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
                        <motion.a
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
                    ))}
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                    marginTop: 'var(--spacing-3xl)',
                    paddingTop: 'var(--spacing-xl)',
                    borderTop: '1px solid rgba(168, 85, 247, 0.1)',
                    textAlign: 'center',
                }}
            >
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-sm)',
                }}>
                    © 2025 Lionel Chávez | L.Studios | Diseñado y desarrollado con{' '}
                    <span style={{ color: 'var(--color-neon-purple)' }}>♥</span>
                </p>
            </motion.footer>
        </section>
    );
};

export default Contact;
