const ExperienceCard = ({ experience, index, isInView }) => {
  return (
    <div
      className={`experience-card ${isInView ? 'experience-card-fade-in' : 'experience-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <h3 className="experience-title">{experience.title}</h3>
      <p className="experience-company">{experience.company}</p>
      <span className="experience-period">{experience.period}</span>
      <p className="experience-description">{experience.description}</p>
    </div>
  );
};

export default ExperienceCard;
