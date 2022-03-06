import styles from "./Button.module.css";
import { buttonProp } from "./Button.type";

const Button = ({ buttonState }: buttonProp) => {
  const contentObj = {
    upload: "업로드",
    uploading: "업로드 중",
    complete: "성공",
    fail: "실패",
    disable: "업로드"
  };
  const content = contentObj[buttonState];

  return (
    <button type="button" disabled={buttonState === "disable" ? true : false} className={styles.uploadBtn}>
      {content}
      <img src={`${process.env.PUBLIC_URL}/img/buttons/${buttonState}.png`} alt={`${content} 버튼 이미지`} />
    </button>
  );
};

export default Button;
