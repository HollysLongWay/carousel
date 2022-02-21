import { React } from "react";

const MoveBtn = ({ direct, hoverEvent, clickEvent }) => (
  <button
    className={`carousel--${direct}Btn`}
    onMouseOver={e => hoverEvent(e)}
    onMouseOut={e => hoverEvent(e)}
    onClick={clickEvent}
  >
    <img src="./img/carousel2/arrow.png" alt={`${direct === "Next" ? "다음" : "이전"} 상품 보기`} />
  </button>
);

export default MoveBtn;
