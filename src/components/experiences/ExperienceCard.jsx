import { useEffect, useId, useRef, useState } from 'react';

/** Slide-in duration; enter stagger is in CSS. */
const ROLES_SLIDE_MS = 320;
/** Faster per-line hide (bottom → top); close timeout uses this × line count. */
const ROLES_HIDE_MS = 70;

function getRolesCloseDelayMs(count) {
  if (count <= 0) return 0;
  return count * ROLES_HIDE_MS;
}

const ExperienceCard = ({ experience, index, isInView }) => {
  const [open, setOpen] = useState(false);
  const [listMounted, setListMounted] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const closeTimerRef = useRef(null);
  const responsibilities = experience.responsibilities ?? [];
  const hasRoles = responsibilities.length > 0;
  const baseId = useId();
  const panelId = `${baseId}-roles-panel`;
  const triggerId = `${baseId}-roles-trigger`;
  const showBody = hasRoles || Boolean(experience.description?.trim());

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    []
  );

  const handleRolesToggle = () => {
    if (isLeaving) return;

    if (!listMounted) {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setOpen(true);
      setListMounted(true);
      return;
    }

    if (open) {
      setIsLeaving(true);
      const instant =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const delay = instant ? 0 : getRolesCloseDelayMs(responsibilities.length);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      closeTimerRef.current = setTimeout(() => {
        setOpen(false);
        setListMounted(false);
        setIsLeaving(false);
        closeTimerRef.current = null;
      }, delay);
    }
  };

  return (
    <div
      className={`experience-card ${isInView ? 'experience-card-fade-in' : 'experience-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <h3 className="experience-title">{experience.title}</h3>
      <p className="experience-company">{experience.company}</p>
      <span className="experience-period">{experience.period}</span>
      {showBody ? (
        <div className="experience-card-body">
          {hasRoles ? (
            <>
              <button
                type="button"
                id={triggerId}
                className="experience-roles-toggle"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={handleRolesToggle}
              >
                <span className="experience-roles-label">Roles &amp; Responsibilities</span>
                <svg
                  className={`experience-roles-arrow ${open ? 'is-open' : ''}`}
                  width="10"
                  height="10"
                  viewBox="0 0 8 8"
                  aria-hidden
                >
                  <path d="M1.25 0.85 L6.75 4 L1.25 7.15 Z" fill="currentColor" />
                </svg>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className="experience-roles-panel"
                hidden={!listMounted}
              >
                {listMounted ? (
                  <ul
                    className={`experience-roles-list${isLeaving ? ' experience-roles-list--leaving' : ''}`}
                    style={{
                      '--roles-count': responsibilities.length,
                      '--roles-motion-ms': `${ROLES_SLIDE_MS}ms`,
                      '--roles-hide-ms': `${ROLES_HIDE_MS}ms`,
                    }}
                  >
                    {responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="experience-roles-item"
                        style={{ '--roles-stagger': i }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </>
          ) : null}
          {experience.description?.trim() ? (
            <p className="experience-description">{experience.description}</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceCard;
