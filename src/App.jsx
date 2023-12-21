import styles from "./App.module.css";
import Display from "./components/displayBox";
import buttons from "./components/buttonItems";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <buttons></buttons>
    </div>
  );
}

export default App;
