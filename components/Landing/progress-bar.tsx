import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200">
      <motion.div
        className="w-full bg-blue-500"
        initial={{ height: 0 }}
        animate={{ height: `${progress}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
