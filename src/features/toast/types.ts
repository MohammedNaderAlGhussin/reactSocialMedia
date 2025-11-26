export type ToastType = "success" | "error" | "info";

export interface ToastState {
  isOpened: boolean;
  message: string;
  type: ToastType;
}
