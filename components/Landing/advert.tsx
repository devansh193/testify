import { MovingText } from "../moving-text";
import { MarketingImage } from "./marketing-image";

export const Advert = () => {
  const text1 = "COLLECT AND SHOWCASE CUSTOMER TESTIMONIALS ";
  const text2 = "TESTIFY MAKES IT EASY FOR YOU ";
  return (
    <div className="mt-8 sm:mt-12 w-full max-w-7xl mx-auto space-y-16">
      <MarketingImage />
      <MovingText text1={text1} text2={text2} />
    </div>
  );
};
