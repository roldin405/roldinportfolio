import { useState, useEffect } from 'react';
import { FiGithub } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Career', href: '#career' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setScrolled(currentScroll > 50);
            setHidden(currentScroll > lastScroll && currentScroll > 300);
            setLastScroll(currentScroll);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${hidden ? 'navbar-hidden' : ''}`}>
            <div className="navbar-inner">
                <a href="#hero" className="navbar-brand">
                    <span className="navbar-brand-accent">R</span>oldin
                </a>

                <button
                    className={`navbar-hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="navbar-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-link navbar-github"
                    >
                        <FiGithub size={18} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
