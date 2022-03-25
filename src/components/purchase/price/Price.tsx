import { useState } from "react";
import Tooltip from "../tooltip/Tooltip";

import styles from "./Price.module.css";
import PriceProps from "./Price.type";

const Price = ({ quantity, discountedPrice }: PriceProps) => {
  const totalPrice: Number = +discountedPrice * +quantity;
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className={styles.Price}>
      <p className={styles.description}>
        총 상품 금액
        <button className={styles.tooltipBtn} onClick={handleClick}>
          <img src={process.env.PUBLIC_URL + "/img/purchase/HelfButton.png"} alt="툴팁 열기 버튼" />
        </button>
      </p>
      {showTooltip && <Tooltip showTooltip={showTooltip} setShowTooltip={setShowTooltip} />}
      <div className={styles.priceWrap}>
        <span className={styles.totalQuantity}>총 수량 {quantity}개</span>
        <strong className={styles.totalPrice}>{totalPrice.toLocaleString()}원</strong>
      </div>
    </div>
  );
};

export default Price;
