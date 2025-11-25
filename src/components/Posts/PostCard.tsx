import type { Post } from "../../config/types/post.types";
import ThreeDotsMenu from "../common/ThreeDotsMenu/ThreeDotsMenu";

const PostCard = ({
  id,
  body,
  image,
  author,
  created_at,
  comments_count,
}: Post) => {
  // getting user to display
  const currentUser = window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user") as string)
    : null;

  console.log(id);
  const isOwner = author.id === currentUser.id;
  return (
    <div className="bg-white mb-5 rounded-xl pb-4">
      <div className="flex items-center justify-between p-4 pb-0">
        <div className="flex items-center">
          <img
            src={
              typeof author.profile_image == "string"
                ? author.profile_image
                : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png"
            }
            alt=""
            className="w-9 h-9 rounded-full"
          />
          <p className="text-gray-800 font-medium ml-2">
            {author.name}{" "}
            <span className="text-gray-400 sm:ml-0 md:ml-1">{created_at}</span>
            <span className="block text-sm leading-6 text-gray-400 sm:ml-0 md:ml-1">
              @{author.username}
            </span>
          </p>
        </div>
        {isOwner && <ThreeDotsMenu id={id} />}
      </div>
      <div className="pl-8 xl:pl-16 pr-4 pt-2">
        <p className="w-auto font-medium text-gray-800 ">{body}</p>
        <img
          className="rounded-2xl border border-main-bg my-3 mr-2 w-full"
          src={image || ""}
          alt=""
        />
        <div className="flex justify-around items-center">
          <div className="flex items-center text-xs text-gray-400 hover:text-red-600 ">
            likes 12.3 k
          </div>

          <div className="flex items-center  text-xs text-gray-400 hover:text-blue-400">
            {comments_count || 0} comments
          </div>
          <div className="flex items-center  text-xs text-gray-400 hover:text-blue-400">
            share
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
