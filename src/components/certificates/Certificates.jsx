import CertificateCard from './CertificateCard';
import '../../styles/Certificates.css';
import useInView from '../../hooks/useInView';

const Certificates = ({ certificates }) => {
  const { targetRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="certificates" className="portfolio-section certificates-section" ref={targetRef}>
      <div className="section-content">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-list">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
