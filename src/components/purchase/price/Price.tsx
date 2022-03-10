import styles from "./Price.module.css";
import PriceProps from "./Price.type";

const Price = ({ quantity, price }: PriceProps) => {
  const totalPrice: Number = +price * +quantity;
  return (
    <div className={styles.Price}>
      <p>
        총 상품 금액
        <img src={process.env.PUBLIC_URL + "/img/purchase/HelfButton.png"} alt="" />
      </p>
      <div>
        <span className={styles.totalQuantity}>총 수량 {quantity}개</span>
        <span className={styles.totalPrice}>{totalPrice.toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default Price;
