import { useState } from "react";
import { deletePost } from "../../../features/posts/postsThunk";
import { useAppDispatch } from "../../../app/hooks";

interface ThreeDotsMenuProps {
  id: number;
}

export default function ThreeDotsMenu({ id }: ThreeDotsMenuProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const deletePostHandler = () => {
    dispatch(deletePost(id));
  };
  return (
    <div
      className="relative inline-block text-left"
      onClick={() => setOpen(false)}
    >
      {/* 3 dots button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 pl-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 4a2 2 0 11-4 0 2 2 0 014 0zm0 6a2 2 0 11-4 0 2 2 0 014 0zm0 6a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-1 w-32 bg-white border-2 border-primary rounded shadow-md z-10 ">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100">
            Edit
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
            onClick={deletePostHandler}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
