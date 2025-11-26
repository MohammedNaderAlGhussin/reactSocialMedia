import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ToastState, ToastType } from "./types";

const initialState: ToastState = {
  isOpened: false,
  message: "",
  type: "info",
};

const toastSlice = createSlice({
  name: "taost",
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{ message: string; type: ToastType }>
    ) => {
      state.isOpened = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    hideToast: (state) => {
      state.isOpened = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
