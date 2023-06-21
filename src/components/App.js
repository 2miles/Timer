import styles from './App.module.css';
import Stopwatch from './Stopwatch';
import classnames from 'classnames';

function App() {
  return (
    <body className={classnames(styles.AppBody)}>
      <div className={classnames(styles.App)}>
        <Stopwatch />
        <Stopwatch />
        <Stopwatch />
      </div>
    </body>
  );
}

export default App;
