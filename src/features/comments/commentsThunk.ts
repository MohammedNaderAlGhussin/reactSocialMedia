import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PostService } from "./../../config/services/post.service";
import type {
  Comment,
  CreateCommentPayload,
} from "../../config/types/post.types";

export const fetchPostComments = createAsyncThunk<
  Comment[],
  number,
  { rejectValue: string }
>("comments/fetchPostComments", async (postId, thunkAPI) => {
  try {
    return await PostService.getCommentsForPost(postId);
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(err.message);
    }
    return thunkAPI.rejectWithValue("Unexpected error fetching comments");
  }
});

export const createPostComment = createAsyncThunk<
  Comment,
  CreateCommentPayload,
  { rejectValue: string }
>("comments/createComment", async (payload, thunkAPI) => {
  try {
    return await PostService.createComment(payload);
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(err.message);
    }
    return thunkAPI.rejectWithValue("Unexpected error creating comment");
  }
});
