import { useState, useEffect } from "react";
import "../blurry_loading/blurry.css";

const Blurry = () => {
  const image = "https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        } else {
          return prev + 1;
        }
      });
    }, 100);
  }, []);
  const map_one_range_to_another_range = (
    value,
    inMin,
    inMax,
    outMin,
    outMax
  ) => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const blurValue = map_one_range_to_another_range(percentage, 0, 100, 40, 0);
  const opacityValue = map_one_range_to_another_range(percentage, 0, 100, 1, 0);

  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden">
      <div
        className="image bg-cover bg-center bg-no-repeat absolute"
        style={{
          backgroundImage: `url(${image})`,
          filter: `blur(${blurValue}px)`,
        }}
      ></div>

      <div
        className="text-white left-[50%] top-[50%] text-5xl absolute"
        style={{
          opacity: `${opacityValue}`,
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default Blurry;
