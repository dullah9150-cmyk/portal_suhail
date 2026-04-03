import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Switch } from 'antd';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''} ${isDark ? 'dark' : ''}`}>
      <div className="navbar-inner">
        <a 
          className="navbar-logo" 
          href="#home" 
          onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
        >
          MD<span className="logo-accent">Suhail</span>
        </a>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="theme-toggle desktop-theme">
            <FiSun className={`toggle-icon sun ${!isDark ? 'active' : ''}`} />
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              size="small"
              className="theme-switch"
            />
            <FiMoon className={`toggle-icon moon ${isDark ? 'active' : ''}`} />
          </div>
          <button 
            className="hamburger" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          {/* Removed the duplicate close button from here */}
        </div>
        
        <div className="mobile-menu-links">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="mobile-menu-footer">
          <div className="mobile-theme-toggle">
            <FiSun className={`toggle-icon sun ${!isDark ? 'active' : ''}`} />
            <Switch 
              checked={isDark} 
              onChange={toggleTheme} 
              size="small"
              className="theme-switch" 
            />
            <FiMoon className={`toggle-icon moon ${isDark ? 'active' : ''}`} />
            <span className="mobile-theme-text">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}