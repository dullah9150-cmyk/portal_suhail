import { Card } from 'antd';
import { FiCode, FiLayout, FiZap, FiHeart } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';
import suhailImage from "../assets/suhail2.jpeg";

const highlights = [
  { icon: <FiCode />, title: 'Clean Code', desc: 'I write maintainable, scalable, and readable code.' },
  { icon: <FiLayout />, title: 'Responsive UI', desc: 'Every component works flawlessly on any device.' },
  { icon: <FiZap />, title: 'Performance', desc: 'Optimizing load times and runtime efficiency.' },
  { icon: <FiHeart />, title: 'Passion', desc: 'I love crafting delightful user experiences.' },
];

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Left */}
          <div className="about-left reveal-left">
            <div className="about-photo-wrap">
              {/* Replace with your photo */}
              <img
                src={suhailImage}
                alt="Alex Morgan"
                className="about-photo"
              />
              <div className="about-photo-badge">
                <span>2+</span>
                <small>Years of Experience</small>
              </div>
              <div className="about-photo-deco" />
            </div>
          </div>

          {/* Right */}
          <div className="about-right reveal-right">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Crafting Digital Experiences With Purpose</h2>
            <p className="about-text">
              I'm a passionate <strong>React Frontend Developer</strong> who loves turning complex ideas into beautiful, functional web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in building responsive interfaces that delight users.
            </p>
            <p className="about-text">
              My journey in web development started with curiosity and grew into a deep love for the craft. I'm constantly learning and keeping up with the latest trends in frontend technology to deliver modern, high-quality solutions.
            </p>
            <p className="about-text">
              When I'm not coding, I enjoy exploring new UI design patterns, contributing to open source, and mentoring junior developers.
            </p>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <Card key={i} className="highlight-card" size="small">
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <div className="highlight-title">{h.title}</div>
                    <div className="highlight-desc">{h.desc}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
