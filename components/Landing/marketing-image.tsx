import Image from "next/image";

export const MarketingImage = () => {
  return (
    <div className="bg-white border border-neutral-200 rounded-3xl shadow-2xl p-2">
      <div className="bg-neutral-100 h-full w-full rounded-[16px] p-1">
        <Image
          src="/marketing.jpeg"
          alt="Marketing Image"
          width={1024}
          height={1024}
          className="w-full rounded-[12px]"
          priority
        />
      </div>
    </div>
  );
};
