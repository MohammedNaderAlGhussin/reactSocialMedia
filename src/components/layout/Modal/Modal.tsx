import { useAppDispatch, useModalSelector } from "../../../app/hooks";
import { closeModal } from "../../../features/modal/modalSlice";
import DeleteConfirm from "../../Posts/DeleteConfirm";
import EditForm from "../../Posts/EditForm";

const Modal = () => {
  const { isOpened, type, payload } = useModalSelector();
  const dispatch = useAppDispatch();

  if (!isOpened) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl relative">
        {/* Close button */}
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        {/* Dynamic content */}
        {type === "edit" && (
          <EditForm post={payload} onFinish={() => dispatch(closeModal())} />
        )}

        {type === "delete" && (
          <DeleteConfirm
            postId={payload}
            onFinish={() => dispatch(closeModal())}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
