import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import '../../styles/Projects.css';
import useInView from '../../hooks/useInView';

const projectsSectionInViewOptions = { threshold: 0 };

const CARD_FADE_OUT_MS = 750;

const STAGGER_SEC = 0.3;
const STAGGER_MS = STAGGER_SEC * 1000;

const VISIBLE_LIMIT = 6;

const Projects = ({ projects }) => {
  const { targetRef, isInView } = useInView(projectsSectionInViewOptions);
  const [expanded, setExpanded] = useState(false);
  const [areAllProjectsLoaded, setAreAllProjectsLoaded] = useState(false);
  const [exitingExtras, setExitingExtras] = useState(false);
  const exitTimerRef = useRef(null);

  const hasOverflow = projects.length > VISIBLE_LIMIT;
  const mountExtras = hasOverflow && (expanded || exitingExtras);
  const lastIndex = projects.length - 1;

  useEffect(() => {
    return () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!expanded || exitingExtras) {
      setAreAllProjectsLoaded(false);
    }
  }, [expanded, exitingExtras]);

  const handleToggle = () => {
    if (exitingExtras || (expanded && !areAllProjectsLoaded)) return;
    if (expanded) {
      setAreAllProjectsLoaded(false);
      setExitingExtras(true);
      setExpanded(false);
      const extraCount = projects.length - VISIBLE_LIMIT;
      const maxStaggerMs = Math.max(0, extraCount - 1) * STAGGER_MS;
      const totalExitMs = maxStaggerMs + CARD_FADE_OUT_MS;
      exitTimerRef.current = setTimeout(() => {
        setExitingExtras(false);
        exitTimerRef.current = null;
      }, totalExitMs);
    } else {
      setExpanded(true);
    }
  };

  const handleLastProjectFadeInComplete = () => {
    setAreAllProjectsLoaded(true);
  };

  const toggleDisabled = expanded && !areAllProjectsLoaded;

  const toggleLabel = (() => {
    if (expanded && !areAllProjectsLoaded) return 'Loading...';
    if (expanded && areAllProjectsLoaded) return 'Show fewer projects';
    return 'Show all projects';
  })();

  return (
    <section
      id="projects"
      className="portfolio-section projects-section"
      ref={targetRef}
    >
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => {
            if (hasOverflow && !mountExtras && index >= VISIBLE_LIMIT) return null;

            const isExtraExiting =
              hasOverflow && exitingExtras && index >= VISIBLE_LIMIT;
            const animationDelaySec = isExtraExiting
              ? (projects.length - 1 - index) * STAGGER_SEC
              : index * STAGGER_SEC;

            const reportFadeInDone =
              hasOverflow &&
              expanded &&
              !exitingExtras &&
              index === lastIndex;

            return (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                isInView={isInView}
                forceFadeOut={isExtraExiting}
                animationDelaySec={animationDelaySec}
                onFadeInComplete={
                  reportFadeInDone ? handleLastProjectFadeInComplete : undefined
                }
              />
            );
          })}
        </div>
        {hasOverflow && !exitingExtras ? (
          <button
            type="button"
            className="projects-expand-toggle"
            onClick={handleToggle}
            disabled={toggleDisabled}
            aria-expanded={expanded && areAllProjectsLoaded}
            aria-busy={expanded && !areAllProjectsLoaded}
          >
            {toggleLabel}
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
