import '../App.css';
import {
  displayMinutes,
  displaySeconds,
  displayMillis,
  displayHours,
} from '../utils';

function Laps({ laps, totals }) {
  const bestLap = (laps) => {
    return laps.indexOf(Math.min(...laps));
  };

  const worstLap = (laps) => {
    return laps.indexOf(Math.max(...laps));
  };

  let lapClassName = '';

  return (
    <div className="laps-area">
      <div className="laps-header">
        <div>#</div>
        <div>Lap Time</div>
        <div>Total Time</div>
      </div>
      {laps.length === 0 && (
        <div className="lap lap-placeholder">
          <div className="lap-title">
            <span>0</span>
          </div>
          <div>
            <span>{displayHours(0)}</span>:<span>{displayMinutes(0)}</span>:
            <span>{displaySeconds(0)}</span>.
            <span style={{ fontSize: '.9rem', alignSelf: 'flex-end' }}>
              {displayMillis(0)}
            </span>
          </div>
          <div>
            <span>{displayHours(0)}</span>:<span>{displayMinutes(0)}</span>:
            <span>{displaySeconds(0)}</span>.
            <span style={{ fontSize: '.9rem', alignSelf: 'flex-end' }}>
              {displayMillis(0)}
            </span>
          </div>
        </div>
      )}
      {laps.map((lap, index) => {
        index === bestLap(laps) && laps.length > 1
          ? (lapClassName = 'best-lap-time')
          : index === worstLap(laps) && laps.length > 1
          ? (lapClassName = 'worst-lap-time')
          : (lapClassName = '');

        return (
          <div className="lap">
            <div className="lap-title">
              <span>{`${index + 1}`}</span>
            </div>
            <div className={lapClassName}>
              <span>{displayHours(lap)}</span>:
              <span>{displayMinutes(lap)}</span>:
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
      })}
    </div>
  );
}

export default Laps;
