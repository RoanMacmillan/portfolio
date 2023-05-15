// LoadingModal.jsx

import React, { useEffect, useState } from 'react';
import styles from './LoadingModal.module.css';
import classNames from 'classnames';

const LoadingModal = ({ isVisible }) => {
  const [shouldRender, setRender] = useState(isVisible);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const modalClass = classNames({
    [styles.loadingModal]: true,
    [styles.fadeIn]: isVisible,
    [styles.fadeOut]: !isVisible,
  });

  useEffect(() => {
    // When isVisible changes to false, set a timer to remove the modal from the DOM.
    if (!isVisible) {
      const timer = setTimeout(() => {
        setRender(false);
      }, 400); // This should match the duration of your fadeOut animation.

      return () => clearTimeout(timer);
    }

    // When isVisible changes to true, make sure the modal is in the DOM.
    setRender(true);
  }, [isVisible]);


  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setLoadingProgress((prevProgress) => {
          if (prevProgress < 100) return prevProgress + 1;
          clearInterval(timer);
          return prevProgress;
        });
      }, 10); // Adjust this value to control the speed of the loading bar.

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return shouldRender ? (
    <div className={modalClass}>
      <div className={styles.loadingBarContainer}>
        <div className={styles.loadingBar} style={{ width: `${loadingProgress}%` }} />
      </div>
      <h1 className={styles.loadingTitle}>Loading...</h1>
    </div>
  ) : null;
};

export default LoadingModal;
