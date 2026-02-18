import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import './Projects.css';

const projects = [
    {
        title: 'AI Chatbot Platform',
        description: 'An intelligent chatbot powered by LLMs with natural language understanding, context awareness, and multi-turn conversations.',
        tools: ['Python', 'LLMs', 'FastAPI', 'React'],
        category: 'AI / LLM',
        github: 'https://github.com',
        live: '#',
        featured: true,
    },
    {
        title: 'E-Commerce Dashboard',
        description: 'A modern full-stack e-commerce platform with real-time analytics, payment processing, and inventory management.',
        tools: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'Full Stack',
        github: 'https://github.com',
        live: '#',
        featured: true,
    },
    {
        title: 'ML Prediction Engine',
        description: 'Machine learning model for predictive analytics with automated data pipeline and model training capabilities.',
        tools: ['Python', 'TensorFlow', 'Scikit-learn', 'Docker'],
        category: 'AI / ML',
        github: 'https://github.com',
        featured: false,
    },
    {
        title: 'Task Automation Tool',
        description: 'Desktop automation assistant that handles repetitive tasks, file management, and system monitoring.',
        tools: ['Python', 'PyAutoGUI', 'OpenCV'],
        category: 'Automation',
        github: 'https://github.com',
        featured: false,
    },
    {
        title: 'Real-Time Chat App',
        description: 'A real-time messaging application with WebSocket support, message encryption, and rich media sharing.',
        tools: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
        category: 'Full Stack',
        github: 'https://github.com',
        live: '#',
        featured: false,
    },
    {
        title: 'Portfolio Generator',
        description: 'A CLI tool that generates beautiful developer portfolios from YAML configuration files.',
        tools: ['Node.js', 'Handlebars', 'CSS'],
        category: 'Developer Tool',
        github: 'https://github.com',
        featured: false,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

export default function Projects() {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

    return (
        <section id="projects" className="projects">
            <div className="section-container" ref={ref}>
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">My Work</h2>
                    <p className="section-description">
                        A collection of projects from GitHub — AI tools, web apps, and everything I've been building.
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className={`project-card ${project.featured ? 'project-card-featured' : ''}`}
                            variants={cardVariants}
                        >
                            {project.featured && (
                                <div className="project-featured-badge">
                                    <FiStar size={12} />
                                    Featured
                                </div>
                            )}
                            <div className="project-card-top">
                                <span className="project-category">{project.category}</span>
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                                            <FiGithub size={16} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer" title="Live Demo">
                                            <FiExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tools">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="project-tool">{tool}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="projects-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-github-btn"
                    >
                        <FiGithub size={18} />
                        View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
