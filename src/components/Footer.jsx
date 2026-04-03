import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/alexmorgan' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/alexmorgan' },
  { icon: <FiTwitter />, label: 'Twitter', href: 'https://twitter.com/alexmorgan' },
  { icon: <FiMail />, label: 'Email', href: 'mailto:alex.morgan@example.com' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              MD<span className="logo-accent">Suhail</span>
              <span className="logo-bracket">/&gt;</span>
            </div>
            <p className="footer-tagline">
              Building modern web experiences with React & passion.
            </p>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-col">
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={e => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><a href="#contact">Frontend Development</a></li>
              <li><a href="#contact">UI/UX Implementation</a></li>
              <li><a href="#contact">React Applications</a></li>
              <li><a href="#contact">Performance Optimization</a></li>
              <li><a href="#contact">Code Review</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Mohaemed Suhail. Made with <FiHeart className="heart-icon" /> using React.
          </p>
          <button className="back-top-btn" onClick={scrollToTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
