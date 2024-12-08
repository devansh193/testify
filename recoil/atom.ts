import { atom, selector } from "recoil";

interface Question {
  id: number;
  text: string;
}
export const nameAtom = atom<string>({
  key: "nameAtom",
  default: "",
});

export const emailAtom = atom<string>({
  key: "emailAtom",
  default: "",
});

export const imageAtom = atom({
  key: "imageAtom", // A unique key for this atom
  default: {
    file: null as File | null, // File type (null initially)
    preview: "", // Preview string (e.g., URL or base64 image)
    uploading: false, // Boolean to track upload status
    error: "", // String for error message if any
  },
});

export const titleAtom = atom<string>({
  key: "titleAtom",
  default: "",
});

export const slideAtom = atom<number>({
  key: "slideNumber",
  default: 1,
});

export const descriptionAtom = atom<string>({
  key: "descriptionAtom",
  default: "Describe ",
});

export const questionsAtom = atom<Question[]>({
  key: "questionsAtom",
  default: [{ id: 1, text: "How would you rate our product?" }],
});

export const videoAtom = atom<boolean>({
  key: "videoReview",
  default: true,
});

export const showLogoAtom = atom<boolean>({
  key: "showLogoAtom",
  default: true,
});

export const logoUrlAtom = atom<string>({
  key: "logoUrlAtom",
  default: "/placeholder.svg?height=80&width=80",
});
export const dialogAtom = atom<boolean>({
  key: "isDialogOpen",
  default: false,
});

export const ratingsAtom = atom({
  key: "ratingsAtom",
  default: 0,
});

export const textReviewAtom = atom<string>({
  key: "textReviewAtom",
  default: "",
});

export const productId = atom<string>({
  key: "idAtom",
  default: "",
});
export const sidebarAtom = atom<boolean>({
  key: "sidebarAtom",
  default: false,
});

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

export const titleSelector = selector({
  key: "titleSelector",
  get: ({ get }) => get(formDataState).title,
  set: ({ set }, newValue) =>
    set(formDataState, (prevState) => ({
      ...prevState,
      title: newValue as string,
    })),
});

export const descriptionSelector = selector({
  key: "descriptionSelector",
  get: ({ get }) => get(formDataState).description,
  set: ({ set }, newValue) =>
    set(formDataState, (prevState) => ({
      ...prevState,
      description: newValue as string,
    })),
});

export const imageSelector = selector({
  key: "imageSelector",
  get: ({ get }) => get(formDataState).image,
  set: ({ set }, newValue) =>
    set(formDataState, (prevState) => ({
      ...prevState,
      image: newValue as FormData["image"],
    })),
});

export const questionsSelector = selector({
  key: "questionsSelector",
  get: ({ get }) => get(formDataState).questions,
  set: ({ set }, newValue) =>
    set(formDataState, (prevState) => ({
      ...prevState,
      questions: newValue as string[],
    })),
});

export const emojiRatingsSelector = selector({
  key: "emojiRatingsSelector",
  get: ({ get }) => get(formDataState).emojiRatings,
  set: ({ set }, newValue) =>
    set(formDataState, (prevState) => ({
      ...prevState,
      emojiRatings: newValue as boolean,
    })),
});

export const videoReviewSelector = selector({
  key: "videoReviewSelector",
  get: ({ get }) => get(formDataState).videoReview,
  set: ({ set }, newValue) =>
    set(formDataState, (prevState) => ({
      ...prevState,
      videoReview: newValue as boolean,
    })),
});

export const thankYouMessageSelector = selector({
  key: "thankYouMessageSelector",
  get: ({ get }) => get(formDataState).thankYouMessage,
  set: ({ set }, newValue) =>
    set(formDataState, (prevState) => ({
      ...prevState,
      thankYouMessage: newValue as string,
    })),
});
