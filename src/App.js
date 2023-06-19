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
        <div>
          <span style={{ display: 'inline-block', width: '40px' }}>
            {displayHours(time)}
          </span>
          {':'}
          <span style={{ display: 'inline-block', width: '40px' }}>
            {displayMinutes(time)}
          </span>
          {':'}
          <span style={{ display: 'inline-block', width: '40px' }}>
            {displaySeconds(time)}
          </span>
        </div>
        <div>
          <button onClick={() => setIsOn(true)}>Start</button>
          <button onClick={() => setIsOn(false)}>Stop</button>
          <button onClick={() => setIsOn(true)}>Resume</button>
          <button onClick={() => setTime(0)}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
