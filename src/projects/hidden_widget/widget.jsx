import { useState, useRef } from "react";
import "../hidden_widget/widget.css";

const Widget = () => {
  const [active, setActive] = useState(false);
  const input = useRef(null);

  const handleClick = () => {
    setActive(!active);
    if (!active) {
      input.current.focus();
    }
  };

  return (
    <div className="font-muli flex justify-center items-center h-screen bg-gradient-to-r  from-cyan-500 to-blue-500">
      <div className="flex justify-center items-center relative">
        <input
          ref={input}
          type="text"
          placeholder="Search here"
          className={`search ${active ? "active" : ""}`}
        />
        <button
          className="btn fas fa-search"
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
};

export default Widget;
