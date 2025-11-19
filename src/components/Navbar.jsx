import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Contacto', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 'var(--z-fixed)',
                transition: 'all var(--transition-base)',
                background: isScrolled
                    ? 'rgba(10, 10, 15, 0.9)'
                    : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled
                    ? '1px solid rgba(168, 85, 247, 0.1)'
                    : '1px solid transparent',
            }}
        >
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '80px'
            }}>
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, '#home')}
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        cursor: 'pointer',
                    }}
                >
                    L.Studios
                </a>

                {/* Desktop Navigation */}
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                    gap: 'var(--spacing-lg)',
                    alignItems: 'center',
                    margin: 0,
                    padding: 0,
                }}
                    className="nav-desktop"
                >
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 500,
                                    color: 'var(--color-text-secondary)',
                                    transition: 'color var(--transition-base)',
                                    position: 'relative',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = 'var(--color-neon-purple)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'var(--color-text-secondary)';
                                }}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        padding: 'var(--spacing-xs)',
                    }}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="nav-mobile-menu"
                        style={{
                            display: 'none',
                            background: 'rgba(10, 10, 15, 0.98)',
                            borderTop: '1px solid rgba(168, 85, 247, 0.1)',
                            overflow: 'hidden',
                        }}
                    >
                        <ul style={{
                            listStyle: 'none',
                            padding: 'var(--spacing-lg)',
                            margin: 0,
                        }}>
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{ marginBottom: 'var(--spacing-md)' }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: 'var(--text-lg)',
                                            fontWeight: 500,
                                            color: 'var(--color-text-secondary)',
                                            display: 'block',
                                            padding: 'var(--spacing-sm)',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
          .nav-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
