import "../sound_board/sound.css";

import applause from "../../assets/applause.mp3";
import boo from "../../assets/boo.mp3";
import gasp from "../../assets/gasp.mp3";
import tada from "../../assets/tada.mp3";
import victory from "../../assets/victory.mp3";
import wrong from "../../assets/wrong.mp3";
import { useRef } from "react";

const Sound = () => {
  const buttonEle = [];
  const soundEle = [];
  const soundRef = useRef({});
  const sounds = {
    applause: applause,
    boo: boo,
    gasp: gasp,
    tada: tada,
    victory: victory,
    wrong: wrong,
  };
  for (let [key, value] of Object.entries(sounds)) {
    soundEle.push(
      <audio
        src={value}
        id={key}
        ref={(e) => (soundRef.current[key] = e)}
      ></audio>
    );
    buttonEle.push(
      <button
        className="btn"
        id={key}
        onClick={() => {
          Object.values(soundRef.current).forEach((sound) => {
            sound.pause();
            sound.length = 0;
          });
          soundRef.current[key].play();
        }}
      >
        {key}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-soundBoard text-center">
      {soundEle}
      <div className="flex-wrap">{buttonEle}</div>
    </div>
  );
};

export default Sound;
