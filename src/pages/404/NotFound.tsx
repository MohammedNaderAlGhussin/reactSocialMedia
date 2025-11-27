import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen bg-main-bg flex flex-col justify-center items-center text-center p-4">
      <motion.h1
        className="text-primary text-6xl font-bold mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>

      <p className="text-main-text text-lg mb-6">
        Oops! The page you're looking for does not exist.
      </p>

      <button
        onClick={() => navigate("/home")}
        className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-primary-hv duration-300"
      >
        Go Home
      </button>
    </main>
  );
};

export default NotFound;
