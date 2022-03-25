import styles from "./Tooltip.module.css";
import tooltipProps from "./Tooltip.type";

const Tooltip = ({ showTooltip, setShowTooltip }: tooltipProps) => {
  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <article className={styles.tooltip}>
      <p>
        총 상품금액에 <strong className={styles.inform__shippingFee}>배송비는 포함되어 있지 않습니다.</strong>
        <br />
        결제시 배송비가 추가될 수 있습니다.
      </p>
      <button className={styles.closeBtn} onClick={handleClick}>
        <img src={process.env.PUBLIC_URL + "/img/purchase/cross.png"} alt="툴팁 닫기" />
      </button>
    </article>
  );
};

export default Tooltip;
