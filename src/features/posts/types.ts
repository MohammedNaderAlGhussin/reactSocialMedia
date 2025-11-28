import type { Post } from "../../config/types/post.types";

export interface PostsState {
  posts: Post[];
  loading: boolean;
  creating: boolean;
  updating: boolean;
  deleting: boolean;
  error: string | null;
  // for pagenation.
  loadingMore: boolean;
  page: number;
  lastPage: number;
  hasMore: boolean;
}
