import { useEffect, useState } from 'react';
import '../../App.css';
import Laps from './Laps';
import Display from './Display';

function Stopwatch() {
  const [time, setTime] = useState(0); // Time elapsed in milliseconds
  const [lastTime, setLastTime] = useState(0); // Previous time elapsed,
  const [laps, setLaps] = useState([]); // List of lap times
  const [totals, setTotals] = useState([]); // List of total times
  const [isOn, setIsOn] = useState(false); // On/off flag

  // Append new lap time, total time to the beginning of the lap list,
  // total list respectively and update lastTime with current time.
  const handleLap = () => {
    setLaps((prevList) => {
      return [time - lastTime, ...prevList];
    });
    setTotals((prevList) => {
      return [time, ...prevList];
    });
    setLastTime(time);
  };

  const handleReset = () => {
    setIsOn(false);
    setTime(0);
    setLastTime(0);
    setTotals(() => []);
    setLaps(() => []);
  };

  const handleStop = () => {
    setIsOn(false);
    handleLap();
  };

  const handleStart = () => {
    setIsOn(true);
  };

  const handlePause = () => {
    setIsOn(false);
  };

  useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn]);

  return (
    <div className="stopwatch">
      <Display time={time} title="Total" />
      <Display time={time - lastTime} title="Lap" />
      <div className="stopwatch-btn-area">
        {isOn ? (
          <button className="btn btn-start" onClick={handleLap}>
            Lap
          </button>
        ) : (
          <button className="btn btn-start" onClick={handleStart}>
            Start
          </button>
        )}
        <button className="btn btn-reset" onClick={handlePause}>
          Pause
        </button>
        {isOn ? (
          <button className="btn btn-stop" onClick={handleStop}>
            Stop
          </button>
        ) : (
          <button className="btn btn-stop" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
      <Laps laps={laps} totals={totals} />
    </div>
  );
}

export default Stopwatch;
