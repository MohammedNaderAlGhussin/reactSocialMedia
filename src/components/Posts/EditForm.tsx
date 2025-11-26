import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { updatePost } from "../../features/posts/postsThunk";
import { showToast } from "../../features/toast/toastSlice";
import type { Post } from "../../config/types/post.types";

interface EditFormProps {
  post: Post;
  onFinish: () => void;
}

const EditForm = ({ post, onFinish }: EditFormProps) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState(post.body);
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(post.image);
  console.log("Edit Form: ", post);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file)); // preview
    }
  };

  const handleSubmit = async () => {
    if (!text.trim() && !image) return;

    const result = await dispatch(
      updatePost({ id: post.id, body: text, imageFile: image, imageUrl: imageUrl })
    );

    if (updatePost.fulfilled.match(result)) {
      dispatch(showToast({ type: "success", message: "Post updated 🎉" }));
      onFinish();
    } else {
      dispatch(showToast({ type: "error", message: "Update failed ⚠️" }));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded-lg p-3 resize-none"
        placeholder="Update your post"
      />

      <input
        id="edit-image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {image && <p className="text-green-600 text-sm">📎 {image.name}</p>}

      <button
        onClick={handleSubmit}
        className="bg-primary hover:bg-primary-hv text-white font-bold rounded-lg py-2"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditForm;
