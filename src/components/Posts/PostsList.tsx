import { useEffect } from "react";
import Loader from "../common/Loader/Loader";
import PostCard from "./PostCard";
import { useAppDispatch, usePostsSelector } from "../../app/hooks";
import { fetchPosts } from "../../features/posts/postsSlice";

const PostsList = () => {
  const { loading, posts } = usePostsSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const postList = posts.map((post) => <PostCard key={post.id} {...post} />);

  return (
    <div className="pb-5">
      {loading && <Loader />}
      {!loading && postList}
    </div>
  );
};

export default PostsList;
