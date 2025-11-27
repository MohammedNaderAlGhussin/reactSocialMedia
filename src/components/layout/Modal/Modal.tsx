import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useModalSelector } from "../../../app/hooks";
import { closeModal } from "../../../features/modal/modalSlice";
import DeleteConfirm from "../../Posts/DeleteConfirm";
import EditForm from "../../Posts/EditForm";
import { useEffect } from "react";

const Modal = () => {
  const { isOpened, type, payload } = useModalSelector();
  const dispatch = useAppDispatch();

  // Disable scroll when modal is opened
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpened]);

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-card-bg rounded-xl p-6 w-[90%] max-w-md shadow-xl relative"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close button */}
            <button
              onClick={() => dispatch(closeModal())}
              className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            {/* Dynamic content */}
            {type === "edit" && (
              <EditForm
                post={payload}
                onFinish={() => dispatch(closeModal())}
              />
            )}

            {type === "delete" && (
              <DeleteConfirm
                postId={payload}
                onFinish={() => dispatch(closeModal())}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
