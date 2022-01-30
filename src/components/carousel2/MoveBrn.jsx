import React from "react";

const MoveBtn = ({ direct, hoverEvent, clickEvent }) => (
  <button
    className={`carousel--${direct}Btn`}
    onMouseOver={e => hoverEvent(e)}
    onMouseOut={e => hoverEvent(e)}
    onClick={clickEvent}
  >
    <img src="./img/carousel2/arrow.png" alt="" />
  </button>
);

export default MoveBtn;
