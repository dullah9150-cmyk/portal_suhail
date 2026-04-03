import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const categories = ['All', 'React', 'JavaScript', 'Full Stack'];

const projects = [
  {
    title: 'TaskFlow — Project Manager',
    desc: 'A full-featured project management app with drag-and-drop Kanban boards, real-time updates, and team collaboration features.',
    image: 'https://placehold.co/600x360/e84545/ffffff?text=TaskFlow&font=syne',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Full Stack',
    live: 'https://taskflow-demo.vercel.app',
    github: 'https://github.com/alexmorgan/taskflow',
  },
  {
    title: 'ShopLens — E-Commerce UI',
    desc: 'A sleek, modern e-commerce interface with product filtering, cart management, and a fully responsive design built with React and Tailwind.',
    image: 'https://placehold.co/600x360/903749/ffffff?text=ShopLens&font=syne',
    tags: ['React', 'Tailwind CSS', 'Context API', 'Fake Store API'],
    category: 'React',
    live: 'https://shoplens.vercel.app',
    github: 'https://github.com/alexmorgan/shoplens',
  },
  {
    title: 'WeatherNow — Weather App',
    desc: 'A beautiful weather dashboard showing real-time forecasts, interactive charts, and location-based weather data using OpenWeather API.',
    image: 'https://placehold.co/600x360/264de4/ffffff?text=WeatherNow&font=syne',
    tags: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
    category: 'JavaScript',
    live: 'https://weathernow-app.vercel.app',
    github: 'https://github.com/alexmorgan/weathernow',
  },
  {
    title: 'DevBlog — Content Platform',
    desc: 'A developer-focused blog platform with markdown support, syntax highlighting, reading time estimation, and a CMS-backed admin panel.',
    image: 'https://placehold.co/600x360/1a1a2e/e84545?text=DevBlog&font=syne',
    tags: ['React', 'Next.js', 'Contentful', 'SCSS'],
    category: 'React',
    live: 'https://devblog.vercel.app',
    github: 'https://github.com/alexmorgan/devblog',
  },
  {
    title: 'CryptoTracker — Dashboard',
    desc: 'A live cryptocurrency tracking dashboard with animated charts, portfolio management, and real-time price feeds via CoinGecko API.',
    image: 'https://placehold.co/600x360/0a0a23/61dafb?text=CryptoTracker&font=syne',
    tags: ['React', 'CoinGecko API', 'Recharts', 'Ant Design'],
    category: 'React',
    live: 'https://crypto-tracker-demo.vercel.app',
    github: 'https://github.com/alexmorgan/crypto-tracker',
  },
  {
    title: 'NoteVault — Smart Notes',
    desc: 'A note-taking app with rich text editing, categorization, search, and cloud sync — inspired by Notion\'s simplicity.',
    image: 'https://placehold.co/600x360/f59e0b/1a1a2e?text=NoteVault&font=syne',
    tags: ['JavaScript', 'LocalStorage', 'Quill.js', 'Bootstrap'],
    category: 'JavaScript',
    live: 'https://notevault-app.vercel.app',
    github: 'https://github.com/alexmorgan/notevault',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  useScrollReveal();

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills in frontend development and problem-solving.
          </p>
        </div>

        <div className="filter-tabs reveal">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-links-overlay">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link ghost">
                    <FiGithub /> GitHub
                  </a>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
