import React, { useRef, useEffect } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";
import { useState } from "react";
import { connect } from "react-redux";
import { stopTimer } from "./../../../../reducers/gameDataSlice";

const Timer = (props) => {
  const { gameTimer = false, stopTimer } = props;
  const unlockTime = 20;
  const [value, setValue] = useState(gameTimer ? unlockTime : "0" + 0);
  const divRef = useRef();
  const tickRef = useRef();
  const timer = () =>
    setValue((prevVal) => {
      const newVal = prevVal - 1;
      if (newVal < 10) {
        return "0" + newVal;
      }
      return newVal;
    });

  useEffect(() => {
    if (gameTimer) {
      setValue(20);
    }
    return stopTimer;
  }, [gameTimer, stopTimer]);

  useEffect(() => {
    if (value <= 0) {
      stopTimer();
      return;
    }
    const count = setInterval(timer, 1500);
    return () => clearInterval(count);
  }, [value, stopTimer]);

  useEffect(() => {
    const didInit = (tick) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
    });
    return () => Tick.DOM.destroy(tickValue);
  });

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = value;
    }
  }, [value]);

  return (
    <div ref={divRef} className="tick customCounter">
      <div data-repeat="true">
        <span data-view="flip">Tick1</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ gamesData }) => ({
  gameTimer: gamesData.isTimerActive,
});
const mapDispatchToProps = {
  stopTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
