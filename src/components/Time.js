import '../App.css';
import {
  displayMinutes,
  displaySeconds,
  displayMillis,
  displayHours,
} from '../utils';

function Time({ time, showMils = true }) {
  return (
    <>
      <span>{displayHours(time)}</span>:<span>{displayMinutes(time)}</span>:
      <span>{displaySeconds(time)}</span>
      {showMils && (
        <span style={{ fontSize: '.8em', alignSelf: 'flex-end' }}>
          .{displayMillis(time)}
        </span>
      )}
    </>
  );
}

export default Time;
