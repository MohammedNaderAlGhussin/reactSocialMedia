import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "../../config/services/post.service";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const res = await PostService.getPosts();
      return res;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(
          `${err?.message}: ${err.response?.data?.message}`
        );
      }

      return thunkAPI.rejectWithValue("Error: Something went wrong");
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (body: string, thunkAPI) => {
    try {
      const res = await PostService.createPost(body);
      return res;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(
          err.response?.data?.message || err.message || "Request failed"
        );
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
