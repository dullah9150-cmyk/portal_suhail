import { useEffect, useRef } from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import './Hero.css';
import suhailImage from "../assets/suhail1.jpeg";

const roles = ['React Frontend Developer', 'JavaScript Developer'];

export default function Hero() {
  const roleRef = useRef(null);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;
    const type = () => {
      const current = roles[indexRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
        } else {
          timeout = setTimeout(type, 80);
        }
      } else {
        charRef.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          indexRef.current = (indexRef.current + 1) % roles.length;
          timeout = setTimeout(type, 400);
        } else {
          timeout = setTimeout(type, 40);
        }
      }
    };
    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Animated background */}
      <div className="hero-bg">
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-ring" />
          <div className="hero-avatar">
            {/* Replace with your photo */}
            <img
              src={suhailImage}
              alt="Lad Suhail"
            />
          </div>
          <div className="hero-status">
            <span className="status-dot" />
            Available for work
          </div>
        </div>

        <div className="hero-text">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">Mohamed Suhail and abdullah</h1>
          <div className="hero-role-wrap">
            <span className="hero-role-prefix">I'm a </span>
            <span className="hero-role" ref={roleRef}></span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-desc">
            I build responsive and modern web applications using React — with a focus on clean code, smooth interactions, and exceptional user experience.
          </p>
          <div className="hero-actions">
            <a href="#skills" className="btn-primary" onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior:'smooth'}); }}>
              View Skills <FiArrowRight />
            </a>
           <a
  href="/Mohamedsuhail-developer.pdf"
  className="btn-secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  View CV <FiDownload />
</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">1+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">8+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
