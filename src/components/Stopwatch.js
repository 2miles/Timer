import { useEffect, useState } from 'react';
import '../App.css';
import Laps from './Laps';
import Display from './Display';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const [totals, setTotals] = useState([]);
  const [isOn, setIsOn] = useState(false);

  const handleLap = () => {
    setLaps((prevList) => {
      return [...prevList, time - lastTime];
    });
    setTotals((prevList) => {
      return [...prevList, time];
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
    // Cleanup function for when the component gets unmounted to clear the interval.
    // Will stop the interval when the user leaves the page.
    return () => clearInterval(interval);
  }, [isOn]);

  return (
    <div className="stopwatch">
      <Display time={time} title={'Total'} />
      <Display time={time - lastTime} title={'Lap'} />
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
      {laps.length > 0 && <Laps laps={laps} totals={totals} />}
    </div>
  );
}

export default Stopwatch;
