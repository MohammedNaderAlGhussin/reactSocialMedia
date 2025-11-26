import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ModalState } from "./types";

const initialState: ModalState = {
  isOpened: false,
  type: null,
  payload: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ type: "edit" | "delete"; payload?: unknown }>
    ) => {
      state.isOpened = true;
      state.type = action.payload.type;
      state.payload = action.payload.payload;
    },
    closeModal: (state) => {
      state.isOpened = false;
      state.type = null;
      state.payload = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
