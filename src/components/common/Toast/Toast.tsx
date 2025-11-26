import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppDispatch, useToastSelector } from "../../../app/hooks";
import { hideToast } from "../../../features/toast/toastSlice";

const Toast = () => {
  const dispatch = useAppDispatch();
  const { isOpened, message, type } = useToastSelector();

  // Auto close after 4s
  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => dispatch(hideToast()), 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpened, dispatch]);

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          className={`fixed bottom-6 right-6 z-999 text-white px-5 py-3 rounded-xl shadow-lg font-semibold
            ${type === "success" && "bg-green-500"}
            ${type === "error" && "bg-red-500"}
            ${type === "info" && "bg-blue-500"}
          `}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
