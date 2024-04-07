"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  const letters = title.split("");
  return (
    <h1 className="text-3xl font-bold text-secondary p-4">
      {letters.map((letter, idx) => (
        <motion.span
          transition={{ duration: 0.8, delay: idx * 0.1 }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          className="hover:text-primary duration-200"
          key={idx}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default Title;
