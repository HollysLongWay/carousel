import { useEffect, useMemo, useState } from "react";

import Button from "./Button";
import { buttonState } from "./Button.type";

const ButtonContainer = () => {
  const [state, setState] = useState<buttonState>("uploading");
  const [num, setNum] = useState<number>(0);
  const stateArr: buttonState[] = useMemo(() => ["upload", "uploading", "complete", "fail", "disable"], []);

  useEffect(() => {
    setNum(num + 1 >= stateArr.length ? 0 : num + 1);
    let timer = setTimeout(() => {
      setState(stateArr[num]);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [state, stateArr]);

  return (
    <div>
      <Button buttonState={state} />
      {/* <Button state="uploading" />
      <Button state="complete" />
      <Button state="fail" />
      <Button state="disable" /> */}
    </div>
  );
};

export default ButtonContainer;
