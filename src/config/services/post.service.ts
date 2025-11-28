import type { CreatePostPayload, UpdatePostPayload } from "../types/post.types";
import { api } from "./../axios.config";

export const PostService = {
  getPosts: async (page: number, limit: number = 15) => {
    const res = await api.get("/posts", {
      params: { page, limit },
    });
    console.log(res);
    return {
      posts: res.data.data,
      current_page: res.data.meta.current_page,
      last_page: res.data.meta.last_page,
    };
  },

  createPost: async (payload: CreatePostPayload) => {
    const formData = new FormData();
    formData.append("body", payload.body);

    if (payload.imageFile) {
      formData.append("image", payload.imageFile);
    }
    const res = await api.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data.data;
  },

  updatePost: async (payload: UpdatePostPayload) => {
    const formData = new FormData();
    formData.append("body", payload.body);

    if (payload.imageFile) {
      formData.append("image", payload.imageFile);
    } else if (payload.imageUrl) {
      // keep old image
      formData.append("existingImage", payload.imageUrl);
    }
    const res = await api.put(`/posts/${payload.id}`, formData);
    return res.data.data;
  },

  deletePost: async (id: number) => {
    const res = await api.delete(`/posts/${id}`);
    return res.data.data;
  },
};
