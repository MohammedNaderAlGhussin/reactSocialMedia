import type { Post } from "../../config/types/post.types";

export interface PostsState {
  posts: Post[];
  loading: boolean;
  creating: boolean;
  deleting: boolean;
  error: string | null;
}
