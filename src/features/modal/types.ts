export interface ModalState {
  isOpened: boolean;
  type: "edit" | "delete" | null;
  payload: unknown | null; //  post data or id
}
