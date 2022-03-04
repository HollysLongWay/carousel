import styles from "./Button.module.css";
import { buttonProp } from "./Button.type";

const Button = ({ state }: buttonProp) => {
  const contentObj = {
    upload: "업로드",
    uploading: "업로드 중",
    complete: "성공",
    fail: "실패",
    disable: "업로드"
  };
  const content = contentObj[state];

  return (
    <button type="button" disabled={state === "disable" ? true : false} className={styles.button}>
      {content}
      <img src={`${process.env.PUBLIC_URL}/img/buttons/${state}.png`} alt={content} />
    </button>
  );
};

export default Button;
