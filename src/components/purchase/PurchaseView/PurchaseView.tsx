import { useState } from "react";
import Counter from "../counter/Counter";
import OrderBtn from "../orderBtn/OrderBtn";
import Price from "../price/Price";
import styles from "./PurchaseView.module.css";
import productProps from "./Product.type";

const PurchaseView = ({ product: { name, option, discountRate, price } }: productProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const discountedPrice = Math.floor(price - (price * discountRate) / 100);

  return (
    <div className="purchaseView">
      <img
        src={process.env.PUBLIC_URL + "/img/purchase/제품 이미지.png"}
        alt="제품 이미지"
        className={styles.itemView}
      />
      <h3 className={styles.itemName}>
        {name}
        <br />
        {option}
      </h3>
      <div className={styles.itemPrice}>
        <span className={styles.discount}>{discountRate + "%"}</span>
        <div>
          <span className={styles.prevPrice}>{price.toLocaleString()}원</span>
          <span className={styles.curPrice}>{discountedPrice.toLocaleString()}원</span>
        </div>
      </div>
      <div className={styles.Delivery}>
        <span className={styles.discount}>택배배송</span>
        <span className={styles.deliveryPrice}>3,000원</span>
        <span className={styles.deliveryBold}>(주문시 결제)</span>
        <p className={styles.DeliveryThin}>10개마다 부과</p>
      </div>
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <Price quantity={quantity} discountedPrice={discountedPrice} />
      <OrderBtn quantity={quantity} />
    </div>
  );
};

export default PurchaseView;
