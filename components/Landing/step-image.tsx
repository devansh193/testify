import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface StepImageProps {
  currentStep: number;
}

const images = [
  {
    src: "/create.png",
    alt: "Upload data interface demonstration",
  },
  {
    src: "/marketing.jpeg",
    alt: "Insights interface demonstration",
  },
  {
    src: "/testimonials.png",
    alt: "Click start interface demonstration",
  },
];

export function StepImage({ currentStep }: StepImageProps) {
  const image = images[currentStep % images.length];

  return (
    <div className="relative md:h-[450px] p-2 mt-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            height={1000}
            width={1500}
            className="rounded-xl shadow-2xl mt-12 border border-neutral-200 p-1"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
