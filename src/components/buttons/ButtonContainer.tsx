import Button from "./Button";

const ButtonContainer = () => {
  return (
    <div>
      <Button state="upload" />
      <Button state="uploading" />
      <Button state="complete" />
      <Button state="fail" />
      <Button state="disable" />
    </div>
  );
};

export default ButtonContainer;
