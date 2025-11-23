import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "../../config/services/post.service";
import type { Post } from "../../config/types/post.types";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const res = await PostService.getPosts();
      return res;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.log(err);
        return thunkAPI.rejectWithValue(
          `${err.message}: ${err.response?.data?.message}`
        );
      }

      return thunkAPI.rejectWithValue("Error: Something went wrong");
    }
  }
);

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

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
