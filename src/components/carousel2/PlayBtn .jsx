import React from "react";

const PlayBtn = ({ clickEvent }) => (
  <button className="carousel--playBtn" onClick={clickEvent}>
    <img src="./img/carousel2/toggleBtn.png" alt="자동 재생" />
  </button>
);

export default PlayBtn;
