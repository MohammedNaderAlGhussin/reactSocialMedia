export interface Author {
  id: number;
  username: string;
  name: string;
  profile_image: string | undefined;
}

export interface Post {
  id: number;
  title?: string;
  body: string;
  image: string | null;
  author: Author;
  created_at: string;
  comments_count: number;
}

export interface CreatePostPayload {
  body: string;
  imageFile?: File | null;
}

export interface UpdatePostPayload {
  id: number;
  body: string;
  imageFile?: File | null;
  imageUrl?: string | null;
}

export interface CommentAuthor {
  id: number;
  username: string;
  name: string;
  profile_image: string | null;
}

export interface Comment {
  id: number;
  body: string;
  author: CommentAuthor;
}

export interface CreateCommentPayload {
  postId: number;
  body: string;
}