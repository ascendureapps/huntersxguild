const ExperienceCard = ({ experience, index, isInView }) => {
  return (
    <div 
      className={`experience-card ${isInView ? 'experience-card-fade-in' : 'experience-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="experience-header">
        <h3>{experience.title}</h3>
        <span className="experience-period">{experience.period}</span>
      </div>
      <p className="experience-company">{experience.company}</p>
      <p className="experience-description">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
