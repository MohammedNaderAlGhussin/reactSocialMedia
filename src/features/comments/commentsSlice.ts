import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Comment } from "../../config/types/post.types";
import { fetchPostComments, createPostComment } from "./commentsThunk";

interface CommentsState {
  comments: Record<number, Comment[]>;
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: {},
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    resetCommentsState: (state) => {
      state.comments = {};
      state.loading = false;
      state.error = null;
    },

    addOptimisticComment: (
      state,
      action: PayloadAction<{ postId: number; comment: Comment }>
    ) => {
      const { postId, comment } = action.payload;
      if (!state.comments[postId]) state.comments[postId] = [];
      state.comments[postId].push(comment);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.loading = false;
        const postId = action.meta.arg;
        state.comments[postId] = action.payload;
      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load comments";
      })

      .addCase(createPostComment.fulfilled, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const postId = (action.payload as any).postId;
        if (!state.comments[postId]) state.comments[postId] = [];
        state.comments[postId].push(action.payload); 
      });
  },
});

export const { resetCommentsState, addOptimisticComment } =
  commentsSlice.actions;
export default commentsSlice.reducer;
