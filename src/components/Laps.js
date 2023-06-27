import '../App.css';
import { displayMinutes, displaySeconds, displayMillis } from '../utils';

function Laps({ laps }) {
  return (
    <div className="laps-area">
      {laps.map((lap, key) => {
        return (
          <div className="lap">
            <div className="lap-title">
              <span>{`Lap ${key + 1}`}</span>
            </div>
            <div>
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
