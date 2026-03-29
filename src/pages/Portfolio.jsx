import { useState } from 'react';
import '../styles/Portfolio.css';
import Introduction from '../components/introduction/Introduction';
import Skills from '../components/skills/Skills';
import Experiences from '../components/experiences/Experiences';
import Certificates from '../components/certificates/Certificates';
import Education from '../components/education/Education';
import Projects from '../components/projects/Projects';
import {
  personalInfo,
  skills,
  experiences,
  certificates,
  education,
  projects
} from '../utils/portfolioData';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <Introduction personalInfo={personalInfo} />
      <Skills skills={skills} />
      <Experiences experiences={experiences} />
      <Education education={education} />
      <Certificates certificates={certificates} />
      <Projects projects={projects} />
    </div>
  );
};

export default Portfolio;
