import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../config/services/auth.service";
import type {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "../../config/types/auth.types";
import axios from "axios";
import { showToast } from "../toast/toastSlice";

//  Register
export const registerThunk = createAsyncThunk<
  AuthResponse,
  RegisterPayload,
  { rejectValue: string }
>("auth/register", async (payload, thunkAPI) => {
  try {
    const response = await AuthService.register(payload);
    thunkAPI.dispatch(
      showToast({
        message: "Account created successfully 🎊",
        type: "success",
      })
    );
    return response;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      thunkAPI.dispatch(
        showToast({
          message:
            err.response?.data?.message || "Failed Creating An Account! ",
          type: "error",
        })
      );
    }
    return thunkAPI.rejectWithValue(
      err instanceof Error ? err.message : "Register failed"
    );
  }
});

//  Login
export const loginThunk = createAsyncThunk<
  AuthResponse,
  LoginPayload,
  { rejectValue: string }
>("auth/login", async (payload, thunkAPI) => {
  try {
    const response = await AuthService.login(payload);
    thunkAPI.dispatch(
      showToast({
        message: "You're logged in 🎉",
        type: "success",
      })
    );
    return response;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      thunkAPI.dispatch(
        showToast({
          message: err.response?.data?.message || "Login failed",
          type: "error",
        })
      );
    }
    return thunkAPI.rejectWithValue(
      err instanceof Error ? err.message : "Login failed"
    );
  }
});

//  Logout
export const logoutThunk = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>("auth/logout", async (_, thunkAPI) => {
  try {
    await AuthService.logout();
    thunkAPI.dispatch(
      showToast({
        message: "Logged out successfully!",
        type: "success",
      })
    );
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(
        err.response?.data?.message || "Logout failed"
      );
    }
    return thunkAPI.rejectWithValue(
      err instanceof Error ? err.message : "Logout failed"
    );
  }
});
