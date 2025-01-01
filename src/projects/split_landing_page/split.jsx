import "../split_landing_page/Split.css";
import ps from "../../assets/ps.jpg";
import xbox from "../../assets/xbox.jpg";
import { act, useState } from "react";

const Split = () => {
  const [active, setActive] = useState("");

  return (
    <div className={`h-screen w-screen relative overflow-hidden font-muli ${active}`}>
      <div className="split left" onMouseOver={()=> setActive('hover-left')} onMouseLeave={()=> setActive('')}>
        <img src={ps} alt="" />
        <h1>Playstation 5</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>

      <div className="split right" onMouseOver={()=> setActive('hover-right')} onMouseLeave={()=> setActive('')}>
        <img src={xbox} alt="" />
        <h1>XBox Series X</h1>
        <a href="#" className="btn">Buy Now</a>
      </div>
    </div>
  );
};

export default Split;
