import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, fetchPosts, updatePost } from "./postsThunk";
import type { PostsState } from "./types";
import type { Post } from "../../config/types/post.types";

const initialState: PostsState = {
  posts: [],
  loading: false,
  creating: false,
  updating: false,
  deleting: false,
  error: null,
  loadingMore: false,
  page: 1,
  lastPage: 1,
  hasMore: true,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Posts
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        const page = action.meta.arg;
        state.error = null; // reset before new request

        if (page == 1) {
          state.loading = true;
        } else {
          state.loadingMore = true;
        }
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.loadingMore = false;

        // merging the posts not updating and checking for any duplicates, when getting more posts (pagenatoin)
        // post1, post2, post3, post3, post4, post5 --> the following code removes duplicates

        const newPosts = action.payload.posts;

        const uniquePosts = newPosts.filter(
          (newPost: Post) =>
            !state.posts.some((existing) => existing.id === newPost.id)
        );

        state.posts = [...state.posts, ...uniquePosts];

        state.page = action.payload.current_page;
        state.lastPage = action.payload.last_page;
        state.hasMore = action.payload.current_page < action.payload.last_page; // check if posts ended
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.loadingMore = false;
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

    // Update Post
    builder
      .addCase(updatePost.pending, (state) => {
        state.updating = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.updating = false;
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.updating = true;
        state.error = (action.payload as string) || "Update Failed";
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
