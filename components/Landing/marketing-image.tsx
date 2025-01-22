import Image from "next/image";

export const MarketingImage = () => {
  return (
    <div className="ring-4 ring-neutral-800 rounded-md">
      <Image
        src="/marketing.jpeg"
        alt="Marketing Image"
        width={1300} // Specify the desired width
        height={900} // Specify the desired height
        className="rounded-md"
      />
    </div>
  );
};
