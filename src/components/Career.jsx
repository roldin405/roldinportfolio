import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Career.css';

const timeline = [
    {
        year: '2025',
        title: 'AI Engineering',
        description: 'Diving deep into AI agents, LLMs, and building next-gen intelligent systems and personal assistants.',
        status: 'current',
    },
    {
        year: '2024',
        title: 'Full-Stack Development',
        description: 'Building scalable web applications with React, Next.js, Node.js, and cloud technologies.',
    },
    {
        year: '2023',
        title: 'Python Development',
        description: 'Started building automation tools, scripts, and exploring machine learning with Python.',
    },
    {
        year: '2022',
        title: 'The Beginning',
        description: 'Started the journey into tech, learning programming fundamentals and building first projects.',
    },
];

export default function Career() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="career" className="career">
            <div className="section-container" ref={ref}>
                <motion.div
                    className="career-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Journey</span>
                    <h2 className="section-title">My Career & Experience</h2>
                    <p className="section-description">
                        A timeline of my growth as a developer, from fundamentals to AI engineering.
                    </p>
                </motion.div>

                <div className="career-timeline">
                    <div className="career-timeline-line"></div>
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`career-item ${item.status === 'current' ? 'career-item-current' : ''}`}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <div className="career-item-dot">
                                {item.status === 'current' && <span className="career-dot-pulse"></span>}
                            </div>
                            <div className="career-item-content">
                                <span className="career-item-year">{item.year}</span>
                                <h3 className="career-item-title">{item.title}</h3>
                                <p className="career-item-desc">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
