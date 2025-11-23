import { useEffect, useState } from "react";
import type { Post } from "../../config/types/post.types";
import { PostService } from "../../config/services/post.service";
import Loader from "../common/Loader/Loader";
import PostCard from "./PostCard";

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(posts);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await PostService.getPosts();
        setPosts(data);
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);
  const postList = posts.map((post) => <PostCard key={post.id} {...post} />);

  return (
    <div className="pb-5">
      {loading && <Loader />}
      {!loading && postList}
    </div>
  );
};

export default PostsList;
