import {
  displayMinutes,
  displaySeconds,
  displayMillis,
  displayHours,
} from '../utils';
import '../App.css';

function Display({ time, title }) {
  return (
    <div className="stopwatch-display-area">
      <div className="stopwatch-display-title">{title}</div>
      <div className="stopwatch stopwatch-display">
        <span>{displayHours(time)}</span>:<span>{displayMinutes(time)}</span>:
        <span>{displaySeconds(time)}</span>
        <span style={{ fontSize: '2.2rem', alignSelf: 'flex-end' }}>
          .{displayMillis(time)}
        </span>
      </div>
    </div>
  );
}

export default Display;
