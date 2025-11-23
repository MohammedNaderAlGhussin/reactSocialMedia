import type { Post } from "../../config/types/post.types";

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}