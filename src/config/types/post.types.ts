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
  imgageFile?: File | null;
}

export interface UpdatePostPayload {
  id: number;
  body: string;
  imageFile?: File | null;
  imageUrl?: string | null;
}
