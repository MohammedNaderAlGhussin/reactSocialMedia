export interface ModalState {
  isOpened: boolean;
  type: "edit" | "delete" | "comments" | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any | null;
}
