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
