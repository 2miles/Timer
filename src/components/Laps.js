import '../App.css';
import { displayMinutes, displaySeconds, displayMillis } from '../utils';

function Laps({ laps }) {
  return (
    <div className="laps-area">
      {laps.map((lap, key) => {
        return (
          <div className="laps-area lap">
            <div className="laps-area lap lap-title">
              <span>{`Lap ${key + 1}`}</span>
            </div>
            <div className="laps-area lap lap-number">
              <span>{displayMinutes(lap)}</span>:
              <span>{displaySeconds(lap)}</span>:
              <span>{displayMillis(lap)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Laps;
