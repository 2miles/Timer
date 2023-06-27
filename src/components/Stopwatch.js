import { useEffect, useState } from 'react';
import { displayHours, displayMinutes, displaySeconds } from '../utils';
import '../App.css';

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
    <div className="stopwatch">
      <div className="stopwatch stopwatch-display">
        <span>{displayHours(time)}</span>:<span>{displayMinutes(time)}</span>:
        <span>{displaySeconds(time)}</span>
      </div>
      <div className="stopwatch stopwatch-btn-area">
        <button
          className="stopwatch btn btn-start"
          onClick={() => setIsOn(true)}
        >
          Start
        </button>
        <button
          className="stopwatch btn btn-stop"
          onClick={() => setIsOn(false)}
        >
          Stop
        </button>
        <button
          className="stopwatch btn btn-reset"
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
