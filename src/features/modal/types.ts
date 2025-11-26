export interface ModalState {
  isOpened: boolean;
  type: "edit" | "delete" | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any | null; //  post data or id
}
