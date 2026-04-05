import { useEffect, useRef, useState } from 'react';

/**
 * @param {IntersectionObserverInit & { once?: boolean }} options
 * - `once`: after the first time the target intersects, stay “in view” (no fade-out on scroll away).
 */
const useInView = (options = {}) => {
  const { once = false, threshold = 0, root = null, rootMargin } = options;

  const targetRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const ioOpts = { threshold };
    if (root != null) ioOpts.root = root;
    if (rootMargin !== undefined) ioOpts.rootMargin = rootMargin;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView((prev) => {
        if (entry.isIntersecting) return true;
        if (once && prev) return true;
        return false;
      });
    }, ioOpts);

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold, root, rootMargin]);

  return { targetRef, isInView };
};

export default useInView;
