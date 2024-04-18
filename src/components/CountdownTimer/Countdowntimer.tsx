import { FC, useEffect, useState } from "react";
import styles from "./Countdowntimer.module.css";

const CountdownTimer: FC = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => {
        if (prevState === 0) {
          clearInterval(interval);
          return prevState;
        }
        return prevState - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.counter}>Обратный отсчёт</p>
      <span>{count}</span>
    </div>
  );
};

export default CountdownTimer;
