import { useEffect, useState } from "react";
import type { Post } from "../../config/types/post.types";
import { PostService } from "../../config/services/post.service";

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
  const postList = posts.map((post) => {
    return (
      <div key={post.id} className="post-card">
        <div className="bg-white mb-5 rounded-xl cursor-pointer pb-4">
          <div className="flex items-center p-4 pb-0">
            <img
              src={
                typeof post.author.profile_image == "string"
                  ? post.author.profile_image
                  : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png"
              }
              alt=""
              className="w-9 h-9 rounded-full"
            />
            <p className="text-gray-800 font-medium ml-2">
              {post.author.name}{" "}
              <span className="text-gray-400 sm:ml-0 md:ml-1">
                {post.created_at}
              </span>
              <span className="block text-sm leading-6 text-gray-400 sm:ml-0 md:ml-1">
                @{post.author.username}
              </span>
            </p>
          </div>
          <div className="pl-8 xl:pl-16 pr-4 pt-2">
            <p className="w-auto font-medium text-gray-800 ">{post.body}</p>
            <img
              className="rounded-2xl border border-main-bg my-3 mr-2 w-full"
              src={post.image || ""}
              alt=""
            />
            <div className="flex justify-around items-center">
              <div className="flex items-center text-xs text-gray-400 hover:text-red-600 ">
                likes 12.3 k
              </div>

              <div className="flex items-center  text-xs text-gray-400 hover:text-blue-400">
                {post.comments_count || 0} comments
              </div>
              <div className="flex items-center  text-xs text-gray-400 hover:text-blue-400">
                share
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="pb-5">
      {loading && <p>Loading...</p>}
      {!loading && postList}
    </div>
  );
};

export default PostsList;
