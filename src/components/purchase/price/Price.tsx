import styles from "./Price.module.css";
import PriceProps from "./Price.type";

const Price = ({ quantity, price, setPrice }: PriceProps) => {
  return (
    <div>
      <span>총 수량 ${quantity}개</span>
      <span>{price}원</span>
    </div>
  );
};

export default Price;
