import { motion } from "framer-motion";

export const DashboardHeader = () => {
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-primary/10 p-4 rounded-xl mb-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-4 h-14">
          <div>
            <span className="text-xl bg-neutral-400 p-4 rounded-full">👋</span>
          </div>
          <div>
            <h3 className="font-medium">Create board</h3>
            <p className="text-muted-foreground">
              Create board and start collecting user testimonials.
            </p>
          </div>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
          Create Board
        </button>
      </motion.div>
    </div>
  );
};
