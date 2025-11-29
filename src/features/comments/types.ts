export interface CommentsState {
  comments: Record<number, Comment[]>;
  loading: boolean;
  error: string | null;
}