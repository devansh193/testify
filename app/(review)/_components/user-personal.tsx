import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ratingTitleAtom, userNameAtom } from "@/recoil/atom";
import { userSlideSelector } from "@/recoil/client-atom/atom";
import { motion } from "framer-motion";
import { FileImage, Pencil, X } from "lucide-react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Image from "next/image";
import { useState } from "react";
import TextReview from "@/components/create-page/text-review-page/text-reviews-page";
import { testimonialTextAtom } from "@/recoil/testimonial-atom/atom";
import { useCreateTestimonial } from "@/features/testimonial/api/use-create-testimonial";
interface UserPersonalProps {
  title: string;
}

export const UserPersonal = ({ title }: UserPersonalProps) => {
  const setSlide = useSetRecoilState(userSlideSelector);
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(userNameAtom);
  const [profession, setProfession] = useRecoilState(userNameAtom);
  const review = useRecoilValue(testimonialTextAtom);
  const rating = useRecoilValue(ratingTitleAtom);
  // const { mutate: createTestimonial, isLoading } = useCreateTestimonial();
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelUpload = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    const payload = {
      name,
      email,
      profession,
      TextReview: review,
      rating: rating,
      boardId: "boardId",
    };

    // createTestimonial(payload);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[700px] rounded-xl p-6 md:p-8"
      >
        <h1 className="text-3xl md:text-4xl font-medium  text-gray-900">
          {title}
        </h1>
        <div className="mt-6 space-y-6">
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Your name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tyler Durden"
                className="mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label
                htmlFor="image"
                className="text-sm font-medium text-gray-700"
              >
                Your image
              </Label>
              <div className="mt-1 border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageUpload}
                />
                {image ? (
                  <div className="relative">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt="Preview"
                      className="max-w-full h-auto rounded-lg"
                      height={200}
                      width={200}
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={handleCancelUpload}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                        <FileImage className="w-6 h-6 text-gray-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        Click to upload
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        Max size: 5MB - PNG, JPEG & WebP
                      </span>
                    </div>
                  </label>
                )}
              </div>
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Your email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tylerdurden@fightclub.com"
                className="mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label
                htmlFor="profession"
                className="text-sm font-medium text-gray-700"
              >
                Your profession
              </Label>
              <Input
                id="profession"
                type="text"
                placeholder="Soap salesman"
                className="mt-1"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-4">
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-xl h-[45px]"
              onClick={() => setSlide(4)}
            >
              <Pencil className="mr-2 h-4 w-4" />
              Submit
            </Button>
            <div className="flex flex-col items-center justify-center pt-2">
              <p className="text-sm text-gray-500">or</p>
              <button
                type="button"
                className="text-sm font-semibold text-primary hover:underline mt-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => setSlide(1)}
              >
                Edit response
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
