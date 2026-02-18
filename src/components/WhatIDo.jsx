import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiCode, FiDatabase, FiCloud, FiLayers, FiTerminal } from 'react-icons/fi';
import './WhatIDo.css';

const expertise = [
    {
        title: 'AI & Machine Learning',
        description: 'Building intelligent systems, AI agents, and ML models that solve real-world problems.',
        icon: <FiCpu />,
        tools: ['Python', 'TensorFlow', 'PyTorch', 'LLMs', 'NLP', 'OpenCV', 'Scikit-learn'],
        gradient: 'linear-gradient(135deg, #c2a4ff, #8b5cf6)',
    },
    {
        title: 'Full-Stack Development',
        description: 'Crafting modern, responsive web applications with scalable architectures.',
        icon: <FiCode />,
        tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker'],
        gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function WhatIDo() {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="expertise" className="expertise">
            <div className="section-container">
                <motion.div
                    className="expertise-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <span className="section-label">Expertise</span>
                    <h2 className="section-title">What I Do</h2>
                    <p className="section-description">
                        Combining AI intelligence with full-stack craftsmanship to build
                        products that are both smart and beautiful.
                    </p>
                </motion.div>

                <motion.div
                    className="expertise-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {expertise.map((item, idx) => (
                        <motion.div key={idx} className="expertise-card" variants={cardVariants}>
                            <div className="expertise-card-glow" style={{ background: item.gradient }}></div>
                            <div className="expertise-card-icon" style={{ background: item.gradient }}>
                                {item.icon}
                            </div>
                            <h3 className="expertise-card-title">{item.title}</h3>
                            <p className="expertise-card-desc">{item.description}</p>
                            <div className="expertise-card-tools">
                                {item.tools.map((tool, i) => (
                                    <span key={i} className="expertise-tool-tag">{tool}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
