import '../App.css';
import Lap from './Lap';

function Laps({ laps, totals }) {
  const bestLap = (laps) => {
    return laps.indexOf(Math.min(...laps));
  };

  const worstLap = (laps) => {
    return laps.indexOf(Math.max(...laps));
  };

  let lapClassName = '';
  let placeholderClassName = 'lap';

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
          totals={[0]}
          lapClassName={lapClassName}
          placeholderClassName={'lap lap-placeholder'}
          index={0}
        />
      )}
      {laps.map((lap, index) => {
        index === bestLap(laps) && laps.length > 1
          ? (lapClassName = 'best-lap-time')
          : index === worstLap(laps) && laps.length > 1
          ? (lapClassName = 'worst-lap-time')
          : (lapClassName = '');
        return (
          <Lap
            lap={lap}
            totals={totals}
            lapClassName={lapClassName}
            placeholderClassName={placeholderClassName}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Laps;
