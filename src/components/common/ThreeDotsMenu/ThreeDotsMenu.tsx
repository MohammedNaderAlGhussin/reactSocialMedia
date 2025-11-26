import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { openModal } from "../../../features/modal/modalSlice";
import { AnimatePresence, motion } from "framer-motion";

interface ThreeDotsMenuProps {
  id: number;
  body: string;
}

export default function ThreeDotsMenu({ id, body }: ThreeDotsMenuProps) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const editPostHandler = () => {
    dispatch(openModal({ type: "edit", payload: body }));
  };
  const deletePostHandler = () => {
    dispatch(openModal({ type: "delete", payload: id }));
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
        <AnimatePresence>
          <motion.div
            className="absolute right-0 mt-1 w-32 bg-white border-2 border-primary rounded shadow-md z-10 "
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
              onClick={editPostHandler}
            >
              Edit
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer"
              onClick={deletePostHandler}
            >
              Delete
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
