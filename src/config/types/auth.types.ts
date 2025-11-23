export interface RegisterPayload {
  username: string;
  password: string;
  fullname: string;
  email: string;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthUser {
  id: number;
  username: string;
  name: string;
  email: string;
  profile_image?: unknown;
  posts_count?: number;
  comments_count?: number;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}
