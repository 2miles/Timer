import { useEffect, useState } from 'react';
import './App.css';
import { displayHours, displayMinutes, displaySeconds } from './utils';

function App() {
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
    // Cleanup function for when the component gets unmounted to clear the interval
    // Will stop the interval when the user leaves the page
    return () => clearInterval(interval);
  }, [isOn]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Timer App</h1>
      </header>
      <body className="App-body">
        <div className="stopwatch">
          <div className="stopwatch-display">
            <span>{displayHours(time)}</span>:
            <span>{displayMinutes(time)}</span>:
            <span>{displaySeconds(time)}</span>
          </div>
          <div className="stopwatch-button-area">
            <button
              className="button button-start"
              onClick={() => setIsOn(true)}
            >
              Start
            </button>
            <button
              className="button button-stop"
              onClick={() => setIsOn(false)}
            >
              Stop
            </button>
            <button
              className="button button-reset"
              onClick={() => {
                setTime(0);
                setIsOn(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
