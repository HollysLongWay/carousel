import { memo } from "react";

const Button = ({ type = "button", label }) => (
  <button type={type} aria-label={`${label} 버튼`}>
    {<img src={`${process.env.PUBLIC_URL}/img/shoppingMall/${label}.svg`} alt={`${label} 버튼 이미지`} />}
  </button>
);

export const MemoButton = memo(Button);
