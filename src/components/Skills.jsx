import { Card, Progress } from 'antd';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, percent: 95, color: '#e34f26', category: 'Core' },
  { name: 'CSS3', icon: <FaCss3Alt />, percent: 90, color: '#264de4', category: 'Core' },
  { name: 'JavaScript', icon: <FaJs />, percent: 85, color: '#f7df1e', category: 'Core' },
  { name: 'React', icon: <FaReact />, percent: 82, color: '#61dafb', category: 'Framework' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, percent: 78, color: '#38bdf8', category: 'Framework' },
  { name: 'Node.js', icon: <FaNodeJs />, percent: 65, color: '#8cc84b', category: 'Backend' },
  { name: 'Git', icon: <FaGitAlt />, percent: 80, color: '#f05032', category: 'Tool' },
  { name: 'Figma', icon: <FaFigma />, percent: 70, color: '#a259ff', category: 'Design' },
];

export default function Skills() {
  useScrollReveal();

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            A collection of technologies and tools I've been working with throughout my frontend journey.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <Card
              key={skill.name}
              className="skill-card reveal"
              style={{ '--delay': `${i * 0.08}s`, transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-icon-wrap" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-info">
                <div className="skill-header-row">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>
                <Progress
                  percent={skill.percent}
                  strokeColor={{
                    '0%': 'var(--accent)',
                    '100%': 'var(--accent-secondary)',
                  }}
                  trailColor="var(--progress-bg)"
                  strokeWidth={6}
                  style={{ marginBottom: 0 }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
