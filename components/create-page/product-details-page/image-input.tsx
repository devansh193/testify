"use client";
import { Label } from "@/components/ui/label";
import { userImageAtom } from "@/recoil/atom";
import { FileImage, Loader } from "lucide-react";
import { useRecoilState } from "recoil";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import React, { useRef } from "react";

export const ImageInput = () => {
  const [image, setImage] = useRecoilState(userImageAtom);
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
  const MAX_SIZE_MB = 5;
  const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setImage((prev) => ({
      ...prev,
      error: "",
      uploading: true,
    }));

    try {
      if (!file) {
        throw new Error("No file selected");
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        throw new Error("Invalid file type. Please upload PNG, JPEG, or WebP");
      }
      if (file.size > MAX_SIZE_BYTES) {
        throw new Error(`File size must be less than ${MAX_SIZE_MB}MB`);
      }
      const previewUrl = URL.createObjectURL(file);

      setImage({
        file: file,
        preview: previewUrl,
        uploading: false,
        error: "",
      });
    } catch (error) {
      setImage((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Upload failed",
        uploading: false,
      }));
    }
  };

  const removeImage = () => {
    if (image.preview) {
      URL.revokeObjectURL(image.preview);
    }
    setImage({
      file: null,
      preview: "",
      uploading: false,
      error: "",
    });

    // Reset the input value
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <Label htmlFor="image" className="text-md font-semibold">
        Product Image (Optional)
      </Label>
      <div className="mt-1 border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
        <input
          type="file"
          id="image"
          className="hidden"
          accept={ALLOWED_TYPES.join(",")}
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
        <label htmlFor="image" className="cursor-pointer">
          {image.uploading ? (
            <div className="flex items-center justify-center">
              <Loader className="w-6 h-6 animate-spin" />
            </div>
          ) : image.preview ? (
            <div className="relative">
              <Image
                height={200}
                width={500}
                src={image.preview}
                alt="Preview"
                className="max-h-48 mx-auto rounded ring-8 ring-gray-100"
              />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center mb-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <FileImage className="w-6 h-6 text-gray-400" />
                </div>
              </div>
              <div className="text-sm font-medium">Click to upload</div>
              <div className="text-xs text-gray-500">
                Max size: {MAX_SIZE_MB}MB - PNG, JPEG & WebP
              </div>
            </>
          )}
        </label>
      </div>

      {image.error && (
        <p className="mt-2 text-sm text-red-500">{image.error}</p>
      )}

      {image.preview && (
        <Button className="w-full mt-2" onClick={removeImage} variant="default">
          Remove Image
        </Button>
      )}
    </div>
  );
};
