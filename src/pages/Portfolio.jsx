import { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import Introduction from '../components/introduction/Introduction';
import Skills from '../components/skills/Skills';
import Experiences from '../components/experiences/Experiences';
import Certificates from '../components/certificates/Certificates';
import Education from '../components/education/Education';
import Projects from '../components/projects/Projects';
import {
  personalInfo,
  aboutMe,
  skills,
  experiences,
  certificates,
  education,
  projects
} from '../utils/portfolioData';

const PAGE_BG_LIGHT = '#ffffff';
const PAGE_BG_DARK = '#020617';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const bg = isDarkMode ? PAGE_BG_DARK : PAGE_BG_LIGHT;
    if (isDarkMode) {
      root.classList.add('app-dark');
    } else {
      root.classList.remove('app-dark');
    }
    root.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', bg);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <button
        className={`theme-toggle ${isDarkMode ? 'theme-toggle--on' : ''}`}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="theme-toggle-thumb" />
        <span className="theme-toggle-label">
        </span>
      </button>
      <Introduction personalInfo={personalInfo} aboutMe={aboutMe} />
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
      <Education education={education} />
      <Certificates certificates={certificates} />
      <Projects projects={projects} />
    </div>
  );
};

export default Portfolio;
