import { atom } from "recoil";

export interface FormData {
  title: string;
  description: string;
  image: {
    file: File | null;
    preview: string;
    uploading: boolean;
    error: string;
  };
  questions: string[];
  emojiRatings: boolean;
  videoReview: boolean;
  thankYouMessage: string;
}

export const formDataState = atom<FormData>({
  key: "formDataState",
  default: {
    title: "",
    description: "",
    image: {
      file: null,
      preview: "",
      uploading: false,
      error: "",
    },
    questions: [""],
    emojiRatings: true,
    videoReview: true,
    thankYouMessage: "",
  },
});

export const currentStepState = atom<number>({
  key: "currentStepState",
  default: 0,
});

export const isSidebarOpenState = atom<boolean>({
  key: "isSidebarOpenState",
  default: false,
});
