import styles from "./Price.module.css";
import PriceProps from "./Price.type";

const Price = ({ quantity, price }: PriceProps) => {
  const totalPrice: Number = +price * +quantity;
  return (
    <div>
      <span>총 수량 {quantity}개</span>
      <span>{totalPrice.toLocaleString()}원</span>
    </div>
  );
};

export default Price;
