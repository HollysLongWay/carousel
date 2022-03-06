// export enum buttonStates {
//   upload,
//   uploading,
//   complete,
//   fail,
//   disable
// }

export type buttonState = "upload" | "uploading" | "complete" | "fail" | "disable";

export interface buttonProp {
  buttonState: buttonState;
  disabled?: boolean;
}

// export type buttonStates = "UPLOAD" | "UPLOADING" | "COMPLETE" | "FAIL" | "DISABLE";
