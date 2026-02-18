import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight } from 'react-icons/fi';
import './Contact.css';

const socialLinks = [
    { icon: <FiGithub size={20} />, label: 'GitHub', href: 'https://github.com' },
    { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <FiTwitter size={20} />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <FiMail size={20} />, label: 'Email', href: 'mailto:hello@example.com' },
];

export default function Contact() {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="contact" className="contact">
            <div className="contact-bg-orbs">
                <div className="contact-orb contact-orb-1"></div>
                <div className="contact-orb contact-orb-2"></div>
            </div>
            <div className="section-container" ref={ref}>
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">Contact</span>
                    <h2 className="contact-title">Let's Work Together</h2>
                    <p className="contact-description">
                        Got a project in mind? I'm always open to discussing new opportunities,
                        creative ideas, or ways to help bring your vision to life.
                    </p>

                    <a href="mailto:hello@example.com" className="contact-email-btn">
                        <FiMail size={20} />
                        hello@example.com
                        <FiArrowUpRight size={16} className="contact-email-arrow" />
                    </a>

                    <div className="contact-socials">
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-social-link"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                                title={link.label}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <footer className="footer">
                    <div className="footer-line"></div>
                    <div className="footer-content">
                        <p className="footer-copy">
                            © {new Date().getFullYear()} <span className="footer-accent">Roldin</span>. All rights reserved.
                        </p>
                        <p className="footer-built">
                            Built with React & passion
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
}
