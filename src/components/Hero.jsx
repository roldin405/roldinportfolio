import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
                <div className="hero-orb hero-orb-3"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="hero-content section-container">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="hero-badge-dot"></span>
                    Available for opportunities
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Hi, I'm <span className="hero-name">Roldin</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    AI & Full-Stack Developer
                </motion.p>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Building intelligent systems, modern web apps, and everything in between.
                    Passionate about crafting elegant solutions to complex problems.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                >
                    <a href="#projects" className="hero-btn hero-btn-primary">
                        View My Work
                    </a>
                    <a href="#contact" className="hero-btn hero-btn-secondary">
                        Get In Touch
                    </a>
                </motion.div>

                <motion.div
                    className="hero-socials"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                        <FiGithub size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                        <FiLinkedin size={20} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <span>Scroll</span>
                <FiArrowDown className="hero-scroll-icon" />
            </motion.div>
        </section>
    );
}
