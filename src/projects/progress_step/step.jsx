import { useState } from "react";
import "../progress_step/step.css";

const Progress = () => {
  let totalCircles = 4;
  let [active, setActive] = useState(1);
  let circles = [];

  for (let i = 1; i < totalCircles + 1; i++) {
    circles.push(
      <div className={`${i <= active ? "active " : ""} circle`}>{i}</div>
    );
  }

  let calculate = ((active - 1) / (totalCircles - 1)) * 100;

  const handleNext = () => {
    if (active > totalCircles) {
      setActive(active);
    } else {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active < 0) {
      setActive(0);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center w-[350px]">
        <div className="my-5 w-full flex justify-between items-center relative">
          <div className="bar" style={{"--progress-width": `${calculate}%`}}></div>
          {circles}
        </div>
        <div class="buttons">
          <button className="btn" onClick={handlePrev} disabled={active === 1}>
            Prev
          </button>
          <button
            className="btn"
            onClick={handleNext}
            disabled={active === totalCircles}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
