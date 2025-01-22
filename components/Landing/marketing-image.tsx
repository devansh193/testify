import Image from "next/image";

export const MarketingImage = () => {
  return (
    <div className="relative mx-auto max-w-lg sm:max-w-3xl lg:max-w-7xl bg-white border border-neutral-300 rounded-xl ring-8 ring-neutral-100 overflow-hidden">
      <Image
        src="/marketing.jpeg"
        alt="Marketing Image"
        width={1100}
        height={700}
        className="w-full h-auto rounded-lg"
        priority
      />
    </div>
  );
};
