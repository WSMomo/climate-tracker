import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import styles from "./returnToTheTop.module.css";
function ReturnToTheTop() {
  function scollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className={styles.container}>
      <button onClick={scollToTop} title="Return to the Top">
        <ArrowUpCircleIcon className={styles.icon} />
      </button>
    </div>
  );
}

export default ReturnToTheTop;
