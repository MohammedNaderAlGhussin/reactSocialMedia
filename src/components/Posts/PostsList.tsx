import { useEffect } from "react";
import Loader from "../common/Loader/Loader";
import PostCard from "./PostCard";
import { useAppDispatch, usePostsSelector } from "../../app/hooks";
import { fetchPosts } from "../../features/posts/postsThunk";
import ErrorMsg from "../common/Error/ErrorMsg";

const PostsList = () => {
  const { loading, posts, error } = usePostsSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [posts.length, dispatch]);
  const postList = posts.map((post) => <PostCard key={post.id} {...post} />);

  return (
    <div className="pb-5">
      {loading && posts.length === 0 && <Loader />}
      {postList}
      {error && <ErrorMsg message={error} />}
    </div>
  );
};

export default PostsList;
