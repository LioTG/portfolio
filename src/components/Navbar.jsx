import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

    const projectLinks = [
        { name: 'Ultimate PC Simulator', href: '/projects/ultimate-pc-simulator' },
        { name: 'Build A PC', href: '#projects' },
        { name: 'Urban Safe', href: '/projects/urban-safe' },
        { name: 'L-Shop Bot', href: '#projects' },
        { name: 'PC Creator Mod', href: '#projects' },
    ];

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

    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (location.pathname === '/') {
            const element = document.querySelector(href);
            if (element) {
                // Small delay to allow mobile menu to close and prevent layout thrashing
                setTimeout(() => {
                    const navHeight = 80; // Approximate navbar height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 100);
            }
        } else {
            navigate('/' + href);
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
                    ? '1px solid rgba(225, 184, 92, 0.1)'
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
                    LioT&G
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
                        <li key={item.name}
                            style={{ position: 'relative' }}
                            onMouseEnter={() => item.name === 'Proyectos' && setIsProjectsOpen(true)}
                            onMouseLeave={() => item.name === 'Proyectos' && setIsProjectsOpen(false)}
                        >
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
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--color-neon-purple)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--color-text-secondary)';
                                }}
                            >
                                {item.name}
                                {item.name === 'Proyectos' && <ChevronDown size={14} />}
                            </a>

                            {item.name === 'Proyectos' && (
                                <AnimatePresence>
                                    {isProjectsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                background: 'rgba(10, 10, 15, 0.95)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(225, 184, 92, 0.2)',
                                                borderRadius: 'var(--border-radius-md)',
                                                padding: '0.5rem',
                                                minWidth: '220px',
                                                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
                                                zIndex: 1000
                                            }}
                                        >
                                            {projectLinks.map((project) => (
                                                <a
                                                    key={project.name}
                                                    href={project.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setIsProjectsOpen(false);
                                                        if (project.href.startsWith('/')) {
                                                            navigate(project.href);
                                                        } else {
                                                            handleNavClick(e, project.href);
                                                        }
                                                    }}
                                                    style={{
                                                        display: 'block',
                                                        padding: '0.75rem 1rem',
                                                        color: 'var(--color-text-secondary)',
                                                        fontSize: '0.9rem',
                                                        textDecoration: 'none',
                                                        borderRadius: 'var(--border-radius-sm)',
                                                        transition: 'all 0.2s',
                                                        whiteSpace: 'nowrap'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = 'rgba(225, 184, 92, 0.1)';
                                                        e.currentTarget.style.color = 'white';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'transparent';
                                                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                                                    }}
                                                >
                                                    {project.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
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
                            borderTop: '1px solid rgba(225, 184, 92, 0.1)',
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
                                    {item.name === 'Proyectos' ? (
                                        <div>
                                            <div
                                                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                                                style={{
                                                    fontFamily: 'var(--font-display)',
                                                    fontSize: 'var(--text-lg)',
                                                    fontWeight: 500,
                                                    color: 'var(--color-text-secondary)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: 'var(--spacing-sm)',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={20}
                                                    style={{
                                                        transform: isMobileProjectsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        transition: 'transform 0.3s'
                                                    }}
                                                />
                                            </div>
                                            <AnimatePresence>
                                                {isMobileProjectsOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        style={{ overflow: 'hidden', paddingLeft: '1rem' }}
                                                    >
                                                        {projectLinks.map((project) => (
                                                            <a
                                                                key={project.name}
                                                                href={project.href}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setIsMobileMenuOpen(false);
                                                                    if (project.href.startsWith('/')) {
                                                                        navigate(project.href);
                                                                    } else {
                                                                        handleNavClick(e, project.href);
                                                                    }
                                                                }}
                                                                style={{
                                                                    display: 'block',
                                                                    padding: '0.5rem 1rem',
                                                                    color: 'var(--color-text-secondary)',
                                                                    fontSize: '0.9rem',
                                                                    textDecoration: 'none',
                                                                    fontFamily: 'var(--font-body)',
                                                                }}
                                                            >
                                                                {project.name}
                                                            </a>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
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
                                    )}
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
