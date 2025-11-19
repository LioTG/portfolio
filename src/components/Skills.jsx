import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Workflow, Cpu } from 'lucide-react';
import { useSpotlight } from '../hooks/useSpotlight';

const SkillCategoryCard = ({ category, categoryIndex }) => {
    const spotlightRef = useSpotlight();

    return (
        <motion.div
            ref={spotlightRef}
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="card"
            style={{
                width: '100%',
                maxWidth: '450px',
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)',
            }}>
                <div style={{ color: category.color }}>
                    {category.icon}
                </div>
                <h3 style={{
                    fontSize: 'var(--text-xl)',
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-display)',
                    margin: 0,
                }}>
                    {category.title}
                </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 'var(--spacing-xs)',
                        }}>
                            <span style={{
                                fontSize: 'var(--text-sm)',
                                color: 'var(--color-text-secondary)',
                                fontWeight: 500,
                            }}>
                                {skill.name}
                            </span>
                            <span style={{
                                fontSize: 'var(--text-sm)',
                                color: category.color,
                                fontWeight: 600,
                            }}>
                                {skill.level}%
                            </span>
                        </div>
                        <div style={{
                            height: '6px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: 'var(--border-radius-full)',
                            overflow: 'hidden',
                        }}>
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                style={{
                                    height: '100%',
                                    background: category.color,
                                    borderRadius: 'var(--border-radius-full)',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: 'Desarrollo',
            icon: <Code2 size={28} />,
            color: 'var(--color-neon-purple)',
            skills: [
                { name: 'C#', level: 70 },
                { name: 'Unity', level: 80 },
                { name: 'JavaScript', level: 60 },
                { name: 'C++', level: 70 },
            ],
        },
        {
            title: 'Diseño',
            icon: <Palette size={28} />,
            color: 'var(--color-neon-blue)',
            skills: [
                { name: 'Figma', level: 75 },
                { name: 'Adobe XD', level: 90 },
                { name: 'UI/UX Design', level: 80 },
                { name: 'Prototyping', level: 80 },
            ],
        },
        {
            title: 'Conocimientos Complementarios',
            icon: <Cpu size={28} />,
            color: 'var(--color-neon-cyan)',
            skills: [
                { name: 'Hardware PC', level: 90 },
                { name: 'Liderazgo', level: 80 },
                { name: 'Game Design', level: 85 },
                { name: 'Project Management', level: 75 },
            ],
        },
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Habilidades</h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                    gap: 'var(--spacing-xl)',
                    justifyItems: 'center',
                }}>
                    {skillCategories.map((category, categoryIndex) => (
                        <SkillCategoryCard key={category.title} category={category} categoryIndex={categoryIndex} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
