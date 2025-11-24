import { api } from "./../axios.config";

export const PostService = {
  getPosts: async () => {
    const res = await api.get("/posts");
    return res.data.data;
  },

  createPost: async (body: string) => {
    const res = await api.post("/posts", { body });
    return res.data.data;
  },
};
