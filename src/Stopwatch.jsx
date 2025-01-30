import React, { useState } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Format the display time
  const formatTime = () => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Start the stopwatch
  const startStopwatch = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  // Stop the stopwatch
  const stopStopwatch = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  // Reset the stopwatch
  const resetStopwatch = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2 id="display">{formatTime()}</h2>
      <button id="start" onClick={startStopwatch}>Start</button>
      <button id="stop" onClick={stopStopwatch}>Stop</button>
      <button id="reset" onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;

