import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "./types";
import { fetchUserPosts, fetchUserProfile } from "./userProfileThunk";

const initialState: UserState = {
  posts: [],
  user: null,
  loadingUser: false,
  loadingPosts: false,
  errorUser: null,
  errorPosts: null,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    resetUserProfile: () => initialState,
  },
  extraReducers: (builder) => {
    // GET USER
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loadingUser = true;
        state.errorUser = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loadingUser = false;
        state.errorUser =
          (action.payload as string) || "Error Fetching User Data";
      })

      // GET USER
      .addCase(fetchUserPosts.pending, (state) => {
        state.loadingPosts = true;
        state.errorPosts = null;
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.loadingPosts = false;
        state.posts = action.payload;
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.loadingPosts = false;
        state.errorPosts = action.payload as string;
      });
  },
});
export const { resetUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
