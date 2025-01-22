import { motion } from "framer-motion";

export const DashboardHeader = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5,
        }}
        className="bg-blue-50 p-4 rounded-2xl mb-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-4 h-14">
          <div>
            <span className="text-xl bg-blue-1 p-4 rounded-full">👋</span>
          </div>
          <div>
            <h3 className="font-medium font-sans">Create board</h3>
            <p className="text-muted-foreground font-sans ">
              Create board and start collecting user testimonials.
            </p>
          </div>
        </div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
          Create New Board
        </button>
      </motion.div>
    </div>
  );
};
