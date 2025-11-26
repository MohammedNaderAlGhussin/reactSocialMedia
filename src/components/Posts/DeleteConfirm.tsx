import { useAppDispatch } from "../../app/hooks";
import { deletePost } from "../../features/posts/postsThunk";
import { showToast } from "../../features/toast/toastSlice";

export default function DeleteConfirm({
  postId,
  onFinish,
}: {
  postId: number;
  onFinish: () => void;
}) {
  const dispatch = useAppDispatch();

  const deletePostsHandler = () => {
    dispatch(deletePost(postId));
    dispatch(
      showToast({ type: "success", message: "Post deleted successfully!" })
    );
    onFinish();
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Delete Post?</h2>
      <p className="mb-6 text-gray-600">
        Are you sure you want to delete this post?
      </p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={onFinish}
          className="px-4 py-2 border rounded cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={deletePostsHandler}
          className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
