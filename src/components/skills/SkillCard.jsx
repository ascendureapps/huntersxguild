const SkillCard = ({ skill, index, isInView }) => {
  return (
    <div
      className={`skill-card ${isInView ? 'skill-card-fade-in' : 'skill-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <h3>{skill.name}</h3>
      <span className="skill-level">{skill.level}</span>
    </div>
  );
};

export default SkillCard;
