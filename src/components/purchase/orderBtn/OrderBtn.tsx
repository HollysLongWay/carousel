import styles from "./OrderBtn.module.css";

const OrderBtn = () => (
  <button className={styles.OrderBtn}>
    <img src={process.env.PUBLIC_URL + "/img/purchase/type=normal.png"} alt="" />
    구매하기
  </button>
);

export default OrderBtn;
