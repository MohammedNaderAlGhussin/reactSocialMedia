import type { ErrorMsgProps } from "./ErrorMsg.types";

const ErrorMsg = ({ message }: ErrorMsgProps) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-red-100 text-red-700 px-2 py-1 rounded-lg shadow text-center">
        {message}
      </div>
    </div>
  );
};

export default ErrorMsg;
