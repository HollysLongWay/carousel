import styles from "./Counter.module.css";
import CounterProps from "./Counter.type";

const Counter = ({ quantity, setQuantity }: CounterProps) => {
  const minusQuantity = () => {
    if (quantity === 0) return;
    setQuantity(+quantity - 1);
  };

  const plusQuantity = () => {
    setQuantity(+quantity + 1);
  };

  return (
    <div className={styles.counter}>
      <div>
        <button className={styles.button} onClick={minusQuantity}>
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.button} onClick={plusQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
