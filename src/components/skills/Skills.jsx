import { useMemo } from 'react';
import SkillCard from './SkillCard';
import '../../styles/Skills.css';
import useInView from '../../hooks/useInView';

const Skills = ({ skills }) => {
  const { targetRef, isInView } = useInView({ threshold: 0.2 });
  const groupedSkills = Object.entries(skills);

  const animIndexByKey = useMemo(() => {
    const map = new Map();
    let seq = 0;
    for (const [groupName, items] of Object.entries(skills)) {
      for (const skill of items) {
        map.set(`${groupName}-${skill.name}`, seq++);
      }
    }
    return map;
  }, [skills]);

  return (
    <section id="skills" className="portfolio-section skills-section" ref={targetRef}>
      <div className="section-content">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-columns">
          {groupedSkills.map(([groupName, items]) => (
            <div key={groupName} className="skill-column">
              <h3 className="skill-column-title">{groupName}</h3>
              <div className="skills-grid">
                {items.map((skill) => (
                  <SkillCard
                    key={`${groupName}-${skill.name}`}
                    skill={skill}
                    index={animIndexByKey.get(`${groupName}-${skill.name}`) ?? 0}
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
