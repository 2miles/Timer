import '../App.css';
import {
  displayMinutes,
  displaySeconds,
  displayMillis,
  displayHours,
} from '../utils';

function Lap({ lap, totals, lapClassName, placeholderClassName, index }) {
  return (
    <div className={placeholderClassName}>
      <div className="lap-title">
        <span>{`${index + 1}`}</span>
      </div>
      <div className={lapClassName}>
        <span>{displayHours(lap)}</span>:<span>{displayMinutes(lap)}</span>:
        <span>{displaySeconds(lap)}</span>.
        <span style={{ fontSize: '.9rem', alignSelf: 'flex-end' }}>
          {displayMillis(lap)}
        </span>
      </div>
      <div>
        <span>{displayHours(totals[index])}</span>:
        <span>{displayMinutes(totals[index])}</span>:
        <span>{displaySeconds(totals[index])}</span>.
        <span style={{ fontSize: '.9rem', alignSelf: 'flex-end' }}>
          {displayMillis(totals[index])}
        </span>
      </div>
    </div>
  );
}

export default Lap;
