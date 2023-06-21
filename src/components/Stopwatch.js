import { useEffect, useState } from 'react';
import { displayHours, displayMinutes, displaySeconds } from '../utils';
import styles from './Stopwatch.module.css';
import classnames from 'classnames';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    // Cleanup function for when the component gets unmounted to clear the interval.
    // Will stop the interval when the user leaves the page.
    return () => clearInterval(interval);
  }, [isOn]);

  return (
    <div className={styles.stopwatch}>
      <div className={classnames(styles.stopwatch, styles.stopwatchDisplay)}>
        <span>{displayHours(time)}</span>:<span>{displayMinutes(time)}</span>:
        <span>{displaySeconds(time)}</span>
      </div>
      <div className={classnames(styles.stopwatch, styles.stopwatchBtnArea)}>
        <button
          className={classnames(styles.stopwatch, styles.btn, styles.btnStart)}
          onClick={() => setIsOn(true)}
        >
          Start
        </button>
        <button
          className={classnames(styles.stopwatch, styles.btn, styles.btnStop)}
          onClick={() => setIsOn(false)}
        >
          Stop
        </button>
        <button
          className={classnames(styles.stopwatch, styles.btn, styles.btnReset)}
          onClick={() => {
            setTime(0);
            setIsOn(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
