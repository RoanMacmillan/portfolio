import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options = {}, shouldDisappear = false) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        setHasBeenVisible(true);
        if (!shouldDisappear) {
          observer.unobserve(entry.target);
        }
      } else {
        if (shouldDisappear || !hasBeenVisible) {
          setIsVisible(false);
        }
      }
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options, hasBeenVisible, shouldDisappear]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;
