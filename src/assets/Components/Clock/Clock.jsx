import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css'; // Import the CSS module file for styling

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    timeZone: 'Europe/London',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  };

  const bstTime = time.toLocaleTimeString('en-GB', options);
  const [timeString, amPm] = bstTime.split(' ');

  return (
    <div className={styles.clockContainer}>
      <div className={styles.clockDigits}>
        Edinburgh: {timeString.slice(0, -3)}
        <span className={styles.blink}>:</span>
        {timeString.slice(-2)} {amPm}
      </div>
    </div>
  );
};

export default Clock;
