export interface Author {
  id: number;
  username: string;
  name: string;
  profile_image: string | null;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  image: string | null;
  author: Author;
  created_at: string;
}
