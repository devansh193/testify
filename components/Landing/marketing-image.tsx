import Image from "next/image";

export const MarketingImage = () => {
  return (
    <div className="ring-8 ring-neutral-800 rounded-xl">
      <Image
        src="/marketing.jpeg"
        alt="Marketing Image"
        width={1100} // Specify the desired width
        height={700} // Specify the desired height
        className="rounded-xl"
      />
    </div>
  );
};
