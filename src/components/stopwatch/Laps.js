import '../../App.css';
import Lap from './Lap';

function Laps({ laps, totals }) {
  // Return the index of the best lap
  const bestLap = (laps) => {
    return laps.indexOf(Math.min(...laps));
  };

  // Return the index of the worst lap
  const worstLap = (laps) => {
    return laps.indexOf(Math.max(...laps));
  };

  // Return the corresponding className string for a lap based on if the
  // lap is best, worst, or neither. Used to highlight the time either
  // green, red, or not at all.
  const setLapTimeStyle = (laps, index) => {
    let style;
    index === bestLap(laps) && laps.length > 1
      ? (style = 'best-lap-time')
      : index === worstLap(laps) && laps.length > 1
      ? (style = 'worst-lap-time')
      : (style = '');
    return style;
  };

  return (
    <div className="laps-area">
      <div className="laps-header">
        <div>#</div>
        <div>Lap Time</div>
        <div>Total Time</div>
      </div>
      {laps.length === 0 && (
        <Lap
          lap={[0]}
          totals={[]}
          lapTimeStyle={''}
          lapShadeStyle={'lap lap-placeholder'}
          index={0}
        />
      )}
      {laps.map((lap, index) => {
        return (
          <Lap
            lap={lap}
            totals={totals}
            lapTimeStyle={setLapTimeStyle(laps, index)}
            lapShadeStyle={'lap'}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Laps;
