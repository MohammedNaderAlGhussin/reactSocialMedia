import type { ErrorMsgProps } from "./ErrorMsg.types";

const ErrorMsg = ({ message }: ErrorMsgProps) => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow text-center">
        {message}
      </div>
    </div>
  );
};

export default ErrorMsg;
