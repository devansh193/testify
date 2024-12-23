import { atom, selector } from "recoil";

export const userNameAtom = atom<string>({
  key: "userNameAtom", // Previously: nameAtom
  default: "",
});

export const userEmailAtom = atom<string>({
  key: "userEmailAtom", // Previously: emailAtom
  default: "",
});

export const userImageAtom = atom({
  key: "userImageAtom", // Previously: imageAtom
  default: {
    file: null as File | null, // File type (null initially)
    preview: "", // Preview string (e.g., URL or base64 image)
    uploading: false, // Boolean to track upload status
    error: "", // String for error message if any
  },
});

export const feedbackPageTitleAtom = atom<string>({
  key: "feedbackPageTitleAtom", // Previously: pageTitleAtom
  default: "Show us some love with your feedback!",
});

export const feedbackBoardTitleAtom = atom<string>({
  key: "feedbackBoardTitleAtom", // Previously: boardAtom
  default: "TESTIFY",
});

export const personalFeedbackTitleAtom = atom<string>({
  key: "personalFeedbackTitleAtom", // Previously: personalPageTitle
  default: "How about getting personal?",
});

export const feedbackDescriptionAtom = atom<string>({
  key: "feedbackDescriptionAtom", // Previously: descriptionAtom
  default:
    "We appreciate you taking the time to share your experience with testify. Your feedback helps us improve and helps others make informed decisions.",
});

export const currentSlideIndexAtom = atom<number>({
  key: "currentSlideIndexAtom", // Previously: slideAtom
  default: 0,
});

export const videoReviewTitleAtom = atom<string>({
  key: "videoReviewTitleAtom", // Previously: videoTitle
  default: "Lights, Camera, Shoot",
});

export const videoSlideIndexAtom = atom<number>({
  key: "videoSlideIndexAtom", // Previously: videoSlideAtom
  default: 0,
});

export const videoSlideSelector = selector<number>({
  key: "videoSlideSelector", // Previously: videoSlideSelector
  get: ({ get }) => get(videoSlideIndexAtom),
  set: ({ set }, newValue) => {
    if (typeof newValue === "number") {
      const clampedValue = Math.max(0, Math.min(2, newValue));
      set(videoSlideIndexAtom, clampedValue);
    }
  },
});

export const slideSelector = selector<number>({
  key: "slideSelector", // Previously: slideSelector
  get: ({ get }) => get(currentSlideIndexAtom),
  set: ({ set, get }, newValue) => {
    if (typeof newValue === "number") {
      const maxSlide = get(isVideoReviewEnabledAtom) ? 5 : 4;
      const clampedValue = Math.max(0, Math.min(maxSlide, newValue));
      set(currentSlideIndexAtom, clampedValue);
    }
  },
});

export const feedbackQuestionsAtom = atom<string[]>({
  key: "feedbackQuestionsAtom", // Previously: questionsAtom
  default: [
    "What problems did we help you solve?",
    "What have you been able to achieve since using our product/service?",
    "What exceeded your expectations or surprised you the most?",
    "What would you tell someone considering our product/service?",
  ],
});

export const videoReviewQuestionsAtom = atom<string[]>({
  key: "videoReviewQuestionsAtom", // Previously: videoQuestionsAtom
  default: [
    "What problems did we help you solve?",
    "What have you been able to achieve since using our product/service?",
    "What exceeded your expectations or surprised you the most?",
    "What would you tell someone considering our product/service?",
  ],
});

export const isVideoReviewEnabledAtom = atom<boolean>({
  key: "isVideoReviewEnabledAtom", // Previously: videoAtom
  default: true,
});

export const ratingTitleAtom = atom<string>({
  key: "ratingTitleAtom", // Previously: ratingTitleAtom
  default: "Rate your experience",
});

export const isStarRatingEnabledAtom = atom<boolean>({
  key: "isStarRatingEnabledAtom", // Previously: starAtom
  default: true,
});

export const logoUrlAtom = atom<string>({
  key: "logoUrlAtom", // Previously: logoUrlAtom
  default: "/placeholder.svg?height=80&width=80",
});

export const isDialogOpenAtom = atom<boolean>({
  key: "isDialogOpenAtom", // Previously: dialogAtom
  default: false,
});

export const userRatingAtom = atom<number>({
  key: "userRatingAtom", // Previously: ratingsAtom
  default: 0,
});

export const userTextReviewAtom = atom<string>({
  key: "userTextReviewAtom", // Previously: textReviewAtom
  default: "",
});

export const productIdAtom = atom<string>({
  key: "productIdAtom", // Previously: productId
  default: "",
});

export const isSidebarOpenAtom = atom<boolean>({
  key: "isSidebarOpenAtom", // Previously: sidebarAtom
  default: false,
});

export const tagsAtom = atom<string[]>({
  key: "tagAtom",
  default: [
    "Easy to use",
    "UX/UI",
    "Provides result",
    "Great value",
    "Innovative",
    "Invaluable resource",
    "Time saver",
    "Great features",
    "Comprehensive",
    "Engaging",
    "Customer-focused",
    "Best-in-market",
    "Trustworthy",
    "Convenient",
    "Reliable",
    "Safety & security",
  ],
});
