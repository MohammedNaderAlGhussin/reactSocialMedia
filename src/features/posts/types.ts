import type { Post } from "../../config/types/post.types";

export interface PostsState {
  posts: Post[];
  loading: boolean;
  creating: boolean;
  updating: boolean;
  deleting: boolean;
  error: string | null;
}
