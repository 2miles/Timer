import '../App.css';
import Stopwatch from './Stopwatch';
import { useState } from 'react';

const timer1 = {
  title: 'Timer 1',
};

function App() {
  const [timerList, setTimerList] = useState([timer1]);
  return (
    <body className="App-body">
      <div className="App">
        <Stopwatch timer={timerList[0]} />
      </div>
    </body>
  );
}

export default App;
