
// useIntersectionObserver.js
import { useState, useEffect } from 'react';

const useIntersectionObserver = (options = {}) => {
  const { threshold = 0, transitionsEnabled = true } = options;
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (transitionsEnabled) {
            setIsVisible(true);
          }
        }
      },
      {
        threshold,
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, transitionsEnabled]);

  return [setRef, isVisible];
};


export default useIntersectionObserver;

