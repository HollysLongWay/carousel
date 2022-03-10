import { useState } from "react";
import Counter from "../counter/Counter";
import OrderBtn from "../orderBtn/OrderBtn";
import Price from "../price/Price";
import styles from "./PurchaseView.module.css";

const PurchaseView = () => {
  const [quantity, setQuantity] = useState<Number>(1);
  const price: number = 6370;

  return (
    <div className="purchaseView">
      <img
        src={process.env.PUBLIC_URL + "/img/purchase/제품 이미지.png"}
        alt="제품 이미지"
        className={styles.itemView}
      />
      <h3 className={styles.itemName}>
        래피젠 코로나 자가 검사 키트 <br />
        2개입X1박스
      </h3>
      <div className={styles.itemPrice}>
        <span className={styles.discount}>88%</span>
        <div>
          <span className={styles.prevPrice}>56,760원</span>
          <span className={styles.curPrice}>6,370원</span>
        </div>
      </div>
      <div className={styles.Delivery}>
        <span className={styles.discount}>택배배송</span>
        <span className={styles.deliveryPrice}>3,000원</span>
        <span className={styles.deliveryBold}>(주문시 결제)</span>
        <p className={styles.DeliveryThin}>10개마다 부과</p>
      </div>
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <Price quantity={quantity} price={price} />
      <OrderBtn />
    </div>
  );
};

export default PurchaseView;
