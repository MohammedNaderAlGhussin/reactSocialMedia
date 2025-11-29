import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Custom hook to select posts state
export const usePostsSelector = () => useAppSelector((state) => state.posts);

// Custom hook to select auth state
export const useAuthSelector = () => useAppSelector((state) => state.auth);

// Custom hook to select modal state
export const useModalSelector = () => useAppSelector((state) => state.modal);

// Custom hook to select taost state
export const useToastSelector = () => useAppSelector((state) => state.taost);

// Custom hook to select userProfile state

export const useUserProfileSelector = () =>
  useAppSelector((state) => state.userProfile);
