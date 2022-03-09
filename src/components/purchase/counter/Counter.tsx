import { useRef } from "react";

const Counter = ({ quantity, setQuantity }) => {
  const plusBtn = useRef();
  const minusBtn = useRef();

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    if (quantity === 1) return;
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <button ref={plusBtn}>+</button>
      <span>{quantity}</span>
      <button ref={minusBtn}>-</button>
    </div>
  );
};

export default Counter;
