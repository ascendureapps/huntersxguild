import { useEffect, useRef, useState } from 'react';

const useInView = (options = {}) => {
  const targetRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { targetRef, isInView };
};

export default useInView;

