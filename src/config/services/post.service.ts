import { api } from "./../axios.config";

export const PostService = {
  getPosts: async () => {
    const res = await api.get("/posts");
    return res.data.data;
  },
};
