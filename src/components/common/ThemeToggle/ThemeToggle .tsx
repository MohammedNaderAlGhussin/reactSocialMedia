import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full text-primary border-2 border-light-border hover:bg-primary-hv hover:text-white duration-300 cursor-pointer"
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      {dark ? "☀️" : "🌙"}
    </motion.button>
  );
};

export default ThemeToggle;
