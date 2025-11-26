import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "../types/auth.types";
import { api } from "./../axios.config";

export const AuthService = {
  register: async (payload: RegisterPayload): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/register", payload);
    return res.data;
  },

  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const res = await api.post<AuthResponse>("/login", payload);
    return res.data;
  },

  //  Logout (token added automatically by axios interceptor)
  logout: async (): Promise<void> => {
    await api.post("/logout");
  },
};
