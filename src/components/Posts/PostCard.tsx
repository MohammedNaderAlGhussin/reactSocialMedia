import { Link } from "react-router-dom";
import type { Post } from "../../config/types/post.types";
import ThreeDotsMenu from "../common/ThreeDotsMenu/ThreeDotsMenu";
import { useAppDispatch } from "../../app/hooks";
import { openModal } from "../../features/modal/modalSlice";

const PostCard = ({
  id,
  body,
  image,
  author,
  created_at,
  comments_count,
}: Post) => {
  const dispatch = useAppDispatch();
  // getting user to display
  const currentUser = window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user") as string)
    : null;

  const isOwner = author.id === currentUser.id;

  const commentsHandler = () => {
    dispatch(openModal({ type: "comments", payload: id }));
  };
  return (
    <div className="bg-card-bg mb-5 rounded-xl pb-4">
      <div className="flex items-center justify-between p-4 pb-0">
        <Link to={`/profile/${author.id}`}>
          <div className="flex items-center">
            <img
              src={
                typeof author.profile_image == "string"
                  ? author.profile_image
                  : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png"
              }
              alt=""
              className="w-9 h-9 rounded-full bg-main-bg  hover:scale-110 transition-transform duration-200 border border-light-border hover:border-primary"
            />
            <p className="text-main-text font-medium ml-2 ">
              <span className=" hover:text-primary hover:underline transition-colors duration-200">
                {author.name}
              </span>
              <span className="text-gray-400 sm:ml-0 md:ml-1">
                {created_at}
              </span>
              <span className="block text-sm leading-6 text-gray-400 sm:ml-0 md:ml-1">
                @{author.username}
              </span>
            </p>
          </div>
        </Link>
        {isOwner && (
          <ThreeDotsMenu
            post={{ id, body, image, author, created_at, comments_count }}
          />
        )}
      </div>
      <div className="pl-8 xl:pl-16 pr-4 pt-2 overflow-hidden">
        <p className="w-full font-medium text-main-text ">{body}</p>
        <img
          className="rounded-2xl border bg-main-bg border-light-border my-3 mr-2 w-full"
          src={image || ""}
          alt=""
        />
        <div className="flex justify-around text-[14px] items-center">
          <div className="flex items-center  text-gray-400 hover:text-red-600 ">
            likes 12.3 k
          </div>

          <div
            className="flex items-center  text-gray-400 hover:text-blue-400 cursor-pointer"
            onClick={commentsHandler}
          >
            {comments_count || 0} comments
          </div>
          <div className="flex items-center   text-gray-400 hover:text-blue-400">
            share
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
