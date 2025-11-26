import type { Post } from "../../config/types/post.types";

export default function EditForm({
  post,
  onFinish,
}: {
  post: Post;
  onFinish: () => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // dispatch update action here
        onFinish();
      }}
    >
      <h2 className="text-xl font-bold mb-4">Edit Post</h2>
      <input
        defaultValue={post.title}
        className="border p-2 rounded w-full mb-3"
      />
      <textarea
        defaultValue={post.body}
        className="border p-2 rounded w-full mb-3"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
}
