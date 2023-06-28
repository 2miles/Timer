import '../App.css';
import Time from './Time';

function Lap({ lap, totals, lapStyle, shadeStyle, index }) {
  return (
    <div className={shadeStyle}>
      <div className="lap-title">
        <span>{`${index + 1}`}</span>
      </div>
      <div className={lapStyle}>
        <Time time={lap} />
      </div>
      <div>
        <Time time={totals[index]} />
      </div>
    </div>
  );
}

export default Lap;
