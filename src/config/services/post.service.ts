import { api } from "./../axios.config";

export const PostService = {
  getPosts: async () => {
    const res = await api.get("/posts?limit=5");
    return res.data.data;
  },
};
