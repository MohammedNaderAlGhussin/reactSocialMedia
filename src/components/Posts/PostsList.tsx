import { useEffect } from "react";
import Loader from "../common/Loader/Loader";
import PostCard from "./PostCard";
import { useAppDispatch, usePostsSelector } from "../../app/hooks";
import { fetchPosts } from "../../features/posts/postsThunk";
import ErrorMsg from "../common/Error/ErrorMsg";

const PostsList = () => {
  const { loading, posts, error, page, hasMore } = usePostsSelector();
  console.log(posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts(1));
    }
  }, [posts.length, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        if (!loading && hasMore) {
          dispatch(fetchPosts(page + 1));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, hasMore, page]);


  const postsList = posts.map((post) => <PostCard key={post.id} {...post} />);

  return (
    <div className="pb-5">
      {loading && posts.length === 0 && <Loader />}
      {postsList}
      {error && <ErrorMsg message={error} />}
    </div>
  );
};

export default PostsList;
