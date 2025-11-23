import type { AuthUser } from "../../config/types/auth.types";

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  registerSuccess: boolean;
  loginSuccess: boolean;
}

