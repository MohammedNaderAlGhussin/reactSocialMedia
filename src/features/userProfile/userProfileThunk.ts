import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../config/services/user.service";
import axios from "axios";
import type { User } from "../../config/types/user.types";
import type { Post } from "../../config/types/post.types";

export const fetchUserProfile = createAsyncThunk<
  User,
  number,
  { rejectValue: string }
>("userProfile/fetchUserProfile", async (id: number, thunkAPI) => {
  try {
    const res = await UserService.getUserById(id);
    return res;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(
        `${err?.message}: ${err.response?.data?.message}`
      );
    }

    return thunkAPI.rejectWithValue("Error: Failed to fetch user");
  }
});

export const fetchUserPosts = createAsyncThunk<
  Post[],
  number,
  { rejectValue: string }
>("userProfile/fetchUserPosts", async (userId, thunkAPI) => {
  try {
    return await UserService.getUserPosts(userId);
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkAPI.rejectWithValue(
        `${err?.message}: ${err.response?.data?.message}`
      );
    }

    return thunkAPI.rejectWithValue("Error: Failed to fetch posts");
  }
});
