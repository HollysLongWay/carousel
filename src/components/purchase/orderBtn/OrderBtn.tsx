import { useEffect, useState } from "react";
import styles from "./OrderBtn.module.css";
import OrderBtnProps from "./OrderBtn.type";

const OrderBtn = ({ quantity }: OrderBtnProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<string>("disabled");

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    setIsDisabled(+quantity === 0 ? "disabled" : "normal");
  }, [quantity]);

  return (
    <button
      className={`${styles.OrderBtn} ${styles[isDisabled]} ${isHover ? styles.hover : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={process.env.PUBLIC_URL + `/img/purchase/type=${isDisabled}.png`} alt="" />
      구매하기
    </button>
  );
};

export default OrderBtn;
