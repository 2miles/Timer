import '../App.css';
import Time from './Time';

function Lap({ lap, totals, lapStyle, shadeStyle, index }) {
  return (
    <div className={shadeStyle}>
      <div className="lap-title">
        <span>{`${totals.length - index}`}</span>
      </div>
      <div className={lapStyle}>
        <Time time={lap} />
      </div>
      <div>
        {totals.length > 0 ? <Time time={totals[index]} /> : <Time time={0} />}
      </div>
    </div>
  );
}

export default Lap;
