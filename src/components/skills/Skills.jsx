import { useMemo } from 'react';
import SkillCard from './SkillCard';
import '../../styles/Skills.css';
import useInView from '../../hooks/useInView';

const STAGGER_S = 0.3;

const Skills = ({ skills }) => {
  const { targetRef, isInView } = useInView({ threshold: 0.2 });

  /** One sequence index per column title, then each card in that column (section by section). */
  const columnsWithAnim = useMemo(() => {
    let seq = 0;
    return Object.entries(skills).map(([groupName, items]) => {
      const titleIndex = seq++;
      const cards = items.map((skill) => ({
        skill,
        index: seq++,
      }));
      return { groupName, cards, titleIndex };
    });
  }, [skills]);

  return (
    <section id="skills" className="portfolio-section skills-section" ref={targetRef}>
      <div className="section-content">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-columns">
          {columnsWithAnim.map(({ groupName, cards, titleIndex }) => (
            <div key={groupName} className="skill-column">
              <h3
                className={`skill-column-title skill-column-title--anim ${
                  isInView ? 'skill-card-fade-in' : 'skill-card-fade-out'
                }`}
                style={{ animationDelay: `${titleIndex * STAGGER_S}s` }}
              >
                {groupName}
              </h3>
              <div className="skills-grid">
                {cards.map(({ skill, index }) => (
                  <SkillCard
                    key={`${groupName}-${skill.name}`}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                    staggerSec={STAGGER_S}
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
