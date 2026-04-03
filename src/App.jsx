import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProgressiveSection from './components/ProgressiveSection';

import './styles/global.css';
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />

        <main>
          <ProgressiveSection>
            <Hero />
          </ProgressiveSection>

          <ProgressiveSection>
            <About />
          </ProgressiveSection>

          <ProgressiveSection>
            <Skills />
          </ProgressiveSection>

          <ProgressiveSection>
            <Education />
          </ProgressiveSection>

          <ProgressiveSection>
            <Certifications />
          </ProgressiveSection>

          <ProgressiveSection>
            <Contact />
          </ProgressiveSection>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;