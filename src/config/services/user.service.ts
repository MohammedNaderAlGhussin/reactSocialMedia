import { api } from "../axios.config";
import type { Post } from "../types/post.types";
import type { User } from "../types/user.types";

export const UserService = {
  getUserById: async (userId: number = 1): Promise<User> => {
    const res = await api.get(`/users/${userId}`);
    console.log(res.data.data);
    return res.data.data;
  },

  getUserPosts: async (userId: number): Promise<Post[]> => {
    const res = await api.get(`/users/${userId}/posts`);
    return res.data.data ;
  },
};
