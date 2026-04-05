const SkillCard = ({ skill, index, isInView, staggerSec = 0.3 }) => {
  const level = skill.level?.trim().toLowerCase() ?? '';
  const isAdvanced = level === 'advanced';
  const isBeginner = level === 'beginner';
  const isIntermediate = level === 'intermediate';

  const levelClass = [
    'skill-level',
    isAdvanced && 'skill-level--advanced',
    isBeginner && 'skill-level--beginner',
    isIntermediate && 'skill-level--intermediate',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={`skill-card ${isInView ? 'skill-card-fade-in' : 'skill-card-fade-out'}`}
      style={{ animationDelay: `${index * staggerSec}s` }}
    >
      <h3>{skill.name}</h3>
      <span className={levelClass}>
        {isAdvanced ? (
          <>
            <span className="skill-level-sparkle skill-level-sparkle--1" aria-hidden>
              ✦
            </span>
            <span className="skill-level-sparkle skill-level-sparkle--2" aria-hidden>
              ✦
            </span>
            <span className="skill-level-sparkle skill-level-sparkle--3" aria-hidden>
              ✧
            </span>
          </>
        ) : null}
        {skill.level}
      </span>
    </div>
  );
};

export default SkillCard;
