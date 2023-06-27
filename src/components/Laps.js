import '../App.css';
import {
  displayMinutes,
  displaySeconds,
  displayMillis,
  displayHours,
} from '../utils';

function Laps({ laps, totals }) {
  return (
    <div className="laps-area">
      <div className="laps-header">
        <div>#</div>
        <div>Lap Time</div>
        <div>Total Time</div>
      </div>
      {laps.map((lap, index) => {
        return (
          <div className="lap">
            <div className="lap-title">
              <span>{`${index + 1}`}</span>
            </div>
            <div>
              <span>{displayHours(lap)}</span>:
              <span>{displayMinutes(lap)}</span>:
              <span>{displaySeconds(lap)}</span>.
              <span style={{ fontSize: '.9rem', alignSelf: 'flex-end' }}>
                {displayMillis(lap)}
              </span>
            </div>
            <div>
              <span>{displayHours(lap)}</span>:
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
