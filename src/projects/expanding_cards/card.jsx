import { useState } from "react";
import "../expanding_cards/card.css";

const card = () => {
  const [index, setActiveIndex] = useState(0);
  const cardData = [
    {
      img: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Nature",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1667530527025-0dbeb1777692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mountains",
    },
    {
      img: "https://images.unsplash.com/photo-1722029501720-16c66547ba06?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Rivers",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "City",
    },
    {
      img: "https://images.unsplash.com/photo-1523760957528-55d1d540360d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Village",
    },
    {
      img: "https://images.unsplash.com/photo-1628911771730-881503b8e9c9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Gadgets",
    },
    {
      img: "https://images.unsplash.com/photo-1605882008785-56f0cb47482c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cuties",
    },
  ];

  return (
    <div className="font-muli flex justify-center items-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex justify-center items-center w-[80vw]">
        {cardData.map((card, idx) => (
          <div
            onClick={() => setActiveIndex(idx)}
            key={idx}
            className={`card flex-1 h-[80vh] rounded-[30px] bg-center bg-cover bg-no-repeat text-white cursor-pointer relative m-1.5 transition-all duration-500 ease-in ${
              idx === index
                ? "active flex-[10] shadow-2xl shadow-slate-800 "
                : ""
            }`}
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <h2
              className={`${
                idx === index ? "opacity-1" : "opacity-0"
              } font-medium text-xl absolute left-[25px] bottom-[15px]`}
            >
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default card;
