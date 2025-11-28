import { useEffect } from "react";
import Loader from "../common/Loader/Loader";
import PostCard from "./PostCard";
import { useAppDispatch, usePostsSelector } from "../../app/hooks";
import { fetchPosts } from "../../features/posts/postsThunk";
import ErrorMsg from "../common/Error/ErrorMsg";

const PostsList = () => {
  const { loading, loadingMore, posts, error, page, hasMore } =
    usePostsSelector();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts(1));
    }
  }, [posts.length, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight;

      if (nearBottom && !loadingMore && hasMore) {
        dispatch(fetchPosts(page + 1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore, hasMore, page, dispatch]);

  const postsList = posts.map((post) => <PostCard key={post.id} {...post} />);

  return (
    <div className="pb-5">
      {loading && posts.length === 0 && <Loader />}
      {postsList}

      {/* infinite scroll loading indicator */}
      {loadingMore && <Loader />}

      {error && <ErrorMsg message={error} />}

      {!loadingMore && !hasMore && (
        <p className="text-center py-4 text-sec-text">
          🚀 You are all caught up — no more posts to show
        </p>
      )}
    </div>
  );
};

export default PostsList;
