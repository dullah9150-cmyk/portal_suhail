import { FiExternalLink, FiAward } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

const certs = [
  {
    title: 'React JS – Complete Guide',
    issuer: 'Udemy',
    date: 'March 2024',
    credentialId: 'UC-abc123xyz',
    color: '#61dafb',
    // Replace with your actual certificate image
    image: 'https://placehold.co/400x260/1a1a2e/61dafb?text=React+Certificate&font=syne',
    link: 'https://udemy.com/certificate/UC-abc123xyz',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'January 2024',
    credentialId: 'FCC-jads-2024',
    color: '#0a0a23',
    image: 'https://placehold.co/400x260/0a0a23/f5f5f5?text=JS+Certification&font=syne',
    link: 'https://freecodecamp.org/certification',
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'November 2023',
    credentialId: 'FCC-rwd-2023',
    color: '#e84545',
    image: 'https://placehold.co/400x260/e84545/ffffff?text=Web+Design&font=syne',
    link: 'https://freecodecamp.org/certification',
  },
  {
    title: 'Frontend Development Libraries',
    issuer: 'freeCodeCamp',
    date: 'December 2023',
    credentialId: 'FCC-fdl-2023',
    color: '#903749',
    image: 'https://placehold.co/400x260/903749/ffffff?text=Frontend+Libraries&font=syne',
    link: 'https://freecodecamp.org/certification',
  },
];

export default function Certifications() {
  useScrollReveal();

  return (
    <section id="certifications" className="certs-section">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">My Credentials</h2>
          <p className="section-subtitle">
            Industry certifications that validate my skills and continuous commitment to learning.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="cert-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="cert-img-wrap">
                <img src={cert.image} alt={cert.title} className="cert-img" />
                <div className="cert-overlay">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                    <FiExternalLink /> View Certificate
                  </a>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-issuer-row">
                  <div className="cert-icon"><FiAward /></div>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-id">ID: {cert.credentialId}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
