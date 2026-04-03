import { Timeline, Card } from 'antd';
import { FiBookOpen, FiAward, FiMapPin, FiCalendar } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

const education = [
  {
    type: 'college',
    icon: <FiBookOpen />,
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Francis Xavier Engineering College',
    location: 'Tirunelveli',
    year: '2021 – 2025',
    gpa: 'GPA: 3.9 / 4.0',
     desc: 'Focused on software engineering and web technologies. Final year project: "Building Scalable SPAs with React ',
},
  {
    type: 'school',
    icon: <FiAward />,
    degree: 'Higher Studies ',
    institution: 'Golden Jubilee Matriculation Higher Secondary School',
    location: 'Melapalyam',
    year: '2010 – 2021',
     gpa: 'Percentage: 92%',
     desc: 'Graduated with honors. Active member of the computer science club. Won the regional coding competition in 2020.',
  },
];

export default function Education() {
  useScrollReveal();

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-tag">Education</span>
          <h2 className="section-title">My Academic Journey</h2>
          <p className="section-subtitle">
            The educational milestones that shaped my foundation in technology and software development.
          </p>
        </div>

        <div className="education-timeline reveal">
          <Timeline
            mode="left"
            items={education.map((edu) => ({
              dot: (
                <div className="edu-dot">
                  {edu.icon}
                </div>
              ),
              children: (
                <Card className="edu-card">
                  <div className="edu-card-inner">
                    <div className="edu-top">
                      <div>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <div className="edu-institution">{edu.institution}</div>
                      </div>
                      <div className="edu-badge">{edu.gpa}</div>
                    </div>
                    <div className="edu-meta">
                      <span className="edu-meta-item"><FiMapPin /> {edu.location}</span>
                      <span className="edu-meta-item"><FiCalendar /> {edu.year}</span>
                    </div>
                    <p className="edu-desc">{edu.desc}</p>
                  </div>
                </Card>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
