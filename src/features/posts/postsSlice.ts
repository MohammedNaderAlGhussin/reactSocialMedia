import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, fetchPosts } from "./postsThunk";
import type { PostsState } from "./types";

const initialState: PostsState = {
  posts: [],
  loading: false,
  creating: false,
  deleting: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Posts
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
    // Create Post
    builder
      .addCase(createPost.pending, (state) => {
        // Creating type instead of loading.
        state.creating = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.creating = false;
        state.posts.unshift(action.payload); // add new post to the top
      })
      .addCase(createPost.rejected, (state, action) => {
        state.creating = false;
        state.error = (action.payload as string) || "Failed to create post";
      });

    // Delete Post
    builder
      .addCase(deletePost.pending, (state) => {
        // Deleting type instead of loading.
        state.deleting = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.deleting = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.deleting = false;
        state.error = (action.payload as string) || "Failed to delete post";
      });
  },
});

export default postsSlice.reducer;
