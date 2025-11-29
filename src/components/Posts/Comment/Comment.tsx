import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch } from "../../../app/hooks";
import {
  fetchPostComments,
  createPostComment,
} from "../../../features/comments/commentsThunk";
import { useCommentsSelector } from "../../../app/hooks";
import Loader from "../../common/Loader/Loader";
import ErrorMsg from "../../common/Error/ErrorMsg";
import { showToast } from "../../../features/toast/toastSlice";
import { Link } from "react-router-dom";

const Comment = ({
  postId,
  onClose,
}: {
  postId: number;
  onClose: () => void;
}) => {
  const dispatch = useAppDispatch();
  const { comments, loading, error } = useCommentsSelector();
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchPostComments(postId));
  }, [postId, dispatch]);

  const submit = async () => {
    if (!input.trim()) return;

    const result = await dispatch(createPostComment({ postId, body: input }));

      if (createPostComment.fulfilled.match(result)) {
        // fetching post comments after creating one 
      dispatch(fetchPostComments(postId));
      dispatch(
        showToast({ type: "success", message: "Comment added successfully" })
      );
      setInput("");
    } else {
      dispatch(showToast({ type: "error", message: "Something went wrong!" }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-3 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-main-bg w-[70%] md:w-1/2 xl:w-1/3 rounded-2xl shadow-xl p-4"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3 border-b pb-2 border-light-border">
          <h2 className="text-xl font-bold">Comments</h2>
          <button
            onClick={onClose}
            className="text-sec-text hover:text-primary cursor-pointer"
          >
            ✖
          </button>
        </div>

        {/* Body */}
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMsg message={error} />
        ) : (
          <div className="max-h-[600px] overflow-y-auto flex flex-col gap-3 mt-1">
            {comments[postId]?.length > 0 ? (
              comments[postId].map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 items-start bg-main-bg p-3 rounded-xl"
                >
                  <Link to={`/profile/${comment.author.id}`} onClick={onClose}>
                    <img
                      src={
                        typeof comment.author.profile_image == "string"
                          ? comment.author.profile_image
                          : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png"
                      }
                      alt=""
                      className="w-9 h-9 rounded-full bg-main-bg hover:scale-110 transition-transform duration-200 border border-light-border hover:border-primary"
                    />
                  </Link>
                  <div>
                    <p className="font-bold text-main-text">
                      {comment.author.username}
                    </p>
                    <p className="text-sm text-sec-text max-w-full">
                      {comment.body}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-sec-text">No comments yet</p>
            )}
          </div>
        )}

        {/* Comment Form */}
        <div className="flex flex-col gap-2 my-4">
          <textarea
            className="input w-full"
            placeholder="Write a comment..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={submit}
            className={`bg-primary text-white duration-300 font-bold cursor-pointer flex items-center justify-center rounded-xl w-[150px] py-2 ml-auto mr-1 
                  ${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary-hv"
                  }`}
          >
            Send
          </button>
        </div>

        {error && <p className="text-center text-red-500 mt-2">{error}</p>}
      </motion.div>
    </div>
  );
};

export default Comment;
