import { Download, Users } from "lucide-react";

export const TiltCard = () => {
  return (
    <div className="bg-[#E5EEF2] rounded-3xl p-8 transform md:rotate-[-3deg] relative z-30">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        Online store <span className="text-xl">›</span>
      </h2>
      <p className="text-gray-700 mb-8">
        Sell anything. Upload your content and leave the hosting, checkout, and
        delivery to us.
      </p>
      <div className="bg-[#151718] text-white rounded-xl p-4 space-y-4">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5" />
          <span>Online Course</span>
        </div>
        <div className="flex items-center gap-3">
          <Download className="h-5 w-5" />
          <span>Digital Downloads</span>
        </div>
      </div>
    </div>
  );
};
