import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  startTimer,
  pauseTimer,
  resetTimer,
} from "../store/actions/stopwatchActions";
import styles from "./StopwatchStyles.module.css";

const Stopwatch = ({ timerRunning, startTimer, pauseTimer, resetTimer }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning]);

  const handleStart = () => {
    startTimer();
  };

  const handlePause = () => {
    pauseTimer();
  };

  const handleReset = () => {
    resetTimer();
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className={styles.stopwatch}>
      <h1>React/Redux Stopwatch</h1>
      <div data-testid="time-display" className={styles.time}>Time: {formatTime(time)}</div>
      <button onClick={handleStart} disabled={timerRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!timerRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    timerRunning: state.timerRunning,
  };
};

export default connect(mapStateToProps, { startTimer, pauseTimer, resetTimer })(
  Stopwatch
);
