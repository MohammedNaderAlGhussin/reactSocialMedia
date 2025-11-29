import type { Post } from "../../config/types/post.types";
import type { User } from "../../config/types/user.types";

export interface UserState {
  user: User | null;
  posts: Post[];
  loadingUser: boolean;
  loadingPosts: boolean;
  errorUser: string | null;
  errorPosts: string | null;
}
