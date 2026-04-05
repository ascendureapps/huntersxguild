import ProfilePic from './ProfilePic';

import '../../styles/Introduction.css';

const Introduction = ({ personalInfo, aboutMe }) => {
  return (
    <section id="introduction" className="portfolio-section intro-section">
      <div className="section-content">
        <ProfilePic />
        <h1 className="name">{personalInfo.name}</h1>
        <h2 className="title">{personalInfo.title}</h2>
        <br></br>
        <br></br>
        {aboutMe && (
          <div className="about-me">
            <h3 className="about-me-heading">About me</h3>
            <p className="about-me-text">{aboutMe.introduction}</p>
            {aboutMe.expectation ? (
              <p className="about-me-text about-me-expectation">{aboutMe.expectation}</p>
            ) : null}
          </div>
        )}
        {/* <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Address:</span>
            <span>{personalInfo.address}</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Introduction;
