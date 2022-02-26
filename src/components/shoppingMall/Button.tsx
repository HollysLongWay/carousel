import { memo } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  label: string;
}

const Button = ({ type = "button", label }: ButtonProps) => (
  <button type={type} aria-label={`${label} 버튼`}>
    <img src={`${process.env.PUBLIC_URL}/img/shoppingMall/${label}.svg`} alt={`${label} 버튼 이미지`} />
  </button>
);

export const MemoButton = memo(Button);
