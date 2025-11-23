import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsThunk";
import type { PostsState } from "./types";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null; // reset before new request
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "ERROR: Failed to fetch posts";
      });
  },
});

export default postsSlice.reducer;
