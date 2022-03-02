import { buttonProp } from "./Button.type";

const Button = ({ state }: buttonProp) => {
  const contentObj = { upload: "업로드", uploading: "업로드 중", complete: "성공", fail: "실패", disable: "실패" };
  const content = contentObj[state];

  return (
    <button type="button" disabled={state === "fail" ? true : false}>
      {content}
      <img src={`${process.env.PUBLIC_URL}/img/buttons/${state}.png`} alt={content} />
    </button>
  );
};
