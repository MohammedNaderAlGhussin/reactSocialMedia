import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostService } from "../../config/services/post.service";
import axios from "axios";
import type {
  CreatePostPayload,
  UpdatePostPayload,
} from "../../config/types/post.types";

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
  async (payload: CreatePostPayload, thunkAPI) => {
    try {
      const res = await PostService.createPost(payload);
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

//  Update Post Thunk function

export const updatePost = createAsyncThunk(
  "/posts/updatePost",
  async (payload: UpdatePostPayload, thunkAPI) => {
    try {
      const res = await PostService.updatePost(payload);
      return res;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(
          err?.response?.data?.message || err.message || "Failed to update post"
        );
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export const deletePost = createAsyncThunk(
  "/posts/deletePost",
  async (payload: number, thunkAPI) => {
    try {
      await PostService.deletePost(payload);
      return payload;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(
          `${err?.message}: ${err.response?.data?.message}`
        );
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);
