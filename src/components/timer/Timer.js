import { useEffect, useState } from 'react';
import Time from '../Time';
import * as consts from '../../constants';

function Timer() {
  const [initialTime, setInitialTime] = useState(consts.MINUTE);
  const [time, setTime] = useState(initialTime); // Time elapsed in milliseconds
  const [isOn, setIsOn] = useState(false); // On/off flag

  const handleReset = () => {
    setIsOn(false);
    setTime(initialTime);
  };

  const handleStop = () => {
    setIsOn(false);
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
            handleAdd(consts.HOUR);
          }}
        >
          +
        </button>
        <button
          className="btn btn-adjust"
          onClick={() => handleAdd(consts.MINUTE)}
        >
          +
        </button>
        <button
          className="btn btn-adjust"
          onClick={() => handleAdd(consts.SECOND)}
        >
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
            handleSub(consts.HOUR);
          }}
        >
          -
        </button>
        <button
          className="btn btn-adjust"
          onClick={() => handleSub(consts.MINUTE)}
        >
          -
        </button>
        <button
          className="btn btn-adjust"
          onClick={() => handleSub(consts.SECOND)}
        >
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
