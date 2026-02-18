import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiFileText, FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';
import './Resume.css';

const resumeHighlights = [
    {
        icon: <FiBriefcase />,
        title: 'Experience',
        items: ['AI Engineering (Current)', 'Full-Stack Development', 'Python Development', 'Freelance Projects'],
    },
    {
        icon: <FiBookOpen />,
        title: 'Education & Learning',
        items: ['Self-taught Developer', 'Online Certifications', 'Competitive Programming', 'Continuous Learner'],
    },
    {
        icon: <FiAward />,
        title: 'Key Skills',
        items: ['AI / Machine Learning', 'Full-Stack Web Dev', 'API Design & Architecture', 'DevOps & Cloud'],
    },
];

export default function Resume() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="resume" className="resume">
            <div className="section-container" ref={ref}>
                <motion.div
                    className="resume-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Resume</span>
                    <h2 className="section-title">My Resume</h2>
                    <p className="section-description">
                        A snapshot of my skills, experience, and qualifications.
                    </p>
                </motion.div>

                <motion.div
                    className="resume-grid"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {resumeHighlights.map((section, idx) => (
                        <div key={idx} className="resume-card">
                            <div className="resume-card-icon">{section.icon}</div>
                            <h3 className="resume-card-title">{section.title}</h3>
                            <ul className="resume-card-list">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    className="resume-download"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a href="/resume.pdf" download className="resume-download-btn">
                        <FiDownload size={18} />
                        Download Full Resume
                    </a>
                    <p className="resume-download-hint">
                        <FiFileText size={14} />
                        PDF format • Last updated Feb 2026
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
