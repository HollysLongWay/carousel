// export enum buttonStates {
//   upload,
//   uploading,
//   complete,
//   fail,
//   disable
// }

export interface buttonProp {
  state: "upload" | "uploading" | "complete" | "fail" | "disable";
  disabled?: boolean;
}

// export type buttonStates = "UPLOAD" | "UPLOADING" | "COMPLETE" | "FAIL" | "DISABLE";
