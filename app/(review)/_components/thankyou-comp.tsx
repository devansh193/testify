import { clientBoardDetails } from "@/recoil/client-atom/atom";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";

export const ThankYou = () => {
  const boardDetails = useRecoilValue(clientBoardDetails);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center justify-center max-w-3xl mt-12 md:mt-24 lg:mt-48"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl text-center font-bold tracking-tight text-foreground mb-6"
      >
        {boardDetails?.thankYouPageTitle}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-4 text-center text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8"
      >
        {boardDetails?.thankYouPageMessage}
      </motion.p>
    </motion.div>
  );
};
