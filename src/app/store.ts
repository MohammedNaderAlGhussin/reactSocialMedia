import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import authReducer from "../features/auth/authSlice";
import modalReducer from "../features/modal/modalSlice";
import toastReducer from "../features/toast/toastSlice";
import userProfileReducer from "../features/userProfile/userProfileSlice";
import commentsReducer from "./../features/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    modal: modalReducer,
    taost: toastReducer,
    userProfile: userProfileReducer,
    comments: commentsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
