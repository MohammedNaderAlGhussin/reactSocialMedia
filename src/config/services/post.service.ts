import type { CreatePostPayload } from "../types/post.types";
import { api } from "./../axios.config";

export const PostService = {
  getPosts: async () => {
    const res = await api.get("/posts");
    return res.data.data;
  },

  createPost: async (payload: CreatePostPayload) => {
    const formData = new FormData();
    formData.append("body", payload.body);
    if (payload.imgageFile) {
      formData.append("image", payload.imgageFile);
    }
    const res = await api.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data.data;
  },

  deletePost: async (id: number) => {
    const res = await api.delete(`/posts/${id}`);
    return res.data.data;
  },
};
