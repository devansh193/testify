"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { isVideoReviewEnabledAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";

export const VideoToggle = () => {
  const [videoReview, setVideoReview] = useRecoilState(
    isVideoReviewEnabledAtom
  );
  return (
    <div className="flex items-center justify-between mt-4">
      <Label htmlFor="video-toggle" className="text-md font-semibold">
        Video review
      </Label>
      <Switch
        id="video-toggle"
        checked={videoReview}
        onCheckedChange={setVideoReview}
      />
    </div>
  );
};
