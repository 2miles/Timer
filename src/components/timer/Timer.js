import { useEffect, useState } from 'react';
// import '../../App.css';
// import Laps from './Laps';
// import Display from './Display';
import Time from '../Time';

function Timer() {
  const [initialTime, setInitialTime] = useState(100 * 60);
  const [time, setTime] = useState(initialTime); // Time elapsed in milliseconds
  const [isOn, setIsOn] = useState(false); // On/off flag

  const handleReset = () => {
    setIsOn(false);
    setTime(initialTime);
  };

  const handleStop = () => {
    setIsOn(false);
    // handleLap();
  };

  const handleStart = () => {
    setIsOn(true);
  };

  const handleAdd = (quantity) => {
    setTime(time + quantity);
    setInitialTime(time + quantity);
  };

  const handleSub = (quantity) => {
    if (time - quantity >= 0) {
      setTime(time - quantity);
      setInitialTime(time - quantity);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime((prev) => prev - 1);
        } else {
          setIsOn(false);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, time]);

  return (
    <div className="stopwatch">
      <div className="stopwatch-btn-area">
        <button
          className="btn btn-adjust"
          onClick={() => {
            handleAdd(100 * 60 * 60);
          }}
        >
          +
        </button>
        <button className="btn btn-adjust" onClick={() => handleAdd(100 * 60)}>
          +
        </button>
        <button className="btn btn-adjust" onClick={() => handleAdd(100)}>
          +
        </button>
      </div>
      <div className="stopwatch-display-area">
        <div className="stopwatch stopwatch-display">
          <Time time={time} showMils={false} />
        </div>
      </div>
      <div className="stopwatch-btn-area">
        <button
          className="btn btn-adjust"
          onClick={() => {
            handleSub(100 * 60 * 60);
          }}
        >
          -
        </button>
        <button className="btn btn-adjust" onClick={() => handleSub(100 * 60)}>
          -
        </button>
        <button className="btn btn-adjust" onClick={() => handleSub(100)}>
          -
        </button>
      </div>
      <div className="stopwatch-btn-area">
        {isOn || time < initialTime ? (
          <button className="btn btn-start" onClick={handleStart}>
            Resume
          </button>
        ) : (
          <button className="btn btn-start" onClick={handleStart}>
            Start
          </button>
        )}
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
    </div>
  );
}

export default Timer;
