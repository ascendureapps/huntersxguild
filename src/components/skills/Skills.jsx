import SkillCard from './SkillCard';
import '../../styles/Skills.css';
import useInView from '../../hooks/useInView';

const Skills = ({ skills }) => {
  const { targetRef, isInView } = useInView({ threshold: 0.2 });
  const groupedSkills = Object.entries(skills);

  return (
    <section id="skills" className="portfolio-section skills-section" ref={targetRef}>
      <div className="section-content">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-columns">
          {groupedSkills.map(([groupName, items], columnIndex) => (
            <div key={groupName} className="skill-column">
              <h3 className="skill-column-title">{groupName}</h3>
              <div className="skills-grid">
                {items.map((skill, index) => (
                  <SkillCard
                    key={`${groupName}-${skill.name}`}
                    skill={skill}
                    index={columnIndex + index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
