import '../../App.css';
import Time from '../Time';

function Lap({ lap, totals, lapTimeStyle, lapShadeStyle, index }) {
  return (
    <div className={lapShadeStyle}>
      <div className="lap-title">
        <span>{`${totals.length - index}`}</span>
      </div>
      <div className={lapTimeStyle}>
        <Time time={lap} />
      </div>
      <div>
        {totals.length > 0 ? <Time time={totals[index]} /> : <Time time={0} />}
      </div>
    </div>
  );
}

export default Lap;
