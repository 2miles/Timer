import Time from '../Time';
import '../../App.css';

function Display({ time, title }) {
  return (
    <div className="stopwatch-display-area">
      <div className="stopwatch-display-title">{title}</div>
      <div className="stopwatch stopwatch-display">
        <Time time={time} />
      </div>
    </div>
  );
}

export default Display;
