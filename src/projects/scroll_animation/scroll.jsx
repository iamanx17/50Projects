import { useEffect, useRef } from "react";
import "../scroll_animation/scroll.css";

const Scroll = () => {
  const totalBoxes = 10;
  const boxRef = useRef([]);
  let boxes = [];

  for (let i = 0; i < totalBoxes; i++) {
    boxes.push(
      <div
        ref={(ele) => (boxRef.current[i] = ele)}
        key={i}
        className={`box cursor-pointer bg-sky-600 text-white h-[200px] w-[400px] my-5 flex items-center justify-center rounded-[20px] font-bold text-4xl shadow-md shadow-gray-500`}
      >
        Content
      </div>
    );
  }
  const handleScroll = () => {
    let windowHeight = (window.innerHeight / 5) * 4;
    boxRef.current.forEach((box, idx) => {
      let boxTop = box.getBoundingClientRect().top;
      console.log(boxTop, window.innerHeight);
      if (boxTop < windowHeight) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-muli flex flex-col items-center bg-orange-200 overflow-x-hidden">
      <h1 className="text-4xl my-5 font-extrabold">
        Scroll to see the animation!
      </h1>
      {boxes}
    </div>
  );
};

export default Scroll;
